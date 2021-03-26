import React, {Component} from 'react';
import {
  Switch, Route, Link, BrowserRouter as Router
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core';
import {signUp} from '../components/auth.js';

const usStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  }
}));

function register() {
  const classes = usStyles();
  const newid = "newId";
  const newpw = "newPw";
  const newname = "newName";
  return (
    <Switch>
      <div>
        <body>
            <ul>
            <h2>Register</h2>
            <Table>
              <TableRow>
                <TableCell>아이디</TableCell>
                <TableCell><input type="text" name="user_id"></input></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>비밀번호</TableCell>
                <TableCell><input type="text" name="user_pw"></input></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>이름</TableCell>
                <TableCell><input type="text" name="user_name"></input></TableCell>
              </TableRow>
            </Table>
            <Button variant="contained" color="primary" className={classes.margin}
              onClick={function(e){
                signUp({newid, newpw, newname})
              }.bind(this)}>Submit</Button>
          </ul>
        </body>
      </div>
    </Switch>
  );
}

export default register;