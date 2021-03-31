import React, {useState, useEffect} from 'react';
import TestCompo from './TestCompo.js';
import './App.css';
import axios from 'axios';
import Register from './pages/Register.js';
import BoardPage from './pages/BoardPage.js';
import MainPage from './pages/MainPage.js';
import InnerText from './pages/InnerText.js';
import WritePage from './pages/WritePage.js';
import Profile from './pages/Profile.js';
import {signIn} from './components/auth.js';
import AuthRoute from './components/AuthRoute.js';
import {
  Switch, Route, Link, BrowserRouter as Router
} from 'react-router-dom';

function App() {

  const [members, setMembers] = useState([]);
  const checkMembers = async () => {
    const response = await axios.get("http://localhost:3000/dummy/userinfo.json");
    setMembers(response.data);
  }
  useEffect(() => {
    checkMembers();
  }, []);

  const [contents, setContents] = useState([]);
  const checkContents = async () => {
    const response = await axios.get("http://localhost:3000/dummy/data.json");
    setContents(response.data);
  }
  useEffect(() => {
    checkContents();
  }, []);

  const [user, setUser] = useState(null);
  const authenticated = user != null;

  const login = ({ member, password }) => setUser(signIn({members, member, password}));
  const logout = () => setUser(null);

  return (
    <Router>
      <div>
        <body>
          <ul>
            <TestCompo/>
          </ul>
        </body>
      </div>
      <Switch>
        <Route
          exact path='/'
          render={props => (
            <MainPage authenticated={authenticated} login={login} {...props}/>
          )}
        />
        <Route
          path='/register'
          render={props => (
            <Register members={members} setMembers={setMembers} {...props}/>
          )}
        />
        <Route
          path='/BoardPage'
          render={props => (
            <BoardPage logout={logout} contents={contents} setContents={setContents} {...props}/>
          )}
        />
        <Route
          exact path='/inner/:no'
          render={props => (
            <InnerText contents={contents} setContents={setContents} {...props}/>
          )}
        />
        <Route
          exact path='/WritePage'
          render={props => (
            <WritePage contents={contents} setContents={setContents} user={user}{...props}/>
          )}
        />
        <AuthRoute
          authenticated={authenticated}
          path="/profile"
          render={props => <Profile user={user} {...props}/>}
        />
      </Switch>
    </Router>
  );
}

export default App;