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

export default function TimingFormTable({formData, setFormData}) {
  
  const addItem = () => {
    const newItem = {
      id: formData.length + 1,
      name: "",
      startTime: undefined,
      endTime: undefined,
      break: false,
    };
    setFormData([...formData, newItem]);
  };
  const removeItem = (id) => {
    const newItems = formData.filter((item, i) => i !== id);
    setFormData(newItems);
  };
  const updateItem = (name, index, value) => {
    if (name == "endTime") {
      
    }
    const newArray = formData.map((item, i) => {
      if (index === i) {
        return { ...item, [name]: value };
      } else {
        return item;
      }
    });
    setFormData(newArray);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(formData)
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
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <TextField
                    value={row.name}
                    fullWidth
                    name="name"
                    onChange={(e) => updateItem("name", i, e.target.value)}
                  />
                </TableCell>
                <TableCell align="right">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["TimePicker"]}>
                      <TimePicker
                        label="Start Time"
                        name="startTime"
                        value={row.startTime}
                        onChange={(value) => updateItem("startTime", i, value)}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </TableCell>
                <TableCell align="right">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["TimePicker"]}>
                      <TimePicker
                        label="End Time"
                        value={row.endTime}
                        name="endTime"
                        onChange={(value) => updateItem("endTime", i, value)}
                        minTime={row?.startTime}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </TableCell>
                <TableCell align="right">
                  <Checkbox
                    value={row.break}
                    name="break"
                    onChange={(e) => updateItem("break", i, e.target.checked)}
                  />
                </TableCell>
                <TableCell align="right">
                  {i ? (
                    <IconButton
                      color="error"
                      onClick={() => removeItem(i)}
                      children={<Delete />}
                    />
                  ) : (
                    <></>
                  )}
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
