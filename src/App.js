import React, {Component} from 'react';
import Write from "./Write.js"
import Home from "./Home.js"
import './App.css';
import {
  Switch, Route, Link, BrowserRouter as Router
} from "react-router-dom";


class App extends Component {

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
            </header>
          </ul>

          <main>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/home/write" component={Write} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
