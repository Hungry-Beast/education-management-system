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
  
  const NewAssetModal = ({ handleClose }) => {
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
            label="HSI Code"
            required
            {...register("hsiCode", { required: "HSI Code is required" })}
            sx={{ gridColumn: "span 1" }}
          />
          <TextField
            fullWidth
            label="Title"
            required
            {...register("title", { required: "Title is required" })}
            sx={{ gridColumn: "span 1" }}
          />
          
          <Controller
            name="condition"
            control={control}
            required
          //   defaultValue={1}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel required> Select Condition</InputLabel>
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
            name="category"
            control={control}
            required
          //   defaultValue={1}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel required> Select Category</InputLabel>
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
          <Controller
            name="location"
            control={control}
            required
          //   defaultValue={1}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel required> Select Location</InputLabel>
                <Select
                  {...field}
                  // defaultValue={1}
                  fullWidth
                >
                  <MenuItem  value={1}>Store Room 1</MenuItem>
                  <MenuItem value={2}>Admin Store Room</MenuItem>
                </Select>
              </FormControl>
            )}
          />
          <Controller
            name="returnable"
            control={control}
            required
          //   defaultValue={1}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel required> Returnable</InputLabel>
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
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Description"
            required
            {...register("description", { required: "Subject type is required" })}
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
  
  export default NewAssetModal;
  