import React from 'react'
// import { DataGrid } from '@mui/x-data-grid';

import { StyledProfileCard,StyledImageCard,StyledDEsc, BodyStyled, StyledContainer, StyledHeader,StyledNavbar,StyledDetails } from './heath.styles';
import {StyledHeading,StyledFile,StyledSearch,StyledShow,StyledBar,StyledData,StyledWrap,StyledBorder,StyledContent,StyledTwo} from './heath.styles';
import {StyledRoutine,StyledBlood,StyledCardHeader,StyledEnd,StyledButton,StyledCheckupCard,StyledHealthButton} from './heath.styles';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import TableHead from '../health/HealthTable';




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function Health(){
    const [setNumber] = React.useState('');
    const handleChange = (event) => {setNumber(event.target.value)};
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(

        <BodyStyled>

{/*     
  <StyledProfileCard>
    <StyledImageCard>
      <img src ='/assets/profilepic.jpg' alt=" "/>
      <StyledDEsc>
        <h4>Unique ID</h4>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
        </svg>
      </StyledDEsc>
    </StyledImageCard>
  </StyledProfileCard> */}

    <StyledHeader>
      {/* <StyledNavbar></StyledNavbar> */}
      <StyledContainer>
        <StyledDetails>
            <StyledHeading>
                <h2>Teacher Health Details</h2>
                <h3>Medical Records</h3>
                <h4>Document Attachments</h4>
            </StyledHeading>
           <StyledFile>
               
                {/* <Button onClick={handleOpen}>+ Routine Check-ups</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
>
              <Box sx={style}>
              <Typography id="modal-modal-title" variant="h3" component="h2">
              <StyledCheckupCard></StyledCheckupCard> */}
             </StyledFile>
            <StyledSearch>
                <StyledShow>
                    <p>Show</p>
                    <Box sx={{ minWidth: 80 }}>
      <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select label="10" defaultValue={10 } onChange={handleChange}>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={25}>25</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={100}>100</MenuItem>
          </Select>
      </FormControl>
    </Box>
                    <p>entries</p>
                </StyledShow>
                <StyledBar>
                    <p>Search: </p>
                    <input type='text'/>
                </StyledBar>
                
            </StyledSearch>
            <StyledData>
                <StyledWrap>
              {/* <TableHealth/> */}
                {/* <h4>Sr.No</h4>
                <h4>Title</h4>
                <h4>Description</h4>
                <h4>Attachment</h4>
                <h4>Actions</h4> */}
                </StyledWrap>
            </StyledData>
            <StyledBorder>
                <p>No data available in table</p>
            </StyledBorder>
            <StyledContent>
                <p>Showing 0 to 0 of 0 entries</p>
                <StyledTwo>
                    <p>Previous</p>
                    <p>Next</p>
                </StyledTwo>
            </StyledContent>
            <StyledRoutine>
                <h3>Routine check-ups & Incidents</h3>
            </StyledRoutine>
            <StyledButton>
                <Button onClick={handleOpen}>+ Routine Check-ups</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h3" component="h2">
        <StyledCheckupCard>
            <h4>Routine Check-ups</h4>
            <p>Date</p>
            <input type='datetime-local'/>
            <p>Height(cms)</p>
            <input type='text' />
            <p>Weight(kgs)</p>
            <input type='text' />
            <p>Comment</p>
            <input type='text' />
            <StyledHealthButton>
            <button>Save</button>
            <button>Close</button>
            </StyledHealthButton>
            

        </StyledCheckupCard>
     </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      
    </Typography>
  </Box>
</Modal>
            </StyledButton>
            <StyledBlood>
                <h4>Blood Group</h4>
            </StyledBlood>
            <StyledCardHeader>
                {/* <p>Select Blood Group</p> */}
                <Box sx={{ minWidth: 700 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select  defaultValue={0} label="Select Blood Group" onChange={handleChange} >
          <MenuItem value={0}>Select Blood Group</MenuItem>
          <MenuItem value={1}>O-</MenuItem>
          <MenuItem value={2}>O+</MenuItem>
          <MenuItem value={3}>A-</MenuItem>
          <MenuItem value={4}>A+</MenuItem>
          <MenuItem value={5}>B-</MenuItem>
          <MenuItem value={6}>B+</MenuItem>
          <MenuItem value={7}>AB-</MenuItem>
          <MenuItem value={8}>AB+</MenuItem>
        </Select>
      </FormControl>
    </Box>
            </StyledCardHeader>
            <StyledEnd>
                <h3>Medical Logs</h3>
            </StyledEnd>
        </StyledDetails>
      </StyledContainer>
    </StyledHeader>
  

  </BodyStyled>



       
       
       
    
    )
}


export default Health;
    
