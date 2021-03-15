import React, {Component} from 'react';
import './App.css';
import Register from './register.js';
import BoardPage from './BoardPage.js';
import MainPage from './MainPage.js';
import InnerText from './InnerText.js';
import WritePage from './WritePage.js';
import {
  Switch, Route, Link, BrowserRouter as Router
} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div>
        <body>
          <ul>
          </ul>
        </body>
      </div>

      <Route exact path='/' component={MainPage}/>
      <Route path='/register' component={Register}/>
      <Route path='/BoardPage' component={BoardPage}/>
      <Route exact path='/inner/:no' component={InnerText}/>
      <Route path='/WritePage' component={WritePage}/>
    </Router>
  );
}

export default App;