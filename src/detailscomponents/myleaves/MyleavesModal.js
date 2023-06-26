import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  colors,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
//   import {
//     StyledFlexForm ,
//     StyledFlexCard,
//   } from './myleaves.styles.js'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "10px",
  p: 0,
};
const HeaderContainer = styled.div`
  width: 100%;
  background-color: #1dbfc1;
  text-align: center;
  border-radius: 10px;
  padding: 25px 10px;
  border-bottom: 2px solid #ffa800;
  margin: 0;
`;
const Form = styled.form`
  margin: 20px 0;
  padding: 15px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  justify-content: space-between;
`;

const MyLeavesModal = ({ handleClose }) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      courseName: "",
      courseCode: "",
      courseCredit: "",
      isSpecialization: true,
      //   courseType: 1,
    },
  });

  const onSubmit = (data) => console.log(data);
  console.log(watch("isSpecialization"));
  return (
    <Box sx={style}>
      <HeaderContainer>
        <Typography variant="h3">Leave Apply</Typography>
      </HeaderContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker label="From" />
          </DemoContainer>
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker label="Till" />
          </DemoContainer>
        </LocalizationProvider>

        <TextField
          fullWidth
          multiline
          rows={4}
          label="Reason"
          required
          {...register("description", { required: "Course type is required" })}
          sx={{ gridColumn: "span 2" }}
        />
        <Button type="submit" variant="contained" color="success">
          Save
        </Button>
        <Button onClick={handleClose} variant="contained" color="warning">
          Close
        </Button>
      </Form>
    </Box>
  );
};

export default MyLeavesModal;
