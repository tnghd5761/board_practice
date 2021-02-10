import React, {Component} from 'react';
import {writing} from './boardContent/data.json';
import {
  Switch, Route, Link, BrowserRouter as Router
} from "react-router-dom";

function writePage(props) {
  
  return(
    <ul>
      <h2>Write Page</h2>
      <fieldset>
        <table>
          <tr>
              <th>member</th>
              <th><input name="member" onChange={props.onMemberChange} /></th>
          </tr>
          <tr>
              <th>title</th>
              <th><input name="title" onChange={props.onTitleChange} /></th>
          </tr>
        </table>
        <hr />
        <p>Main text</p>
        <input name="t_main" onChange={props.onTmainChange} />
        <button onClick={props.onSubmit}>저장</button>
      </fieldset>
    </ul>
  );
}

export default writePage;