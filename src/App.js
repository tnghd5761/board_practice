import React, {useState} from 'react';
import './App.css';
import Register from './register.js';
import BoardPage from './BoardPage.js';
import MainPage from './MainPage.js';
import InnerText from './InnerText.js';
import WritePage from './WritePage.js';
import Profile from './Profile.js';
import {signIn} from './auth.js';
import AuthRoute from './AuthRoute.js';
import {
  Switch, Route, Link, BrowserRouter as Router
} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  }
}));

function App() {
  const classes = useStyles();
  const [user, setUser] = useState(null);
  const authenticated = user != null;

  const login = ({ member, password}) => setUser(signIn({ member, password}));
  const logout = () => setUser(null);

  return (
    <Router>
      <div>
        <body>
          <ul>
          </ul>
        </body>
      </div>

      <Route
        exact path='/'
        render={props => (
          <MainPage authenticated={authenticated} login={login} {...props}/>
        )}
      />
      <Route path='/register' component={Register}/>
      <Route path='/BoardPage' component={BoardPage}/>
      <Route exact path='/inner/:no' component={InnerText}/>
      <Route path='/WritePage' component={WritePage}/>
      <Route path='/profile' component={Profile}/>
      <AuthRoute
        authenticated={authenticated}
        path="/profile"
        render={props => <Profile user={user} {...props}/>}
      />
    </Router>
  );
}

export default App;