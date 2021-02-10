import React, {Component} from 'react';
import boardList from './boardList';
import boardDetail from './boardDetail';
import writePage from '../writePage';
import home from '../App.js';
import {
  Switch, Route, Link, BrowserRouter as Router
} from "react-router-dom";

function boardContent({match}, props) {
  
  return(
      <ul>
        <Route exact path={match.path}
        component={boardList} />
        <Route path={"/writePage"}
        component={writePage} />
        <Route path={"/home"}
        component={home} />
        <Route path={`${match.path}/:id`}
        component={boardDetail} />
      </ul>
  );
}

export default boardContent;