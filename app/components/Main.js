// var router = require("react-router-dom");
// var Route = router.Route;
// var Link = require("react-router-dom").Link;

import {Route, Link} from "react-router-dom";
import React, {Component} from "react";

import ProjectModal from "./children/project_modal.js";
import ProjectEntry from "./children/project_entry.js";

var projects = require("./helpers/modal_entries.js");

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
        {projects.map((data, index) => {
          return ( 
            <div key={index}>
              <ProjectEntry col="col-md-3" entry={data} />
              <ProjectModal entry={data} />
            </div>
          );
        })}
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