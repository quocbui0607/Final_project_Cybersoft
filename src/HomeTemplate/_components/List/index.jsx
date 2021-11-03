import "./list.scss";
import React, { useRef, useState } from "react";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import ListItem from "../ListItem";

export default function List() {
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();
  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 65;
    if(direction === "left" && slideNumber > 0) {
        setSlideNumber(slideNumber - 1);
        listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if(direction === "right" && slideNumber < 5) {
        setSlideNumber(slideNumber + 1);
        listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }   
    console.log(distance);
  }

  return (
    <div className="list">
      <span className="list-title">Continue to watch for...</span>
      <div className="wrapper">
        <ArrowBackIosOutlined className="sliderArrow left" 
        onClick={() => {
            handleClick("left")
        }} />
        <div className="box" ref={listRef}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />          
        </div>
        <ArrowForwardIosOutlined className="sliderArrow right"
        onClick={() => {
            handleClick("right")
        }} />
      </div>
    </div>
  );
}
