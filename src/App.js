import React, {Component} from 'react';
import boardContent from "./boardContent";
import writePage from "./writePage";
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
              <Link to="/writing">
                <button>board list</button>
              </Link>
            </header>
          </ul>
          <main>
            <Switch>
              <Route path="/writing" component={boardContent} />
              <Route path="/writePage" component={writePage} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
