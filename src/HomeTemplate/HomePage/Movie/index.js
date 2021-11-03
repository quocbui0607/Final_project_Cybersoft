import "./movie.scss";
import React, { useState } from "react";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownAltOutlined,
} from "@material-ui/icons";


export default function Movie(index) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer="https://player.vimeo.com/video/76979871?autoplay=1&loop=1&autopause=0";
  // const trailer="https://vimeo.com/242433726";
  return (    
      <div className="movie" 
      // style={{hover: isHovered && index * 1 }}
      onMouseEnter={()=>setIsHovered(true)} 
      onMouseLeave={()=>setIsHovered(false)}>
        <img className="moviePic" src="./img/demo.jpg" alt="" />       
        <video src="https://player.vimeo.com/video/76979871?autoplay=1&loop=1&autopause=0"
          autoPlay={true}
          loop
          />      
        {setIsHovered && (          
          <>          
          <div className="movieInfo">
            <div className="icons">
              <PlayArrow />
              <Add />
              <ThumbUpAltOutlined />
              <ThumbDownAltOutlined />
            </div>
            <div className="movieInfoTop">
              <span className="duration">1 hour 14 mins</span>
              <span className="limit">+18</span>
              <span className="year">2006</span>
            </div>
            <div className="desc">Lorem, ipsum dolor sit . aut, ipsum dicta</div>
            <div className="genre">Action</div>
          </div>
          </>
        )}
      </div>                   
  );
}
