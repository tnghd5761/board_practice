import React, {Component} from 'react';
import Write from "./Write.js";
import Home from "./Home.js";
import boardContent from "./boardContent";
import TOC from './components/TOC';
import './App.css';
import {
  Switch, Route, Link, BrowserRouter as Router
} from "react-router-dom";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      boards: [
        {no:1, title:'공지사항', member:'administer'},
        {no:2, title:'테스트', member:'ssu_hong'}
      ]
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
            </header>
            <Link to="/writing">
              <button>board list</button>
            </Link>
          </ul>
          <main>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/home/write" component={Write} />
              <Route path="/writing" component={boardContent} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
