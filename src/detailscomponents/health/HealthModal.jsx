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
  import { StyledButtons } from "./health.styles";
  import { StyledAttachment } from "./health.styles";
  import Stack from "@mui/material/Stack";
  
  const style = {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
   
    width: 500,
    height: 400,
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
  
  const HealthModal = ({ handleClose }) => {
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
         
          <Typography variant="h3">Add New Attachment</Typography>
         
          
          
        </HeaderContainer>
        <StyledAttachment>
                
                      <p>Title</p>
                      <input type="text"></input>
                      <p>Description</p>
                      <input type="text"></input>
                      <p>Attachment</p>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Button variant="contained" component="label">
                          Choose File
                          <input hidden accept="image/*" multiple type="file" />
                        </Button>
                      </Stack>
                      
                    </StyledAttachment>
  
                      <StyledButtons>
                      <Button type="submit" variant="contained" color="success">
            Save
          </Button>
          <Button onClick={handleClose} variant="contained" color="warning">
            Close
          </Button>
                      </StyledButtons>
        
   
     
      </Box>
    );
  };
  
  export default HealthModal;
  