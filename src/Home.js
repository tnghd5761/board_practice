import React, {Component} from 'react';
import Write from "./Write.js"
import './App.css';
import './App.js'
import TOC from './components/TOC'
import {
  Switch, Route, Link, BrowserRouter as Router
} from "react-router-dom";

function Home({match}) {

  return (
      <div className="Home">
        <ul>
          hello
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>title</th>
                <th>member</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>board</td>
                <td>공지사항</td>
                <td>administer</td>
              </tr>
              <tr>
                <td>2</td>
                <td>테스트</td>
                <td>ssu_hong</td>
              </tr>
            </tbody>
          </table>
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
