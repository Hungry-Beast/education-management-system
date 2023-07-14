import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from "styled-components";


const ApprovalBtn = styled.span`
    background-color: #d6d6d6;
    padding: 4px 7px;
`

const PaidByBtn = styled.span`
    background-color: #e07c18;
    border-radius: 25px;
    padding: 5px 10px;
    color: white;
    /* margin-left: 80px; */
`;


function createData(title, classroom, amount, paidBy, paymentMode, date) {
  return { title, classroom, amount, paidBy, paymentMode, date};
}

const rows = [
  createData('Abi Regular',"teacher"),
  createData('Abi Regular',"teacher"),
  createData('BIJOY BASUMUTARY',"teacher"),
  createData('BIJOY BASUMUTARY',"staff"),
  createData('BIJOY BASUMUTARY',"staff"),
];

export default function ApprovalTable() {
  return (
    <TableContainer sx={{ width: '100%', maxHeight: '240px', overflowX: 'auto', px: "10px" }} component={Paper}>
      <Table aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >
               <p style={{fontSize: "15px", marginBottom: "-12px", marginTop: "-2px"}} ><strong>{row.title}</strong></p> 
                <p style={{marginBottom: "-2px"}} >{row.classroom}</p> 
              </TableCell>
              
              <TableCell align="right">
                <ApprovalBtn>Approve for leave</ApprovalBtn> <PaidByBtn>pending</PaidByBtn>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}