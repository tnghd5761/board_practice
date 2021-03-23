import React, {useState} from 'react';
import Register from './register.js'
import BoardPage from './BoardPage.js';
import {
  Switch, Route, Link, BrowserRouter as Router, Redirect
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  }
}));

function MainPage({authenticated, login, location}) {
  const classes = useStyles();
  const [member, setMember] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    try {
      login({member, password})
    } catch (e) {
      alert("Failed to login")
      setMember("")
      setPassword("")
    }
  }
  
  const {from} = location.state || {from:{pathname:"/BoardPage"}}
  if(authenticated) return <Redirect to={from} />

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
                <td>
                  <input
                    value={member}
                    onChange={({target:{value}} ) => setMember(value)}
                    type="text"
                    placeholder="member"
                   />
                </td>
              </tr>
              <tr>
                <td>비밀번호</td>
                <td><html>&nbsp;</html></td>
                <td>
                  <input
                    value={password}
                    onChange={({target:{value}} ) => setPassword(value)}
                    type="password"
                    placeholder="password"
                   />
                </td>
              </tr>
            </table>
            {/* <Link to="/BoardPage"> */}
              <Button variant="contained" color="primary" onClick={handleClick}>
                log in</Button>
            {/* </Link> */}
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