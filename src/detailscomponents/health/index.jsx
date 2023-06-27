import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Stack from "@mui/material/Stack";

import {
  BodyStyled,
  StyledContainer,
  StyledHeader,
  StyledDetails,
} from "./health.styles";
import {
  StyledHeading,
  StyledFile,
} from "./health.styles";
import {
  StyledRoutine,
  StyledBlood,
  StyledCardHeader,
  StyledEnd,
  StyledButton,
  StyledHeadingDesc,
  StyledDesc,
  StyledLast
} from "./health.styles";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TableHealth from "./HealthTable";
import HealthModal from "./HealthModal";
import RoutineModal from "./RoutineModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function Health() {
  // const [setNumber] = React.useState("");
  const handleChange = (event) => {
    // setNumber(event.target.value);
  };
  const [open, setOpen] = React.useState(false);
  const [ButtonOpen, setButtonOpen] = React.useState(false);
  const handleButtonOpen = () => setButtonOpen(true);
  const handleButtonClose = () => setButtonOpen(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <BodyStyled>

      <StyledHeader>

        <StyledContainer>
          <StyledDetails>
            <StyledHeading>
              <h2>Teacher Health Details</h2>
              <StyledHeadingDesc>
                <h3>Medical Records</h3>
                <h4>Document Attachments</h4>
              </StyledHeadingDesc>
            </StyledHeading>

            <StyledFile>
              <Button
                color="success"
                variant="contained"
                onClick={handleButtonOpen}
              >
                + Add New Attachment
              </Button>

              <Modal
                open={ButtonOpen}
                onClose={handleButtonClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                  <HealthModal handleClose={handleButtonClose}/>
                
              </Modal>
            </StyledFile>
            <TableHealth />
            <StyledDesc>
                <p>Showing 0 to 0 of 0 entries</p>
                <StyledLast>
                    <p>Previous</p>
                    <p>Next</p>
                </StyledLast>
            </StyledDesc>

            <StyledRoutine>
              <h3>Routine check-ups & Incidents</h3>
              <StyledButton>
                <Button variant="contained" color="success" onClick={handleOpen}>+ Routine Check-ups</Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box>
                    <Typography
                      id="modal-modal-title"
                      variant="h3"
                      component="h2"
                    >
                      <RoutineModal handleClose={handleClose}/>
                    </Typography>
                    <Typography
                      id="modal-modal-description"
                      sx={{ mt: 2 }}
                    ></Typography>
                  </Box>
                </Modal>
              </StyledButton>
            </StyledRoutine>

            <StyledBlood>
              <h4>Blood Group</h4>
            </StyledBlood>
            <StyledCardHeader>
              {/* <p>Select Blood Group</p> */}
              <Box sx={{ minWidth: 700 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label"></InputLabel>
                  <Select
                    defaultValue={0}
                    label="Select Blood Group"
                    onChange={handleChange}
                  >
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
  );
}

export default Health;
