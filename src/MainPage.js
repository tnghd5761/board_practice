import React, {Component} from 'react';
import Register from './register.js'
import BoardPage from './BoardPage.js';
import {
  Switch, Route, Link, BrowserRouter as Router
} from "react-router-dom";
import Button from '@material-ui/core/Button';
// import Table from '@material-ui/core/Table';
// import TableRow from '@material-ui/core/TableRow';
// import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  }
}));

function MainPage() {
  const classes = useStyles();
  return (
    <Switch>
      <div>
        <body>
            <ul>
            <h2>MainPage</h2>
            <div></div>
            <table>
              <tr>
                <td>아이디</td>
                <td><html>&nbsp;</html></td>
                <td><input type="text"></input></td>
              </tr>
              <tr>
                <td>비밀번호</td>
                <td><html>&nbsp;</html></td>
                <td><input type="text"></input></td>
              </tr>
            </table>
            <Link to="/BoardPage">
              <Button variant="contained" color="primary">
                log in</Button>
            </Link>
            <Link to="/register">
              <Button variant="contained" color="secondary" className={classes.margin}>
                Register</Button>
            </Link>
          </ul>
        </body>
      </div>

      <Route path='/BoardPage' component={BoardPage}/>
      <Route path='/register' component={Register}/>
    </Switch>
  );
}

export default MainPage;