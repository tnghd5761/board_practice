import React, {Component} from 'react';
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
import BoardContent from './BoardContent.js';
import BoardData from './data.json';

const usStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  }
}));

function BoardPage() {
  const classes = usStyles();
  return (
    <div>
      <body>
          <ul>
          <h2>BoardPage</h2>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>제목</TableCell>
                <TableCell>작성자</TableCell>
                <TableCell>조회수</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {BoardData.map(c => {
                return <BoardContent key = {c.number} number={c.number} title={c.title} member={c.member} views={c.views}/>
              })}
            </TableBody>
          </Table>
          <Button variant="contained" color="primary" className={classes.margin}>
            Write
          </Button>
        </ul>
      </body>
    </div>
  );
}

export default BoardPage;