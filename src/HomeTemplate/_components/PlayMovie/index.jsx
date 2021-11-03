import "./playMovie.scss";
import React from 'react'
import { ArrowBackOutlined } from "@material-ui/icons";
import { Player } from 'video-react';

export default function PlayMovie() {
    return (
        <div className="playMovie">
            <div className="back">
                <ArrowBackOutlined/>
                Home 
            </div>
           {/* <video className="video" autoPlay controls progress 
           rc="https://www.youtube.com/embed/oVzVdvGIC7U">
            </video> */}

            <Player
                autoPlay
                playsInline
                poster="/assets/poster.png"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />

           {/* <iframe width={1266} height={480} 
           autoPlay={true}
           controls progress 
           src="https://www.youtube.com/embed/oVzVdvGIC7U" 
           title="YouTube video player" frameBorder={0} 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
           allowFullScreen={true} /> */}
        </div>
    )
}



