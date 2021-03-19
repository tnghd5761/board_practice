import React, {useEffect, useState} from 'react';
import BoardContent from './BoardContent.js';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import axios from 'axios';

function InnerText({history, location, match}) {
    const { no } = match.params;
    const [info, setInfo] = useState([]);

    const checkInfo = async () => {
      const res = await axios.get('/data.json');
      setInfo(res.data);
    }
    useEffect(() => {
      checkInfo();
    }, []);

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
                    {/* <TableCell>{info[no-1].number}</TableCell>
                    <TableCell>{info[no-1].title}</TableCell>
                    <TableCell>{info[no-1].member}</TableCell>
                    <TableCell>{info[no-1].views}</TableCell> */}
                  </TableBody>
              </Table>
              하이
              {console.log(info[0])}
              {console.log(info[1])}
              <p>{info[no-1].mainText}</p>
            </ul>
          </body>
        </div>
    );
}

export default InnerText;