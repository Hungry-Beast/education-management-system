import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Stack from "@mui/material/Stack";

import {
  StyledProfileCard,
  StyledImageCard,
  StyledDEsc,
  BodyStyled,
  StyledContainer,
  StyledHeader,
  StyledNavbar,
  StyledDetails,
} from "./health.styles";
import {
  StyledHeading,
  StyledFile,
  StyledSearch,
  StyledShow,
  StyledBar,
  StyledData,
  StyledWrap,
  StyledBorder,
  StyledContent,
  StyledTwo,
} from "./health.styles";
import {
  StyledRoutine,
  StyledBlood,
  StyledCardHeader,
  StyledEnd,
  StyledButton,
  StyledCheckupCard,
  StyledHealthButton,
  StyledHeadingDesc,
  StyledAttachment,
  StyledAttachButton,
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
                  <HealthModal/>
                {/* <Box>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    <StyledAttachment>
                      <h2>Add New Attachment</h2>
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
                      <StyledAttachButton>
                        <button>Save</button>
                        <button>Close</button>
                      </StyledAttachButton>
                    </StyledAttachment>
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  </Typography>
                </Box> */}
              </Modal>
            </StyledFile>
            {/* <TableHealth /> */}
            <TableHealth />

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
                      <RoutineModal/>
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
