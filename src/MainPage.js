import React, {Component} from 'react';
import {
  Switch, Route, Link, BrowserRouter as Router
} from "react-router-dom";
import Button from '@material-ui/core/Button';

function MainPage() {
  return (
    <div>
      <body>
          <ul>
          <h2>MainPage</h2>
          <div></div>
          <p>로그인</p>
          <Button variant="contained" color="primary">
            log in
          </Button>
        </ul>
      </body>
    </div>
  );
}

export default MainPage;