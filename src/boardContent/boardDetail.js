import React, {Component} from 'react';
import {writing} from './data.json';
import {
  Switch, Route, Link, BrowserRouter as Router
} from "react-router-dom";

function boardDetail({match}) {
  const t_main = writing.find(t_main =>
    t_main.no === match.params.id);
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
            <tr>
              <td>{t_main.no}</td>
              <td>{t_main.title}</td>
              <td>{t_main.member}</td>
            </tr>
          </tbody>
      </table>
      <hr />
      {t_main.main_text}
    </>
  );
}

export default boardDetail;