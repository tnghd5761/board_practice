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

function WritePage({contents, setContents, user}) {
    const classes = usStyles();

    const [title, setTitle] = useState("");
    const [mainText, setMaintext] = useState("");
    
    const handleClick = () => {
      const newContent = {
        number : contents.length+1,
        member : user.member,
        title : title,
        mainText : mainText,
        views : 0
      };
      setContents(contents.concat(newContent));
    }
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
                <input
                    value={title}
                    onChange={({target:{value}}) => setTitle(value)}
                    type="text"
                    placeholder="title"
                  />
                <p>내용</p>
                <input
                    value={mainText}
                    onChange={({target:{value}}) => setMaintext(value)}
                    type="text"
                    placeholder="mainText"
                  />
                <div></div>
              </div>
              <Link to='/BoardPage'>
                <Button
                  variant="contained" color="primary" className={classes.margin}
                  onClick={handleClick}>Submit</Button>
              </Link>
            </ul>
          </body>
        </Switch>
    );
}

export default WritePage;