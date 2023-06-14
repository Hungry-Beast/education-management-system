import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { Add, Delete } from "@mui/icons-material";
import moment from "moment";
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

export default function ViewForm({formData}) {
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
            </TableRow>
          </TableHead>
          <TableBody>
            {formData?.map((row, i) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Typography variant="h4">
                    {row.name}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["TimePicker"]}>
                      <TimePicker
                        label="Basic time picker"
                        name="startTime"
                        value={row.startTime}
                        disabled
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </TableCell>
                <TableCell align="right">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["TimePicker"]}>
                      <TimePicker
                        label="Basic time picker"
                        value={row.endTime}
                        name="endTime"
                        disabled
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </TableCell>
                <TableCell align="right">
                  <Checkbox
                    value={row.break}
                    name="break"
                    disabled
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        color="success"
        sx={{ my: 1 }}
        startIcon={<Add />}
        onClick={addItem}
      >
        Add
      </Button>
    </form>
  );
}
