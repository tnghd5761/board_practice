import React, {Component} from 'react';
import boardList from './boardList';
//import boardDetail from './boardDetail';
import {
  Switch, Route, Link, BrowserRouter as Router
} from "react-router-dom";

function boardContent({match}) {
  
  return(
      <ul>
        <h1>Board Main</h1>
        <Route exact path={match.path}
        component={boardList} />
        {/* <Route path={`${match.path}/:id`}
        component={boardDetail} /> */}
      </ul>
  );
}

export default boardContent;