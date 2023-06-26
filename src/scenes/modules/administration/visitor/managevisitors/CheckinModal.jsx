import {
    Button,
    FormControl,
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
    pb: "10px"
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
  
  const CheckinModal = ({ handleClose, title}) => {
    const {
      register,
      handleSubmit,
      watch,
      control,
      formState: { errors },
    } = useForm({
      defaultValues: {
        name: "",
        description: "",
      },
    });
    const onSubmit = (data) => console.log(data);
    return (
      <Box sx={style}>
        <HeaderContainer>
          <Typography variant="h3">{title}</Typography>
        </HeaderContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            label="Name"
            required
            {...register("name", { required: "name is required" })}
            sx={{ gridColumn: "span 1" }}
          />

          <TextField
            fullWidth
            label="Phone"
            required
            {...register("phone", { required: "phone is required" })}
            sx={{ gridColumn: "span 1"}}
          />
          <TextField
            fullWidth
            rows={2}
            label="Email"
            required
            {...register("email", { required: "email is required" })}
            sx={{ gridColumn: "span 1"}}
          />
          <TextField
            fullWidth
            rows={2}
            label="Coming From"
            required
            {...register("comingFrom", { required: "Coming From is required" })}
            sx={{ gridColumn: "span 1"}}
          />
                    <Controller
            name="toMeet"
            control={control}
            required
          //   defaultValue={1}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel required> To Meet</InputLabel>
                <Select
                  {...field}
                  // defaultValue={1}
                  fullWidth
                >
                  <MenuItem  value={1}>Yes</MenuItem>
                  <MenuItem value={2}>No</MenuItem>
                </Select>
              </FormControl>
            )}
          />
                    <Controller
            name="representing"
            control={control}
            required
          //   defaultValue={1}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel required> Representing</InputLabel>
                <Select
                  {...field}
                  // defaultValue={1}
                  fullWidth
                >
                  <MenuItem  value={1}>Yes</MenuItem>
                  <MenuItem value={2}>No</MenuItem>
                </Select>
              </FormControl>
            )}
          />

            <Button  type="submit" variant="contained" color="success">
              Save
            </Button>
            <Button onClick={handleClose} variant="contained" color="warning">
              Close
            </Button>

        </Form>
      </Box>
    );
  };
  
  export default CheckinModal ;
  