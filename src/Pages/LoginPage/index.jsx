import "./login.scss";
import React, { useState, useRef } from 'react';


export default function Login() {    
    return (
        <div className="login" 
        style={{
        backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%),url(img/netflix2.jpg)", 
        backgroundSize: "cover"}}>
            <div className="top">
                <div className="container">
                <span className="logo">HOMEFLIX</span>               
                </div>               
            </div>
            <div className="container bottom">
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Example@gmail.com"/>
                    <input type="password" placeholder="Password"/>
                    <button className="login-btn">Sign In</button>
                    <div className="input">
                        <div>
                            <input type="checkbox" id="remember" name="remember" value="pass"/>
                            <label for="remember"> Remember me</label> 
                        </div>                        
                        <span>Need help?</span>
                    </div>    
                    <div className="input-facebook">
                        <i className="fab fa-facebook-square"></i>             
                        <span>Login with Facebook.</span>
                    </div>                
                    <span>New to HomeFlix ? <b>Sign up now.</b></span>                   
                </form>
            </div>
        </div>
    )
}
