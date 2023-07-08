import React from 'react'
import { Controller, useForm } from "react-hook-form";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  InputLabel, Box
} from "@mui/material";
import dayjs from 'dayjs';

function DatePickerComp() {
    const {
        handleSubmit,
        control,
        formState: { errors },
      } = useForm();
  return (
    <Box>

    <Controller
      name="class"
      control={control}
      required
    //   defaultValue={new Date()}
      render={({ field }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker sx={{width: "330px"}} {...field} defaultValue={dayjs('2023-04-17')}  />
          </DemoContainer>
        </LocalizationProvider>
      )}
    />
  </Box>
  )
}

export default DatePickerComp