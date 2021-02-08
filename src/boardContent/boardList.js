import React, {Component} from 'react';
import {writing} from './data.json';
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
                  <td>{title}</td>
                  <td>{member}</td>
                </tr>
            ))}

          </tbody>

      </table>
    </>
  );
}

export default boardList;