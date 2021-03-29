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
import BoardContent from '../components/BoardContent.js';
import Logout from '../components/Logout.js';

const usStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  }
}));

function BoardPage({logout , contents, setContents}) {
  const classes = usStyles();

  return (
    <Switch>
      <body>
        <ul>
          <Link to="/BoardPage">
            <Button variant="contained" color="primary" className={classes.margin}>
              Home</Button>
          </Link>
          <Link to="/profile">
            <Button variant="contained" color="primary" className={classes.margin}>
              Profile</Button>
          </Link>
          <Logout logout={logout}/>
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
              {contents.map(c => {
                return <BoardContent
                  key = {c.number}
                  number={c.number}
                  title={c.title}
                  member={c.member}
                  views={c.views}
                  contents={contents} setContents={setContents}/>
              })}
            </TableBody>
          </Table>
          <Link to='/WritePage'>
            <Button variant="contained" color="primary" className={classes.margin}>
              Write</Button>
          </Link>
        </ul>
      </body>
    </Switch>
  );
}

export default BoardPage;