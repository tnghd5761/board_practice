import React, {useEffect, useState} from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import BoardData from './data.json';

function InnerText({history, location, match}) {
    const { no } = match.params;
    return (
        <div>
          <body>
              <ul>
              <h2>Inner</h2>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>번호</TableCell>
                    <TableCell>제목</TableCell>
                    <TableCell>작성자</TableCell>
                    <TableCell>조회수</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableCell>{BoardData[no-1].number}</TableCell>
                    <TableCell>{BoardData[no-1].title}</TableCell>
                    <TableCell>{BoardData[no-1].member}</TableCell>
                    <TableCell>{BoardData[no-1].views}</TableCell>
                </TableBody>
              </Table>
              <p>{BoardData[no-1].mainText}</p>
              {/* <Button variant="contained" color="primary" className={classes.margin}>
                Write
              </Button> */}
            </ul>
          </body>
        </div>
    );
}

export default InnerText;