import React, {Component} from 'react';
import {
  Switch, Route, Link, BrowserRouter as Router
} from "react-router-dom";
import Button from '@material-ui/core/Button';

function register() {
  return (
    <div>
      <body>
          <ul>
          <h2>Register</h2>
          <div></div>
          <p>입력</p>
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </ul>
      </body>
    </div>
  );
}

export default register;