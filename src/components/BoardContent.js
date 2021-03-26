import React from 'react';
import {
  Switch, Route, Link, BrowserRouter as Router
} from "react-router-dom";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class BoardContent extends React.Component {
  render(){
    return (
      <TableRow>
          <TableCell>{this.props.number}</TableCell>
          <TableCell>
            <Link to={`/inner/${this.props.number}`}>
              {this.props.title}</Link>
          </TableCell>
          <TableCell>{this.props.member}</TableCell>
          <TableCell>{this.props.views}</TableCell>
      </TableRow>
    )
  }
}

export default BoardContent;