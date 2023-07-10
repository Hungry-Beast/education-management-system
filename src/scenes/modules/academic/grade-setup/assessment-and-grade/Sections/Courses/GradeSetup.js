import { Add } from "@mui/icons-material";
import { Button, Divider, Icon, Modal, Switch, Typography, colors } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";

import GradeTable from "./GradeTable";
import NewGradeModal from "./NewGradeModal";
import { Link } from "react-router-dom";
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
  margin: 10px 0;
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

const GradeSetup = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openGrade, setOpenGrade] = useState(false);
  const handleOpenGrade = () => setOpenGrade(true);
  const handleCloseGrade = () => setOpenGrade(false);

  return (
    <Container>
      <Topbar>
        <TopbarLeft>
          <Typography variant="h2">Grade Setup</Typography>
        </TopbarLeft>
        <TopbarMiddle></TopbarMiddle>
        <TopbarRight>
          <Button
            color="success"
            variant="contained"
            onClick={handleOpen}
            startIcon={<Add />}
            sx={{ color: "white", mx: "5px", py: "8px" }}
          >
            New Grade Setup
          </Button>
        </TopbarRight>
      </Topbar>
      <GradeTable />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <NewGradeModal handleClose={handleClose} />
      </Modal>
      <Divider sx={{ my: "25px" }} color="#ffa800" />
      <Topbar style={{margin:"45px 0"}}>
        <TopbarLeft>
          <Typography variant="h2">Section Grade Setup</Typography>
        </TopbarLeft>
        <TopbarMiddle></TopbarMiddle>
        <TopbarRight>
          </TopbarRight>
      </Topbar>
      <GradeTable />
    </Container>
  );
};

export default GradeSetup;
