import {
    Box,
    Divider,
    InputLabel,
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
    grid-template-columns: 1fr 1fr 1fr 0.5fr;
    gap: 30px;
    margin-bottom: 40px;
  `;
  
  const StaffAttendance = () => {
    const {
      handleSubmit,
      control,
      formState: { errors },
    } = useForm();
    const [context, setContext] = useContext(ImageContext);
    useEffect(() => {
      setContext("classSchedule.svg");
    }, []);
    const onSubmit = (data) => {
      console.log(data);
    };
    return (
      <Component>
        <Form onSubmit={handleSubmit(onSubmit)}>

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
              sx={{ px: "22px", py: "8.5px", marginBottom: "3px", color: "white", fontSize: "18px" }}
              color="success"
            >
              Retrieve
            </Button>
          </Box>
  
        </Form>
        <Divider/>
      </Component>
    );
  };
  
  export default StaffAttendance;
  