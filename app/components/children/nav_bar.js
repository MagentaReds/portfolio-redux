import React, {Component} from "react";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-7 col-xs-12">
            <div className="navbar-header myNavHeader text-center">
                <h1>Grant Daniels</h1>
            </div>
          </div>

          <div className="clearfix visible-xs"></div>

          <div className="col-md-4 col-sm-5 col-xs-12">
            <br/>
            <ul className="nav nav-pills nav-justified my_justified_fix">
              <li role="presentation" className="active"><a className="header_link" href="index.html">About</a></li>
              <li role="presentation" ><a href="portfolio.html">Portfolio</a></li>
              <li role="presentation" ><a href="contact.html">Contact</a></li>
            </ul>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;
