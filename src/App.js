import React, {Component} from 'react';
import './App.css';
import Register from './register.js';
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
            <h2>Home Page</h2>
            <div></div>
            <Button variant="contained" color="primary" className={classes.margin}>
              Hello
            </Button>
            <Link to="./register">
              <Button variant="contained" color="secondary" className={classes.margin}>
                Register</Button>
            </Link>
          </ul>
        </body>
      </div>

      <Route exact path='/' component={MainPage}/>
      <Route path='/register' component={Register}/>
    </Router>
  );
}

export default App;