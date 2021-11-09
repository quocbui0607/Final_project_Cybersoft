import "./carousel.scss";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import React, { Component } from "react";
import ModalVideo from "react-modal-video";
// import YoutubeParser from "../../../common/YoutubeIdParser";
import OwlCarousel from "react-owl-carousel";

export default class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <div className="carousel">
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          autoplay
          controls={1}
          theme="dark"          
          videoId="ndl1W4ltcmg"
          onClose={() => this.setState({ isOpen: false })}
        />    
        
            <img
          style={{ width: "100%" }}
          src="./img/thewitcherbanner.jpg"
          alt="carousel-cover"
        />
        <div className="info">
          <img src="./img/thewitcher_title.png" alt="title" />
          <span className="desc">
            The Witcher follows the story of Geralt of Rivia, a solitary monster
            hunter, who struggles to find his place in a world where people
            often prove more wicked than monsters and beasts. Geralt of Rivia is
            a witcher, a mutant with special powers who kills monsters for
            money.
          </span>
          <div className="buttons">
            <button className="play" onClick={this.openModal}>
              <PlayArrow />
              <span>Play</span>
            </button>
            <button className="more">
              <InfoOutlined />
              <span>Info</span>
            </button>
          </div>
        </div>               
        
      </div>
    );
  }
}
