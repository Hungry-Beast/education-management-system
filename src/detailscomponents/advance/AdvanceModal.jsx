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

import { StyledInside,
  StyledTwo,
  StyledInput,
Container,StyledButtons
} from './advance.styles'

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

const AdvanceModal = ({ handleClose }) => {
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
       
        <Typography variant="h3">Advance Payment</Typography>
       
        
        
      </HeaderContainer>
      <StyledInside>
                        
                        <StyledTwo>
                            <h4>Amount</h4>
                            <h4>Required Date</h4>
                        </StyledTwo>
                        <StyledInput>
                            <input type="text"/>
                            <input type="datetime-local"/>
                        </StyledInput>
                        <StyledTwo>
                            <h4>Re-pay in Month(s)</h4>
                            <h4>Re-pay Month Start's</h4>
                        </StyledTwo>
                        <StyledInput>
                            <input type="text"/>
                            <input type="datetime-local"/>
                        </StyledInput>
                        <h4>Description</h4>
                        <input type="text"/>
                    </StyledInside>

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

export default AdvanceModal;
