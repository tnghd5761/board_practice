import React, {Component} from 'react';
import WritePage from "./WritePage.js"
import Home from "./Home.js"
import './App.css';
import {
  Switch, Route, Link, BrowserRouter as Router
} from "react-router-dom";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'welcome'
      }
  }

  render(){
    return (
      <Router>
        <div className="App">
          <ul>
            <strong>BoardSH</strong>
            <header>
              <Link to="/home">
                <button>home</button>
              </Link>
              <Link to="/write">
                <button>write</button>
              </Link>
            </header>
          </ul>

          <main>
              <Route exact path="/home" component={Home} />
              <Route exact path="/write" component={WritePage} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
