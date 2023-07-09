
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs};
}

const rows = [
  createData('Event', "notice", "09-07-2023 3:43 PM", "26-11-2023 3:43 PM"),
  createData('Test Notice', "notice", "09-07-2023 3:43 PM", "11-07-2023 3:43 PM"),
  createData('Test Notice', "notice", "09-07-2023 3:43 PM", "11-07-2023 3:43 PM"),
  createData('Test Notice', "notice", "09-07-2023 3:43 PM", "11-07-2023 3:43 PM"),
  createData('test notification settings', "notice", "09-07-2023 3:43 PM", "22-07-2023 3:43 PM"),
  createData('test notification settings', "notice", "09-07-2023 3:43 PM", "22-07-2023 3:43 PM"),
  createData('This is a test notice to check communication', "notice", "09-07-2023 3:43 PM", "25-07-2023 3:43 PM"),
];

export default function CalendarTable() {
  return (
    <TableContainer sx={{ width: '100%', maxHeight: '360px', overflowX: 'auto', px: "30px" }} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontSize: "16px"}} ><strong>Event</strong></TableCell>
            <TableCell sx={{fontSize: "16px"}} ><strong>Category</strong></TableCell>
            <TableCell sx={{fontSize: "16px"}} ><strong>Start</strong></TableCell>
            <TableCell sx={{fontSize: "16px"}} ><strong>End</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{fontSize: "14px", fontWeight: "600"}} >
                {row.name}
              </TableCell>
              <TableCell  >{row.calories}</TableCell>
              <TableCell sx={{color: "#1ddd67"}} >{row.fat}</TableCell>
              <TableCell sx={{color: "#c12e26"}} >{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}