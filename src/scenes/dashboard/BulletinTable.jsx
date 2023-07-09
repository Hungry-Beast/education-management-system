
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from "styled-components";

const PushBtn = styled.span`
    background-color: #3628b4;
    border-radius: 3px;
    padding: 5px 10px;
    color: white;
    /* margin-left: 80px; */
`;

function createData(title, postedOn, push) {
  return { title, postedOn, push};
}

const rows = [
  createData('Payment successful for unique id: 7495 amount: Rs 1000 and transaction id is 64173892', "Posted at 02-07-2023 12:51:03", "push"),
  createData('Payment successful for unique id: 7495 amount: Rs 1000 and transaction id is 64173892', "Posted at 02-07-2023 12:51:03", "push"),
  createData('Payment successful for unique id: 7495 amount: Rs 1000 and transaction id is 64173892', "Posted at 02-07-2023 12:51:03", "push"),
  createData('Payment successful for unique id: 7495 amount: Rs 1000 and transaction id is 64173892', "Posted at 02-07-2023 12:51:03", "push"),
  createData('Payment successful for unique id: 7495 amount: Rs 1000 and transaction id is 64173892', "Posted at 02-07-2023 12:51:03", "push"),
];

export default function BulletinTable() {
  return (
    <TableContainer sx={{ width: '100%', maxHeight: '350px', overflowX: 'auto', px: "30px" }} component={Paper}>
      <Table aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >
               <p style={{fontSize: "15px", marginBottom: "-5px"}} ><strong>{row.title}</strong></p> 
                <p  >{row.postedOn}</p> 
              </TableCell>
              
              <TableCell align="right" > <PushBtn>{row.push}</PushBtn> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}