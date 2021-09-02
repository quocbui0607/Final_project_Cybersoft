import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer px-0 px-lg-3">
        <p className="copyright text-center my-0">
          © {new Date().getFullYear()} <a href="#pablo">Regal Team</a>, made
          with love for coding with ReactJS
        </p>
      </footer>
    );
  }
}

export default Footer;
