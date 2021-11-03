import "./listMovie.scss";
import React from "react";
import OwlCarousel from "react-owl-carousel";

import Movie from "../Movie";


export default function ListMovie() {
  return (    
    <>
     <div className="container-fluid">
          <span className="title text-white">Continue to watch for...</span>   
          <OwlCarousel
        items={4}
        className="owl-carousel owl-theme"
        loop={false}
        nav
        margin={8}
      >
       <Movie index={0}/>
       {/* <Movie index={1}/>
       <Movie index={2}/>
       <Movie index={3}/>             */}
      </OwlCarousel>         
      </div>          
    </>
  );
}
