import "./register.scss";
import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import Download from "../../common/Downloading";
import Footer from "../../HomeTemplate/_components/Footer";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStarted = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinished = () => {
    setPassword(passwordRef.current.value);
  };
  return (
    <div
      className="register"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%),url(img/netflix.jpg)",
        backgroundSize: "cover",
      }}
    >
      <div className="top">
        <div className="container">
          <span className="logo">HOMEFLIX</span>
          <button className="signIn-btn">
            <NavLink className="nav-link" to="/login">
              Sign In
            </NavLink>
          </button>
        </div>
      </div>
      <div className="container bottom">
        <h1>Unlimited movies, TV shows, and more</h1>
        <h2>Watch anywhere. Cancel anytime</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership
        </p>
        {!email ? (
          <div className="input">
            <input
              type="email"
              placeholder="example@gmail.com"
              ref={emailRef}
            />
            <button className="register-btn" onClick={handleStarted}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="register-btn" onClick={handleFinished}>
              Start
            </button>
          </form>
        )}
      </div>

      <div className="enjoy">
        <div className="box">
          <div className="container">
            <div className="content">
              <h1>Enjoy on your TV.</h1>
              <p>
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </p>
            </div>

            <div className="advertise">
              <div className="img">
                <img src="./img/tv.png" alt="television" />
              </div>
              <div className="video">
                <video
                  src="./video-tv-0819.m4v"
                  autoplay="true"
                  playsInline=""
                  muted=""
                  loop="true"
                ></video>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="download">
        <div className="container">
          <div className="phone">
            <img src="./img/mobile.jpg" alt="phone"/>
            <div className="phone-content">
                <div className="content-1">
                    <img src="./img/intoDarkness.jpg" alt="poster"/>
                </div>
                <div className="content-2">
                    <h5>IN THE DARKNESS</h5>
                    <span>Downloading ...</span>                    
                </div>
                <div className="content-3">
                    <Download/>
                </div>
            </div>
          </div>

          <div className="content">
              <h1>Download your shows to watch offline.</h1>
              <p>
              Save your favorites easily and always have something to watch.
              </p>
          </div>
        </div>
      </div>

      <div className="enjoy">
        <div className="box">
          <div className="container">
            <div className="content">
              <h1>Create profiles for kids.</h1>
              <p>
                Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
              </p>
            </div>
            <div className="advertise">
              <img src="./img/kids.png" alt="kids"/>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
