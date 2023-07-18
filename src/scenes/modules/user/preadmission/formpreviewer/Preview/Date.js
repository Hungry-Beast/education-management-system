import { Delete, Edit } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import React from "react";
import { Controller } from "react-hook-form";
import styled from "styled-components";
import "./Date.css";
const Date = ({
  schema,
  register,
  editSchema,
  deleteSchema,
  errors,
  control,
}) => {
  return (
    <Controller
      name={schema?.name}
      control={control}
      required={schema?.required}
      //   defaultValue={1}
      style={{ width: "100% !important" }}
      render={({ field }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              label={schema?.label}
              name={schema?.name}
              minDate={schema.minDate ? dayjs(schema?.minDate) : undefined}
              maxDate={schema.maxDate ? dayjs(schema?.maxDate) : undefined}
              {...field}
              sx={{
                width: "100% !important",
                "& .css-1u3bzj6-MuiFormControl-root-MuiTextField-root": {
                  width: "100% important",
                },
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  sx={{
                    width: "100% !important",
                    "& .css-1u3bzj6-MuiFormControl-root-MuiTextField-root": {
                      width: "100% important",
                    },
                  }}
                  fullWidth
                />
              )}
            />
          </DemoContainer>
        </LocalizationProvider>
      )}
    />
  );
};

export default Date;
