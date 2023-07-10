import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from "styled-components";


const AmountBtn = styled.span`
    background-color: #d6d6d6;
    padding: 4px 7px;
`

const PaidByBtn = styled.span`
    background-color: #3628b4;
    border-radius: 25px;
    padding: 5px 10px;
    color: white;
    /* margin-left: 80px; */
`;

const DateBtn = styled.span`
    background-color: #a9aee7a1;
    border-radius: 25px;
    padding: 5px 10px;
    color: #6711d6;
    /* margin-left: 80px; */
`;


function createData(title, classroom, amount, paidBy, paymentMode, date) {
  return { title, classroom, amount, paidBy, paymentMode, date};
}

const rows = [
  createData('Abi Regular',"I-A", "1000", "Paid by parent", "wallet", "02-07-2023 12:51:03"),
  createData('Abi Regular',"X-A", "1000", "Paid by parent", "wallet", "02-07-2023 12:51:03"),
  createData('BIJOY BASUMUTARY',"XIV-A", "8731", "Paid by parent", "wallet", "02-07-2023 12:51:03"),
  createData('BIJOY BASUMUTARY',"XIV-A", "9999", "Paid by parent", "wallet",  "02-07-2023 12:51:03"),
  createData('BIJOY BASUMUTARY',"XIV-A", "1000", "Paid by parent", "wallet", "02-07-2023 12:51:03"),
];

export default function FinanceTable() {
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
                 <AmountBtn>Rs.{row.amount}</AmountBtn> <PaidByBtn>{row.paidBy}</PaidByBtn> <DateBtn>{row.paymentMode}</DateBtn>  <DateBtn>{row.date}</DateBtn>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}