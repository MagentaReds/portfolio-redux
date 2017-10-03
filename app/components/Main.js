// var router = require("react-router-dom");
// var Route = router.Route;
// var Link = require("react-router-dom").Link;

import {Route, Link} from "react-router-dom";

import React, {Component} from "react";

class Main extends Component {

  constructor(props){
    super(props);
  }

  componentDidUpdate(prevState) {
  }

  componentDidMount() {
  }


  render() {
    return (
      <div className="container">
        <p> HELLO WORLD </p>
      </div>
    );
  }
}

//test main for reference
/*class Main extends Component {
  render() {
    return (
      <div className="container">
        <Link to="/results"><button className="btn btn-default">Results</button></Link>
        <Link to="/saved"><button className="btn btn-default">Saved Articles</button></Link>
        <h1> THIS IS A THING </h1>
        <Search thing={"Hello"} />
        {this.props.children}
        <div>
          <Route exact path="/" component={Results}/>
          <Route path="/results" component={Results} />
          <Route path="/saved" component={Saved} />
        </div>
      </div>
      
    );
  }
}*/


export default Main;