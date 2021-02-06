import React, {Component} from 'react';
import Write from "./Write.js"
import './App.css';
import {
  Switch, Route, Link, BrowserRouter as Router
} from "react-router-dom";

function Home({match}) {
  return (
      <div className="Home">
        <ul>

          <body>
            <p>content</p>
          </body>
          <hr />
          <Link to={`${match.url}/write`}>
              <button>write</button>
            </Link>
        </ul>
        <main>
          <Route exact path={`${match.url}/write`} component={Write} />
        </main>
      </div>
  );
}

export default Home;
