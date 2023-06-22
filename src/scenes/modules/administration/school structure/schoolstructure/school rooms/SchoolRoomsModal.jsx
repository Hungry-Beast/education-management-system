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
  
  const SchoolRoomsModal = ({ handleClose }) => {
    const {
      register,
      handleSubmit,
      watch,
      control,
      formState: { errors },
    } = useForm({
      defaultValues: {
        hsiCode: "",
        title: "",
        subjectCredit: "",
      //   subjectType: 1,
      },
    });
    const onSubmit = (data) => console.log(data);
    return (
      <Box sx={style}>
        <HeaderContainer>
          <Typography variant="h3">Add New Asset</Typography>
        </HeaderContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            label="Room Number"
            required
            {...register("roomNumber", { required: "Room Number is required" })}
            sx={{ gridColumn: "span 1" }}
          />
        
          <Controller
            name="block"
            control={control}
            required
          //   defaultValue={1}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel required> Block</InputLabel>
                <Select
                  {...field}
                  // defaultValue={1}
                  fullWidth
                >
                  <MenuItem  value={1}>New</MenuItem>
                  <MenuItem value={2}>Used</MenuItem>
                </Select>
              </FormControl>
            )}
          />
          <Controller
            name="floor"
            control={control}
            required
          //   defaultValue={1}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel required> Floor</InputLabel>
                <Select
                  {...field}
                  // defaultValue={1}
                  fullWidth
                >
                  <MenuItem  value={1}>STATIONERY</MenuItem>
                  <MenuItem value={2}>Schoold Items</MenuItem>
                </Select>
              </FormControl>
            )}
          />
          <TextField
            fullWidth
            label="Room Number"
            required
            {...register("roomNumber", { required: "Room Number is required" })}
            sx={{ gridColumn: "span 1" }}
          />
          <Box sx={{ gridColumn: "span 2" }} >
            <Typography>Room Capacity Detail</Typography>

            <Box sx={{ gridColumn: "span 2", display: "flex", justifyContent: "space-between", gap: "15px" }} >
                <Typography >col 1</Typography>
                <TextField
                    fullWidth
                    label="Room Number1"
                    required
                    {...register("roomNumber3", { required: "Room Number is required" })}
                />
                <TextField
                    fullWidth
                    label="Room Number2"
                    required
                    {...register("roomNumber2", { required: "Room Number is required" })}
                />
                <TextField
                    fullWidth
                    label="Room Number3"
                    required
                    {...register("roomNumber3", { required: "Room Number is required" })}
                />
            </Box>

          </Box>

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
  
  export default SchoolRoomsModal;
  