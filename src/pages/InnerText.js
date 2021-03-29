import React, {useEffect, useState} from 'react';
import {
  Switch, Route, Link, BrowserRouter as Router
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core';

const usStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  }
}));

function InnerText({contents, setContents, history, location, match}) {
  const classes = usStyles();
  const { no } = match.params;
  

  return (
      <Switch>
        <body>
          <ul>
          <Link to="/BoardPage">
            <Button variant="contained" color="primary" className={classes.margin}>
              Home</Button>
          </Link>
            <h2>Inner</h2>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>번호</TableCell>
                  <TableCell>제목</TableCell>
                  <TableCell>작성자</TableCell>
                  <TableCell>조회수</TableCell>
                </TableRow>
              </TableHead>
              {contents.slice((no-1), no).map(c => {
                return (
                  <TableBody key = {c.number}>
                    <TableCell>{c.number}</TableCell>
                    <TableCell>{c.title}</TableCell>
                    <TableCell>{c.member}</TableCell>
                    <TableCell>{c.views}</TableCell>
                  </TableBody>
                )
              })}
            </Table>
            {contents.slice((no-1), no).map(c => {
              return <p key = {c.number}>{c.mainText}</p>
            })}
          </ul>
        </body>
      </Switch>
  );
}

export default InnerText;