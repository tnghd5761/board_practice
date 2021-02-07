import React, {Component} from 'react';
import Write from "./Write.js"
import './App.css';
import './App.js'
import {
  Switch, Route, Link, BrowserRouter as Router
} from "react-router-dom";

function Home({match}) {
  
  return (
      <div className="Home">
        <ul>
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
                <td>1</td>
                <td>공지사항</td>
                <td>Administer</td>
                {/* {num:1, title:'공지사항', member:'Administer'}, */}
                {/* {num:2, title:'테스트', member:'ssu_hong'} */}
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
