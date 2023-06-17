import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";

export default function SettingsTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              <Typography variant="h4">Subjects wise attendance?</Typography>
            </TableCell>
            <TableCell
              align="right"
              // sx={{ borderLeft: "1px solid black !important" }}
            >
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value={false}
                  control={<Radio color="success" />}
                  label="No"
                />
                <FormControlLabel
                  value={true}
                  control={<Radio color="success" />}
                  label="Yes"
                />
              </RadioGroup>
            </TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              <Typography variant="h4">Multiple sessions each day?</Typography>
            </TableCell>
            <TableCell
              align="right"
            //   sx={{ borderLeft: "1px solid black !important" }}
            >
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value={false}
                  control={<Radio color="success" />}
                  label="No"
                />
                <FormControlLabel
                  value={true}
                  control={<Radio color="success" />}
                  label="Yes"
                />
              </RadioGroup>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
