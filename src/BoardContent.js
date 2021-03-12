import React, {Component} from 'react';
import {
  Switch, Route, Link, BrowserRouter as Router
} from "react-router-dom";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function BoardContent() {
  return (
    <TableRow>
        <TableCell>{this.props.number}</TableCell>
        <TableCell>{this.props.title}</TableCell>
        <TableCell>{this.props.member}</TableCell>
        <TableCell>{this.props.views}</TableCell>
    </TableRow>
  );
}

export default BoardContent;