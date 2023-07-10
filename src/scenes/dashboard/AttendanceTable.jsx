
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

const DateBtn = styled.span`
    background-color: #20babc;
    border-radius: 25px;
    padding: 5px 10px;
    color: white;
    /* margin-left: 80px; */
`;

function createData(title, classroom, date) {
  return { title, classroom, date};
}

const rows = [
  createData('BIJOY BASUMUTARY',"XIV-A", "02-07-2023 12:51:03"),
  createData('BIJOY BASUMUTARY',"XIV-A", "02-07-2023 12:51:03"),
  createData('BIJOY BASUMUTARY',"XIV-A", "02-07-2023 12:51:03"),
  createData('BIJOY BASUMUTARY',"XIV-A",  "02-07-2023 12:51:03"),
  createData('BIJOY BASUMUTARY',"XIV-A", "02-07-2023 12:51:03"),
];

export default function AttendanceTable() {
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
               <p style={{fontSize: "15px", marginBottom: "-10px"}} ><strong>{row.title}</strong></p> 
                <p  >{row.classroom}</p> 
              </TableCell>
              
              <TableCell align="right">
                 <PushBtn>In</PushBtn> <DateBtn>{row.date}</DateBtn> <span style={{padding: "0 5px"}} ></span> <DateBtn>N/A</DateBtn> <PushBtn>Out</PushBtn>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}