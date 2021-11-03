import "./footer.scss"
import React, { Component } from "react";
import { Copyright } from "@material-ui/icons";

export default class Footer extends Component {
  render() {
    return <div className="footer">
      <div className="container">        
        <span>More questions? <span className="contactUs">Contact us.</span></span>               

        <div className="contact">
          <div className="box contact-1">
            <span>FAQ</span>
            <span>Investor Relations</span>
            <span>Privacy</span>
            <span>Speed Test</span>
          </div>
          <div className="box contact-2">
            <span>Help Center</span>
            <span>Jobs</span>
            <span>Cookie Preferences</span>
            <span>Legal Notices</span>
          </div>
          <div className="box contact-3">
            <span>Account</span>
            <span>Ways to Watch</span>
            <span>Corporate Information</span>
            <span>Only on HomeFlix</span>
          </div>
          <div className="box contact-4">
            <span>Media Center</span>
            <span>Terms of Use</span>
            <span>Contact Us</span>            
          </div>
        </div>

        <span className="brand"><Copyright/>  HomeFlix Vietnam</span>
      </div>

      
    </div>;
  }
}
