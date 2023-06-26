import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {StyledModal} from '../change-academic/Academic.styles'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '0.5rem',
  width: 400,
  height: 300,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AcademicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Submit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
  
            <StyledModal>
               <img src="/assets/greenTick.png"/>
               <h2>Good Job !</h2>
               <p>updates</p>
               <button onClick={handleClose}>OK</button>
            </StyledModal>
             
            
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            .
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
