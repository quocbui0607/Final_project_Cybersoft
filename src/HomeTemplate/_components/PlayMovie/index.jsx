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

            <Player
                autoPlay
                loop={false}
                playsInline
                poster="/assets/poster.png"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />           
        </div>
    )
}



