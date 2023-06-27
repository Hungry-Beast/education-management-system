import { Add } from "@mui/icons-material";
import { Button, Icon, Modal, Switch, Typography, colors } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import AssessmentTable from "./AssessmentTable";
import NewAssessmentModal from "./NewAssessmentModal";
import { Link } from "react-router-dom";
import ViewAssessmentModal from "./ViewAssessmentModal";
import { ImageContext } from "../../../../../../../../context/Context";
const Container = styled.div`
  width: calc(100% - 30px);
  height: max-content;
  padding: 16px;
  background-color: #fff;
  margin: 15px auto;
  border-radius: 10px;
  /* padding: 0 20px; */
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

const AssessmentLink = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [context, setContext] = useContext(ImageContext);
  useEffect(() => {
    setContext("assesment.svg");
  }, []);

  return (
    <Container>
      <Topbar>
        <TopbarLeft> </TopbarLeft>
        <TopbarMiddle> </TopbarMiddle>
        <TopbarRight>
          <Button
            color="success"
            variant="contained"
            onClick={handleOpen}
            startIcon={<Add />}
            sx={{ color: "white", mx: "5px", py: "8px" }}
          >
            New Assessment
          </Button>
        </TopbarRight>
      </Topbar>
      <AssessmentTable />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <NewAssessmentModal handleClose={handleClose} />
      </Modal>
    
    </Container>
  );
};

export default AssessmentLink;
