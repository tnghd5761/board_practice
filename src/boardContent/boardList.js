import React, {Component} from 'react';
import {writing} from './data.json';
import writePage from '../writePage';
import {
  Switch, Route, Link, BrowserRouter as Router
} from "react-router-dom";

function boardList({match}) {
  
  return(
    <>
      <h2>Board List</h2>
      <table>
          <thead>
            <tr>
              <th>No</th>
              <th>title</th>
              <th>member</th>
            </tr>
          </thead>
          <tbody>
            {writing.map(({no, title, member}) => (
                <tr key={no}> 
                  <td>{no}</td>
                  <td><Link to={`${match.url}/${no}`}>{title}</Link></td>
                  <td>{member}</td>
                </tr>
            ))}

          </tbody>
      </table>
      <hr />
      <button><Link to={"/writePage"}>게시글 작성</Link></button>
      <p></p>
      <button><Link to={"/home"}>메인 화면</Link></button>
    </>
  );
}

export default boardList;