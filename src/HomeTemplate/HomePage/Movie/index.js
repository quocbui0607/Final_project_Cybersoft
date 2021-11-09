import "./movie.scss";
import React, { Component } from "react";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownAltOutlined,
} from "@material-ui/icons";
// import ModalVideo from "react-modal-video";
// import YoutubeParser from "../../../common/YoutubeIdParser";


export default class Movie extends Component {  
  //  constructor () {
  //   super()
  //   this.state = {
  //     isOpen: false
  //   }
  //   this.openModal = this.openModal.bind(this)
  // }

  // openModal() {
  //   this.setState({isOpen: true})
  // } 
  render() {
      const { movie } = this.props;
      return (    
      <div className="movie">
        {/* <ModalVideo 
        className="modal-video"
        channel="youtube" 
        isOpen={this.state.isOpen}         
        controls={1}
        theme="dark"             
        videoId={movie && YoutubeParser(movie?.trailer)} 
        onClose={() => this.setState({isOpen: false})}/> */}
        <img className="moviePic" src={movie.hinhAnh} alt="" />                 
        {/* <div className="moviePlay">          
          <button className="play-btn" onClick={this.openModal}>
            <PlayArrow />
          </button>                      
        </div>          */}
      </div>                   
  );
  }
  
}
