import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function TimingFormTable() {
  const [formData, setFormData] = useState([
    {
      id: 1,
      name_1: "",
      startTime_1: new Date(),
      endTime_1: new Date(),
      break_1: "",
    },
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [reqDate, setreqDate] = useState(new Date());
  return (
    <form
      style={{ gridColumn: "span 2", marginBottom: "6px" }}
      onSubmit={handleSubmit}
    >
      <TableContainer
        component={Paper}
        sx={{ overflowY: "scroll", height: 250 }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Start Time</TableCell>
              <TableCell align="right">End Time</TableCell>
              <TableCell align="right">Break</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {formData.map((row, i) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <TextField
                    value={row[`name_${row.id}`]}
                    fullWidth
                    name={"name_" + row.id}
                  />
                </TableCell>
                <TableCell align="right">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["TimePicker"]}>
                      <TimePicker label="Basic time picker" />
                    </DemoContainer>
                  </LocalizationProvider>
                </TableCell>
                <TableCell align="right">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["TimePicker"]}>
                      <TimePicker label="Basic time picker" />
                    </DemoContainer>
                  </LocalizationProvider>
                </TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </form>
  );
}
