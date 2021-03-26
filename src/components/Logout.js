import React from "react";
import { withRouter } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const usStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
    }
  }));

function Logout({logout, history}) {
    const classes = usStyles();
    const handleClick = () => {
        logout()
        history.push("/")
    }
    return <Button variant="contained" color="secondary" className={classes.margin} onClick={handleClick}>Logout</Button>
}

export default withRouter(Logout)