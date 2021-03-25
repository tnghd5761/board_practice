import React, {Component} from 'react';
import {
  Switch, Route, Link, BrowserRouter as Router
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  }
}));

function Profile({user}) {
  const classes = useStyles();
  const { member, password } = user || {}
  return (
    <Switch>
      <div>
        <body>
            <ul>
            <Link to="/BoardPage">
            <Button variant="contained" color="primary" className={classes.margin}>
              Home</Button>
          </Link>
            <h2>Profile</h2>
            <div></div>
            <table>
              <tr>
                <td>아이디</td>
                <td><html>:&nbsp;</html></td>
                <td>{member}</td>
              </tr>
              <tr>
                <td>비밀번호</td>
                <td><html>:&nbsp;</html></td>
                <td>{password}</td>
              </tr>
            </table>
          </ul>
        </body>
      </div>
    </Switch>
  );
}

export default Profile;