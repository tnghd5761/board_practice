import React, {useEffect, useState} from 'react';
import {
    Switch, Route, Link, BrowserRouter as Router
  } from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const usStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  }
}));

function InnerText() {
    const classes = usStyles();

    return (
        <Switch>
          <body>
              <ul>
              <h2>Write</h2>
              <div>
                <span>제목 : </span>
                <input type="text"></input>
                <p>내용</p>
                <input type="text"></input>
                <div></div>
              </div>
              <Link to='/BoardPage'>
                <Button variant="contained" color="primary" className={classes.margin}>
                    Submit</Button>
              </Link>
            </ul>
          </body>
        </Switch>
    );
}

export default InnerText;