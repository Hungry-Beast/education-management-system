import React, { useState } from "react";
import StatusBar from "../../global/StatusBar";
import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import styled from "styled-components";
import Topbar from "../../global/Topbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Modal, Button, TextField } from "@mui/material";

import {
  StyledRolesPermissions,
  StyledLeaveCard,
  StyledShowandSearchContainer,
  StyledShow,
  StyledSearch,
} from "./roles.styles";
import RolesTables from "./RolesTable";

const Container = styled.div`
  padding: 16px;
  margin: 0 auto;
  width: calc(100% - 30px);
  background-color: #d8e4ec86;
  border-radius: 10px;
`;

const TabCont = styled.div`
  /* background-color: white;
  margin-bottom:20px; */
  width: 100%;
  /* border-radius: 0.8rem; */
  max-width: 600px;
  margin: 0 auto;
`;
const AddNewRoleButton = styled.button`
  margin-left: 87.6%;
  background-color: #1dbfc1;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
`;

const ModalContainer = styled.div`
  /* Styles for the modal container */
`;

const ModalContent = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: white;
  width: 30rem;
  margin: 5rem auto;
`;

const HeaderContainer = styled.div`
  width: 100%;
  background-color: #1dbfc1;
  text-align: center;
  border-radius: 10px;
  padding: 15px 10px;
  border-bottom: 2px solid #ffa800;
  margin: 0;
h3{
  font-size:1.5rem;
}
  
`;

const modalButtonStyle = {
  backgroundColor: "#1dbfc1",
  color: "white",
};

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "10px",
  p: 0,
};
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hclassden={value !== index}
      class={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function RolesPermissions() {
  const [age, setAge] = React.useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [roleName, setRoleName] = useState("");

  const handleAddNewRole = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSaveRole = () => {
    // Handle saving the role data here
    console.log("Role Name:", roleName);
    handleCloseModal();
  };

  const handleRoleNameChange = (event) => {
    setRoleName(event.target.value);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Topbar />
      <StatusBar />
      <br />

      <Container>
        <StyledRolesPermissions>
          <AddNewRoleButton onClick={handleAddNewRole}>
            Add New Role
          </AddNewRoleButton>

          {isModalOpen && (
            <Modal open={isModalOpen} onClose={handleCloseModal}>
              <Box sx={style}>
                <HeaderContainer>
                  <Typography variant="h3">New Role</Typography>
                </HeaderContainer>

                <ModalContent>
                  <Typography variant="h5">Name</Typography>
                  <TextField
                    label="Role Name"
                    value={roleName}
                    onChange={handleRoleNameChange}
                  />
                  <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                    <Button variant="contained" onClick={handleCloseModal} style={modalButtonStyle}>
                      Close
                    </Button>
                    <Button variant="contained" onClick={handleSaveRole} color="primary" style={modalButtonStyle}>
                      Save
                    </Button>
                  </Box>
                </ModalContent>
              </Box>
            </Modal>
          



          




          )}
          <StyledShowandSearchContainer>
            <StyledShow>
              <h1>Show</h1>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
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
              <h1>Entity</h1>
            </StyledShow>

            <StyledSearch>
              <h1>Search:</h1>
              <input type="text" />
            </StyledSearch>
          </StyledShowandSearchContainer>

          <RolesTables />
        </StyledRolesPermissions>
      </Container>
    </>
  );
}

export default RolesPermissions;
