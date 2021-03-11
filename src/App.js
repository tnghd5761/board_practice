import React, {Component} from 'react';
import './App.css';
import Register from './register.js';
import BoardPage from './BoardPage.js';
import MainPage from './MainPage.js';
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
            <Link to="./">
              <Button variant="contained" color="primary" className={classes.margin}>
                Home</Button>
              </Link>
              <div></div>
            
          </ul>
        </body>
      </div>

      <Route exact path='/' component={MainPage}/>
      <Route path='/register' component={Register}/>
      <Route path='/BoardPage' component={BoardPage}/>
    </Router>
  );
}

export default App;