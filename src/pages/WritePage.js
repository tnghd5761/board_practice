import React, {useEffect, useState} from 'react';
import {
    Switch, Route, Link, BrowserRouter as Router
  } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import axios from 'axios';

const usStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  }
}));

function InnerText() {
    const classes = usStyles();
    const [info, setInfo] = useState([]);

    const checkInfo = async () => {
      const response = await axios.get('/dummy/data.json');
      setInfo(response.data);
    }
    useEffect(() => {
      checkInfo();
    }, []);

    return (
        <Switch>
          <body>
              <ul>
              <Link to="/BoardPage">
                <Button variant="contained" color="primary" className={classes.margin}>
                  Home</Button>
              </Link>
              <h2>Write</h2>
              <div>
                <span>제목 : </span>
                <input type="text"></input>
                <p>내용</p>
                <input type="text"></input>
                <div></div>
              </div>
              <Link to='/BoardPage'>
                <Button
                  variant="contained" color="primary" className={classes.margin}
                  onClick={function(e){
                    console.log(info);
                    e.preventDefault();
                  }.bind(this)}>Submit</Button>
              </Link>
            </ul>
          </body>
        </Switch>
    );
}

export default InnerText;