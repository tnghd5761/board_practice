import React, {Component} from 'react';
import Home from "./Home.js"
import {
  Switch, Route, Link, BrowserRouter as Router
} from "react-router-dom";

function Write({ match }) {
  return (
    <div className="Write">
      <ul>
        <header>
          <h3>WritePage</h3>
        </header>
        <tr>
          <th>member</th>
          <th><input></input></th>
        </tr>
        <tr>
          <th>title</th>
          <th><input></input></th>
        </tr>
        <tr>
          <th>content</th>
          <th><input></input></th>
        </tr>
        <p><Link to="/home">
         <input type="submit"></input>
        </Link></p>
      </ul>
      <main>
        <Route exact path="/home" component={Home} />
      </main>
    </div>
  );
}

export default Write;
