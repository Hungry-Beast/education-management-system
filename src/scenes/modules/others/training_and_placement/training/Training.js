import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from 'styled-components'
import TrainingTable from "./TrainingTable";
import NewTrainingModal from "./NewTrainingModal";

export const StyledTrainingCard = styled.div`
   
`;
export const StyledContainer=styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem;
    padding-left: 3rem;
    margin-left:2rem;
    margin-right:4rem;
    background-color: white;
    
    border-radius: 1rem;
    margin-top: 1rem;
    @media(max-width: 768px){
        width: 80%;
        padding-left: 0.5rem;

    }
`;
export const style=styled.div`


`;
export const StyledBox=styled.div`
    display:flex;
    margin-bottom:30px;
    margin-top:30px;
    margin-left:25px;

`

export const StyledHead=styled.div`
    display: flex;
    margin-left:80%;
    button{
        background-color: #169395;
        color: black;
        padding: 0.2rem;
        border-radius: 0.3rem;
        margin-right: 1.5rem;
        width:80%
    }

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
    button{
        padding: 0.8rem;
        background-color: #169395;
        color: yellow;
        border-radius: 0.2rem;
        border: none;
        margin-top: 1rem;
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
   margin-bottom:1rem;
   margin-top:0;
   
`;



export default function Training(){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [ setAge] = React.useState('')
    const handleChange = (event) => {
    setAge(event.target.value);
    }
    return (


<StyledTrainingCard>
        <StyledContainer>
          <StyledBox>
          <Typography variant="h3" mb="">Applicant's List</Typography>
          </StyledBox>
          <StyledHead>
                
                <Button color="success" onClick={handleOpen}>+ My Enroled Training(s)</Button>
                    
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                
                <NewTrainingModal handleClose={handleClose}/>
                </Modal>
            </StyledHead>
            <StyledShowandSearchContainer>
                <StyledShow>
                    <p>Show</p>
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                    <Select 
                        defaultValue={10}
                        label="10"
                        onChange={handleChange}
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
             <TrainingTable/>
            </StyledTable>
      
        </StyledContainer>
</StyledTrainingCard>

    )
}
