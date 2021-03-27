import React, {useState} from 'react';
import {
  Switch, Route, Link, BrowserRouter as Router
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core';
import MainPage from './MainPage';

const usStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  }
}));

function Register({members, setMembers}) {
  const classes = usStyles();

  const [member, setMember] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleClick = () => {
    const newMember = {member : member, password : password, name : name};
    setMembers(members.concat(newMember));
  }
  return (
    <Switch>
      <div>
        <body>
            <ul>
            <h2>Register</h2>
            <Table>
              <TableRow>
                <TableCell>아이디</TableCell>
                <TableCell>
                  <input
                    value={member}
                    onChange={({target:{value}}) => setMember(value)}
                    type="text"
                    placeholder="member"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>비밀번호</TableCell>
                <TableCell>
                  <input
                    value={password}
                    onChange={({target:{value}}) => setPassword(value)}
                    type="text"
                    placeholder="password"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>이름</TableCell>
                <TableCell>
                  <input
                    value={name}
                    onChange={({target:{value}}) => setName(value)}
                    type="text"
                    placeholder="name"
                  />
                </TableCell>
              </TableRow>
            </Table>
            <Link to="/">
              <Button variant="contained" color="primary" className={classes.margin}
                onClick={handleClick}>Submit</Button>
            </Link>
          </ul>
        </body>
      </div>
      <Route path='/' component={MainPage}/>
    </Switch>
  );
}

export default Register;