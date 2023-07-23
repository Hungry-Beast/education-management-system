import { Divider, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TrainingIcon from '@mui/icons-material/AssignmentInd';
import CafeteriaIcon from '@mui/icons-material/FreeBreakfast';
import ComplainIcon from '@mui/icons-material/ThreeP';
import LibraryIcon from '@mui/icons-material/LocalLibrary';
import RFIDIcon from '@mui/icons-material/LibraryBooks';

const Resolve = styled.div`
  display: flex;
  vertical-align: middle,
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
    /* color: lightblue; */
  }
`;
const Li = styled.li`
  margin-left: 10px;
  padding: 8px 5px;
`;

const Others = () => {
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
            <Resolve>
            <TrainingIcon  sx={{fontSize:"30px" ,mx:"5px"}} /> Training & Placement
            </Resolve>
          </Typography>
          <Divider />
          <Li>
          <Link to="/admin">
            <Typography variant="h5">Manage Training </Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/modules/others/training">
            <Typography variant="h5">Training</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Training Questionaire</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Manage Placement</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Job Posts</Typography>
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
            <CafeteriaIcon sx={{fontSize:"30px" ,mx:"5px"}} /> Cafeteria
          </Typography>
          <Divider />
          <Li>
          <Link to="/admin">
            <Typography variant="h5">Manage Cafeteria</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Manage Today's Menu</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Menu</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Manage Orders</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">My Orders</Typography>
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
            <ComplainIcon sx={{fontSize:"30px" ,mx:"5px"}} /> Complaint Management
            </Resolve>
          </Typography>
          <Divider />
          <Li>
          <Link to="/admin">
            <Typography variant="h5">My Complain</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">assign complains</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Complain Manager</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Complain Category</Typography>
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
            <LibraryIcon sx={{fontSize:"30px" ,mx:"5px"}} /> Library
          </Typography>
          <Divider />
          <Li>
          <Link to="/admin">
            <Typography variant="h5">Library Settings</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Book Management</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Book Stock Management</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Library Members</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Transactions</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Damaged Books</Typography>
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
            <RFIDIcon sx={{fontSize:"30px" ,mx:"5px"}} /> RFID
          </Typography>
          <Divider />
          <Li>
          <Link to="/admin">
            <Typography variant="h5">RFID Report</Typography>
          </Link>
        </Li>
    </Ul>



    </Container>
  );
};

export default Others;