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
  
  const EnquiryModal = ({ handleClose }) => {
    const {
      register,
      handleSubmit,
      watch,
      control,
      formState: { errors },
    } = useForm({
      defaultValues: {
        subjectName: "",
        subjectCode: "",
        subjectCredit: "",
      //   subjectType: 1,
      },
    });
    const onSubmit = (data) => console.log(data);
    return (
      <Box sx={style}>
        <HeaderContainer>
          <Typography variant="h3">Add New Enquiry</Typography>
        </HeaderContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            label="Vendor Name"
            required
            {...register("subjectName", { required: "Subject name is required" })}
            sx={{ gridColumn: "span 1" }}
          />
          <TextField
            fullWidth
            label="Email"
            required
            {...register("subjectCode", { required: "Subject Code is required" })}
            sx={{ gridColumn: "span 1" }}
          />
          
          <TextField
            fullWidth
            label="Phone"
            required
            {...register("subjectCredit", {
              required: "Subject credit is required",
            })}
            sx={{ gridColumn: "span 1" }}
          />
          <Controller
            name="vendorType"
            control={control}
            required
          //   defaultValue={1}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel required>Vendor Type</InputLabel>
                <Select
                  {...field}
                  // defaultValue={1}
                  fullWidth
                >
                  <MenuItem  value={1}>Core</MenuItem>
                  <MenuItem value={2}>Elective</MenuItem>
                  <MenuItem value={3}>MIL</MenuItem>
                </Select>
              </FormControl>
            )}
          />
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Address"
            required
            {...register("address", { required: "address is required" })}
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
  
  export default EnquiryModal;
  