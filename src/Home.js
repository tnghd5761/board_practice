import React, {Component} from 'react';
import WritePage from "./WritePage.js"
import './App.css';
import {
  Switch, Route, Link, BrowserRouter as Router
} from "react-router-dom";


class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'welcome'
      }
  }

  render(){
    return (
      <Router>
        <div className="Home">
          <ul>

            <body>
              <p>content</p>
            </body>
            <hr />
          </ul>
        </div>
      </Router>
    );
  }
}

export default Home;
