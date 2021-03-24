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
import BoardContent from './BoardContent.js';
import Logout from './Logout.js';
import axios from 'axios';

const usStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  }
}));

function BoardPage({logout}) {
  const classes = usStyles();
  const [info, setInfo] = useState([]);
  const infoURL = "http://localhost:3000/dummy/data.json";

  const checkInfo = async () => {
    const response = await axios.get('/dummy/data.json');
    setInfo(response.data);
  }
  useEffect(() => {
    checkInfo();
  }, []);
  const addInfo = async () => {
    const info2 = [
      {
        number : 3,
        member : "administer",
        title : "두 번째 공지입니다.",
        mainText : "세 번째 게시글입니다.",
        views : 0
      }
    ];
    const newInfo = await axios.put(infoURL, info.concat(info2)); 
  }

  return (
    <Switch>
      <body>
        <ul>
          <Link to="/BoardPage">
            <Button variant="contained" color="primary" className={classes.margin}>
              Home</Button>
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
              {info.map(c => {
                return <BoardContent key = {c.number} number={c.number} title={c.title} member={c.member} views={c.views}/>
              })}
            </TableBody>
          </Table>
          <Link to='/WritePage'>
            <Button variant="contained" color="primary" className={classes.margin}>
              Write</Button>
          </Link>
          <Button
            variant="contained" color="primary" className={classes.margin}
            onClick={function(e){
              e.preventDefault();
              addInfo();
            }.bind(this)}>Submit</Button>
        </ul>
      </body>
    </Switch>
  );
}

export default BoardPage;