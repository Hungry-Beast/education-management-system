import {
    Button,
    TextField,
    Typography,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import React from "react";
  import {useForm } from "react-hook-form";
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
  
  const NewSession = ({ handleClose }) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: {
        sessionName: "",
      },
    });
    const onSubmit = (data) => console.log(data);
    return (
      <Box sx={style}>
        <HeaderContainer>
          <Typography variant="h3">New Session</Typography>
        </HeaderContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{display: "flex", gridColumn: "span 2", justifyContent: "space-between", width: "100%"}} >     
          <TextField
            fullWidth
            label="Session Name"
            required
            {...register("sessionName", { required: "Session name is required" })}
            sx={{width: "30%"}}
          />
          </Box>
          
          <Box sx={{ gridColumn: "span 2"}}  >
            <Button sx={{ width: "46%" }} type="submit" variant="contained" color="success">
            Save
          </Button>
          <Button sx={{width: "46%", ml: "25px"}} onClick={handleClose} variant="contained" color="warning">
            Close
          </Button>
        </Box>
        </Form>
      </Box>
    );
  };
  
  export default NewSession;
  