import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AdvanceModal from "./AdvanceModal";
import {StyledAdvanceCard,StyledContainer,
    StyledHead,StyledShowandSearchContainer,
    StyledSearch,StyledShow,
    StyledDesc,StyledLast} from './advance.styles'
import TableAdvance from "./AdvanceTable";



export default function Advance(){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [ setAge] = React.useState('')
    const handleChange = (event) => {
    setAge(event.target.value);
    }
    return (


<StyledAdvanceCard>
        <StyledContainer>
            <StyledHead>
                <p>Advance's Payment(s)</p>
                <Button onClick={handleOpen}>+ New Advance Payment</Button>
                    {/* </AdvanceModal> */}
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                
                <AdvanceModal handleClose={handleClose}/>
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
                    <MenuItem value={30}>30</MenuItem>
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
            <TableAdvance/>
            <StyledDesc>
                <p>Showing 0 to 0 of 0 entries</p>
                <StyledLast>
                    <p>Previous</p>
                    <p>Next</p>
                </StyledLast>
            </StyledDesc>
        </StyledContainer>
</StyledAdvanceCard>

    )
}