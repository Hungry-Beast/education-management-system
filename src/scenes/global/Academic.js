import { Settings } from "@mui/icons-material";
import { Divider, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ClassIcon from "@mui/icons-material/Class";
import Iconattendance from "@mui/icons-material/HowToReg";
import AssignmentIcon from "@mui/icons-material/AssignmentRounded";
import GraduationIcon from "@mui/icons-material/School";
import ExamIcon from "@mui/icons-material/AutoStories";
import BadgeIcon from "@mui/icons-material/WorkspacePremium";

const Resolve = styled.div`
  display: flex;
  vertical-align: middle;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 10px 15px;
`;
const Ul = styled.ul`
  list-style: none;
  overflow-y: auto;
  overflow-x: hidden;

  a {
    text-decoration: none;
    color: inherit;
    :hover {
      color: blue;
    }
    /* color: lightblue; */
  }
`;
const Li = styled.li`
  margin-left: 10px;
  padding: 8px 5px;
`;

const Academic = () => {
  return (
    <Container>
      <Ul>
        <Typography
          variant="h3"
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "5px",
            marginBottom: "12px",
          }}
        >
          {" "}
          <Settings sx={{ fontSize: "30px", mx: "5px" }} /> Academic
        </Typography>
        <Divider />
        <Li>
          <Link to="/modules/academic">
            <Typography variant="h5">Academic Configuration</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/modules/academic/class-teacher-mapping">
            <Typography variant="h5">Class Teacher Mapping</Typography>
          </Link>
        </Li>
      </Ul>

      <Ul>
        <Typography
          variant="h3"
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "5px",
            marginBottom: "12px",
          }}
        >
          {" "}
          <ClassIcon sx={{ fontSize: "30px", mx: "5px" }} /> Class Schedule
        </Typography>
        <Divider />
        <Li>
          <Link to="/modules/academic/class-schedule">
            <Typography variant="h5">Class Schedules</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/modules/academic/class-time-table">
            <Typography variant="h5">Class Time Table</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">All Class Time Table</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">All Teacher Time Table</Typography>
          </Link>
        </Li>
      </Ul>

      <Ul>
        <Typography
          variant="h3"
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "5px",
            marginBottom: "12px",
          }}
        >
          {" "}
          <Iconattendance sx={{ fontSize: "30px", mx: "5px" }} /> Attendance
        </Typography>
        <Divider />
        <Li>
          <Link to="/modules/academic/attendence-status-settings">
            <Typography variant="h5">Student Settings</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/modules/academic/student-attendence">
            <Typography variant="h5">Student Attendance</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/modules/academic/attendence-dashboard">
            <Typography variant="h5">Attendance Dashboard</Typography>
          </Link>
        </Li>
      </Ul>

      <Ul>
        <Typography
          variant="h3"
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "5px",
            marginBottom: "12px",
          }}
        >
          {" "}
          <Iconattendance sx={{ fontSize: "30px", mx: "5px" }} /> LMS
        </Typography>
        <Divider />
        <Li>
          <Link to="/admin">
            <Typography variant="h5">LMS Dashboard</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/modules/academic/learning-management-system/link">
            <Typography variant="h5">Big Blue Button Link</Typography>
          </Link>
        </Li>
      </Ul>

      <Ul>
        <Typography
          variant="h3"
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "5px",
            marginBottom: "12px",
          }}
        >
          {" "}
          <Resolve>
            <AssignmentIcon sx={{ fontSize: "30px", mx: "5px" }} /> Assessment &
            Grading
          </Resolve>
        </Typography>
        <Divider />
        <Li>
          <Link to="/modules/academic/assessment-and-grade">
            <Typography variant="h5">Assessment & Gradings</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/modules/academic/section-grade-book">
            <Typography variant="h5">Class-Section Grade Book</Typography>
          </Link>
        </Li>
      </Ul>

      <Ul>
        <Typography
          variant="h3"
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "5px",
            marginBottom: "12px",
          }}
        >
          {" "}
          <Resolve>
            <GraduationIcon sx={{ fontSize: "30px", mx: "5px" }} /> Promotion &
            Graduation
          </Resolve>
        </Typography>
        <Divider />
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Academic Session</Typography>
          </Link>
        </Li>
      </Ul>

      <Ul>
        <Typography
          variant="h3"
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "5px",
            marginBottom: "12px",
          }}
        >
          {" "}
          <ExamIcon sx={{ fontSize: "30px", mx: "5px" }} /> Examination
        </Typography>
        <Divider />
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Examination</Typography>
          </Link>
        </Li>
      </Ul>

      <Ul>
        <Typography
          variant="h3"
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "5px",
            marginBottom: "12px",
          }}
        >
          {" "}
          <BadgeIcon sx={{ fontSize: "30px", mx: "5px" }} />
          Badges
        </Typography>
        <Divider />
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Badges</Typography>
          </Link>
        </Li>
      </Ul>
    </Container>
  );
};

export default Academic;
