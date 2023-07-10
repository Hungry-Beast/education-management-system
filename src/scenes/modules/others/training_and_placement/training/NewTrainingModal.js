
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
import ViewTraining from "./ViewTraining";


export const StyledTrainingCard = styled.div`
   
`;
export const StyledContainer=styled.div`
    width: 60%;
    height: 60%;
    margin-left:15rem;
    margin-right:10rem;
    background-color: white;
    
    border-radius: 2rem;
    margin-top: 1rem;

    @media(max-width: 768px){
            width: 80%;
            margin-left:6rem;
            margin-right:5rem;
            paddinf-left:0px;
    }
`;
export const style=styled.div`


`;
export const StyledBox=styled.div`
width: 100%;
background-color: #1dbfc1;
text-align: center;
padding: 25px 10px;
border-bottom: 2px solid #ffa800;
margin: 0;
border-radius: 10px;
@media(max-width: 768px){
    padding:30px 20px;
}


`

export const StyledHead=styled.div`
    display: flex;
    margin-left:80%;


`;
export const StyledInside=styled.div`
    background-color: white;
    color: black;

    margin: 3% auto;
    padding: 1rem;
    border-radius: 0.3rem;
    /* text-align: center; */
    h3{
        padding: 1rem;
        border-bottom: 2px solid black;
    }
    h4{
        color: #169395;
    }
    input{
        width: 100%;
        padding-top:0.5rem;
        padding-bottom:10rem;
        border: 1px solid #169395;
        border-radius: 0.5rem;
        margin-bottom:0;
    }
`;

export const StyledButton=styled.div`
    display: flex;
    gap: 1rem;
    margin-left: 75%;
    margin-top:3rem;
    padding-bottom:3rem;
    button{
        padding: 0.8rem;
        background-color: #169395;
        color: yellow;
        border-radius: 0.2rem;
        border: none;
        margin-top: 3rem;
        margin-bottom:5rem;
        padding-bottom:3rem;
    }
`
export const StyledShowandSearchContainer = styled.div`
    
    /* padding:1rem; */
    display:flex;
    justify-content:space-between;
    margin-top: 2rem;
    
`;
export const StyledInput = styled.div`
    display: flex;
   
    justify-content: space-around;
    gap: 1rem;
    input{
        border: 1px solid #169395;
        padding: 0.5rem;
        
        border-radius: 0.3rem;
    }
`;

export const StyledTable=styled.div`
        display:flex;
        margin-top:2.5rem;
        @media(max-width: 768px){
          display: flex;
      }
      `;

export const StyledShow = styled.div`
    display:flex;
    width:25%;
    gap:0.5rem;
    align-items:center;
    padding-left:20px;
    @media(max-width: 768px){
        width: 40%;
        display: flex;
        gap: 1rem;
    }
    
`

export const StyledSearch = styled.div`
    display:flex;
    margin-right:2rem;
    align-items:center;
    gap: 0.5rem;
    border-radius: 0.3rem;
    @media(max-width: 768px){
        margin-right: 0.5rem;

    }

    input{
        width:100%;
        height:1.7rem;
    }

    
`;

export const Container = styled.div`

`;

export const StyledButtons = styled.div`
display:flex;
gap:0.5rem;
   margin-left:70%;
   margin-bottom:2rem;
   margin-top:3rem;
   padding-bottom:3rem;
   
`;



const NewTrainingModal = ({ handleClose }) => {
    const {
      register,
      handleSubmit,
      watch,
      control,
      formState: { errors },
    } = useForm({
      defaultValues: {
        className: "",
        classCode: "",
        classCredit: "",
        isSpecialization: true,
        //   classType: 1,
      },
    });
  
    const onSubmit = (data) => console.log(data);
    console.log(watch("isSpecialization"));
    return (


<StyledTrainingCard>
        <StyledContainer>
          <StyledBox>
          <Typography variant="h3" mb="">My Training</Typography>
          </StyledBox>
          <StyledHead>
                
            </StyledHead>
            <StyledShowandSearchContainer>
                <StyledShow>
                    <p>Show</p>
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                    <Select 
                        defaultValue={10}
                        label="10"
                        
                    >
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={25}>25</MenuItem>
                        <MenuItem value={50}>50</MenuItem>
                        <MenuItem value={100}>100</MenuItem>
                        </Select>
                        </FormControl>
                    <p>entries</p>
                </StyledShow>
                <StyledSearch>
                    <p>Search:</p>
                    <input type='text' />
                </StyledSearch>
            </StyledShowandSearchContainer>
            <StyledTable>
             <ViewTraining/>
            </StyledTable>
            <StyledButtons>
                <Button type="submit" variant="contained" color="success" >
          Save
        </Button>
        <Button onClick={handleClose} variant="contained" color="warning">
            Close
        </Button>
                    </StyledButtons>
      
        </StyledContainer>
</StyledTrainingCard>


    )
}

export default NewTrainingModal;