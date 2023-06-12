import { Add } from "@mui/icons-material";
import { Button, Icon, Modal, Switch, Typography, colors } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";

import CourseTable from "./CourseTable";
import NewCourseModal from "./NewCourseModal";
import { Link } from "react-router-dom";
import SessionsCourseModal from "./SessionsCourseModal";
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

const Courses = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openCourse, setOpenCourse] = useState(false);
  const handleOpenCourse = () => setOpenCourse(true);
  const handleCloseCourse = () => setOpenCourse(false);

  return (
    <Container>
      <Topbar>
        <TopbarLeft>
          <Button
            color="success"
            variant="contained"
            onClick={handleOpen}
            startIcon={<Add />}
            sx={{ color: "white", mx: "5px", py: "8px" }}
          >
            New Course
          </Button>
            <Button
              color="success"
              variant="contained"
              startIcon={<Add />}
              sx={{ color: "white", mx: "5px", py: "8px" }}
              onClick={handleOpenCourse}

            >
              Session's Course
            </Button>
        </TopbarLeft>
        <TopbarMiddle>
          <MiddleElement first={true}>
            <Typography variant="h4" textAlign={"center"}>
              16
            </Typography>
            <Typography variant="h5" textAlign={"center"}>
              Core
            </Typography>
          </MiddleElement>
          <MiddleElement>
            <Typography variant="h4" textAlign={"center"}>
              16
            </Typography>
            <Typography variant="h5" textAlign={"center"}>
              Core
            </Typography>
          </MiddleElement>
          <MiddleElement>
            <Typography variant="h4" textAlign={"center"}>
              16
            </Typography>
            <Typography variant="h5" textAlign={"center"}>
              Core
            </Typography>
          </MiddleElement>
        </TopbarMiddle>
        
      </Topbar>
      <CourseTable />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <NewCourseModal handleClose={handleClose} />
      </Modal>
      <Modal
        open={openCourse}
        onClose={handleCloseCourse}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <SessionsCourseModal handleClose={handleCloseCourse} />
      </Modal>
    </Container>
  );
};

export default Courses;
