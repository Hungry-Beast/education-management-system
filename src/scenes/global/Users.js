import { Divider, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StudentIcon from '@mui/icons-material/Groups2';
import TeacherIcon from '@mui/icons-material/PeopleOutline';
import StaffIcon from '@mui/icons-material/Person3';
import PreadmissoonIcon from '@mui/icons-material/Contacts';
import IdIcon from '@mui/icons-material/CoPresent';
import ParentsIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import CertificateIcon from '@mui/icons-material/BadgeOutlined';



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
    /* color: lightblue; */
  }
`;
const Li = styled.li`
  margin-left: 10px;
  padding: 8px 5px;
`;

const Users = () => {
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
            <StudentIcon sx={{fontSize:"30px" ,mx:"5px"}} /> Student
          </Typography>
          <Divider />
          <Li>
          <Link to="/modules/users/students">
            <Typography variant="h5">Enrolled Records</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Enrollment Form</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Elective Subject Allocation</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Student Wizard Form</Typography>
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
            <TeacherIcon sx={{fontSize:"30px" ,mx:"5px"}} /> Teacher
          </Typography>
          <Divider />
          <Li>
          <Link to="/admin">
            <Typography variant="h5">Enrolled Records</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Enrollment Form</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Subject Allocation</Typography>
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
            <StaffIcon sx={{fontSize:"30px" ,mx:"5px"}} /> Staff
          </Typography>
          <Divider />
          <Li>
          <Link to="/admin">
            <Typography variant="h5">Enrolled Records</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">My Details</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Enrollment Form</Typography>
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
            <PreadmissoonIcon sx={{fontSize:"30px" ,mx:"5px"}} /> Pre-Admission
          </Typography>
          <Divider />
          <Li>
          <Link to="/admin">
            <Typography variant="h5">Create Admission</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Submitted Applicants</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Admission Customize Form</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Preview Form</Typography>
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
            <IdIcon sx={{fontSize:"30px" ,mx:"5px"}} /> ID Card
          </Typography>
          <Divider />
          <Li>
          <Link to="/admin">
            <Typography variant="h5">All Templates</Typography>
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
            <ParentsIcon sx={{fontSize:"30px" ,mx:"5px"}} /> Parents
          </Typography>
          <Divider />
          <Li>
          <Link to="/admin">
            <Typography variant="h5">View Parents</Typography>
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
            <CertificateIcon sx={{fontSize:"30px" ,mx:"5px"}} /> Certificates
          </Typography>
          <Divider />
          <Li>
          <Link to="/admin">
            <Typography variant="h5">Transfer Certificate</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Transfer Certificate Template</Typography>
          </Link>
        </Li>
    </Ul>



    </Container>
  );
};

export default Users;