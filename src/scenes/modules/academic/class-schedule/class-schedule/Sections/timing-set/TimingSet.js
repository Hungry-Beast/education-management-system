import { Add } from "@mui/icons-material";
import { Button, Icon, Modal, Switch, Typography, colors } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";

import ClassTable from "./TimingTable";
import NewClassModal from "./NewTimingModal";
import { Link } from "react-router-dom";
// import SessionsClassModal from "./SessionsClassModal";
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Topbar = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  width: 100%;
`;
const TopbarLeft = styled.div`
  display: flex;
`;
const TopbarMiddle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MiddleElement = styled.div`
  margin: 0 5px;
  padding: 8px 10px;
  border-left: ${(props) =>
    !props.first ? `3px solid ${colors.red[600]}` : "none"};
`;
const TopbarRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const TimingSet = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openClass, setOpenClass] = useState(false);
  const handleOpenClass = () => setOpenClass(true);
  const handleCloseClass = () => setOpenClass(false);

  return (
    <Container>
      <Topbar>
        <TopbarLeft></TopbarLeft>
        <TopbarMiddle> </TopbarMiddle>
        <TopbarRight>
          <Button
            color="success"
            variant="contained"
            onClick={handleOpen}
            startIcon={<Add />}
            sx={{ color: "white", mx: "5px", py: "8px" }}
          >
            New Timing Set
          </Button>
        </TopbarRight>
      </Topbar>
      <ClassTable />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <NewClassModal handleClose={handleClose} />
      </Modal>
    </Container>
  );
};

export default TimingSet;
