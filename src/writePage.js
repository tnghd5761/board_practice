import React, {Component} from 'react';
import {writing} from './boardContent/data.json';
import {
  Switch, Route, Link, BrowserRouter as Router
} from "react-router-dom";

function writePage(props) {
  
  return(
    <ul>
      <h2>Write Page</h2>
      {/* <form action="write_propcess" method="post"
        onSubmit={function(e){
          e.preventDefault();
          this.props.onSubmit(
            e.target.member.value,
            e.target.title.value,
            e.target.t_main.value
          );
          alert('Submit!!');
        }.bind(this)}
      > */}
      
      <table>
        <tr>
            <th>member</th>
            <th><input name="member"></input></th>
        </tr>
        <tr>
            <th>title</th>
            <th><input name="title"></input></th>
        </tr>
      </table>
      <hr />
      <p>Main text</p>
      <input name="t_main"></input>
      <input type="submit"></input>
      {/* </form> */}
    </ul>
  );
}

export default writePage;