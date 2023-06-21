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

    const [age, setAge] = React.useState('')
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
                {/* <Box>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    <StyledInside>
                        <h3>Advance Payment</h3>
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
                            <h4>re-pay Month Start's</h4>
                        </StyledTwo>
                        <StyledInput>
                            <input type="text"/>
                            <input type="datetime-local"/>
                        </StyledInput>
                        <h4>Description</h4>
                        <input type="text"/>
                        <StyledButton>
                            <button>Apply</button>
                            <button onClick={handleClose}>Close</button>
                        </StyledButton>
                    </StyledInside>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                </Typography>
                </Box> */}
                <AdvanceModal/>
                </Modal>
            </StyledHead>
            <StyledShowandSearchContainer>
                
                <StyledShow>


                    <p>Show</p>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select 
                    defaultValue={10}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
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