import React from 'react';
import {
  Switch, Route, Link, BrowserRouter as Router
} from "react-router-dom";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function BoardContent({number, title, member, views, contents, setContents}){
  const handleClick = () => {
    var subcontent = {
      number : number,
      member : member,
      title : title,
      mainText : contents[number-1].mainText,
      views : views+1
    };
    var content1 = contents.slice(0,number-1);
    var content2 = contents.slice(number,contents.length)
    subcontent = content1.concat(subcontent);
    subcontent = subcontent.concat(content2);
    setContents(subcontent);
  }
  return (
    <TableRow>
        <TableCell>{number}</TableCell>
        <TableCell>
          <Link to={`/inner/${number}`} onClick={handleClick}>
            {title}</Link>
        </TableCell>
        <TableCell>{member}</TableCell>
        <TableCell>{views}</TableCell>
    </TableRow>
  );
}

export default BoardContent;