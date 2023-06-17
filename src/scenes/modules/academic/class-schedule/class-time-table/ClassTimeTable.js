import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Controller, useForm } from "react-hook-form";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Button } from "@mui/material";
import { ImageContext } from "../../../../../context/Context";

const Component = styled.div`
  width: calc(100% - 30px);
  height: max-content;
  padding: 16px;
  background-color: #fff;
  margin: 15px auto;
  border-radius: 10px;
`;
const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 0.5fr;
  gap: 30px;
`;
const ClassTimeTable = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const [context, setContext] = useContext(ImageContext);
  useEffect(() => {
    setContext("classSchedule.svg");
  }, []);
  return (
    <Component>
      <Form>
        <Box>
          <Controller
            name="isCourse"
            control={control}
            
            
            //   defaultValue={1}
            render={({ field }) => (
              <FormControl fullWidth>
                <FormControlLabel
                  control={
                    <Checkbox {...field}  color="success" />
                  }
                  label="Course"
                />
              </FormControl>
            )}
          />
          {watch("isCourse") ? (
            <Controller
              name="courseType"
              control={control}
              required
              //   defaultValue={1}
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel required>Select Course</InputLabel>
                  <Select
                    {...field}
                    // defaultValue={1}
                    fullWidth
                  >
                    <MenuItem value={1}>Physics</MenuItem>
                    <MenuItem value={2}>Chemistry</MenuItem>
                    <MenuItem value={3}>Electronics</MenuItem>
                    <MenuItem value={4}>Maths</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
          ) : (
            <></>
          )}
        </Box>
        <Box>
          <InputLabel sx={{ p: "9px" }} required>
            Select Class
          </InputLabel>
          <Controller
            name="class"
            control={control}
            required
            //   defaultValue={1}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel required>Select Class</InputLabel>
                <Select
                  {...field}
                  // defaultValue={1}
                  fullWidth
                >
                  <MenuItem value={1}>Physics</MenuItem>
                  <MenuItem value={2}>Chemistry</MenuItem>
                  <MenuItem value={3}>Electronics</MenuItem>
                  <MenuItem value={4}>Maths</MenuItem>
                </Select>
              </FormControl>
            )}
          />
        </Box>
        <Box>
          <InputLabel sx={{ p: "9px" }} required>
            Select Section
          </InputLabel>
          <Controller
            name="class"
            control={control}
            required
            //   defaultValue={1}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel required>Select Section</InputLabel>
                <Select
                  {...field}
                  // defaultValue={1}
                  fullWidth
                >
                  <MenuItem value={1}>Physics</MenuItem>
                  <MenuItem value={2}>Chemistry</MenuItem>
                  <MenuItem value={3}>Electronics</MenuItem>
                  <MenuItem value={4}>Maths</MenuItem>
                </Select>
              </FormControl>
            )}
          />
        </Box>
        <Box>
          <InputLabel sx={{ p: "9px", pb: "1px" }} required>
            Select Date
          </InputLabel>
          <Controller
            name="class"
            control={control}
            required
            //   defaultValue={1}
            render={({ field }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker {...field} label="Basic date picker" />
                </DemoContainer>
              </LocalizationProvider>
            )}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <Button
            variant="contained"
            sx={{ px: 10, py: "15px", marginBottom: "3px" }}
            color="success"
          >
            Search
          </Button>
        </Box>
      </Form>
    </Component>
  );
};

export default ClassTimeTable;
