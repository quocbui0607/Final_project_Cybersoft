import "./home.scss";
import React, { Component } from "react";
import Carousel from "../_components/Carousel";
// import List from "../_components/List";
import ListMovie from "./ListMovie";

export default class HomePage extends Component {
  render() { 
    return (
      <div className="home">
        <Carousel/>
        <ListMovie/>
        <ListMovie/>
        {/* <div>
          <List/>
          <List/>
        </div>               
        <h3>HomePage</h3>
        <h3>HomePage</h3>
        <h3>HomePage</h3>
        <h3>HomePage</h3>
        <h3>HomePage</h3>
        <h3>HomePage</h3>
        <h3>HomePage</h3>         */}
      </div>
    );
  }
}
