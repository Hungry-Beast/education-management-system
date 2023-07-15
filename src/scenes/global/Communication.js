import { Divider, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AnnounIcon from '@mui/icons-material/Email';
import NoticeIcon from '@mui/icons-material/Article';
import EventIcon from '@mui/icons-material/Event';
import ActivityIcon from '@mui/icons-material/EventNote';

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

const Communication = () => {
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
            <AnnounIcon  sx={{fontSize:"30px" ,mx:"5px"}} /> Announcement
          </Typography>
          <Divider />
          <Li>
          <Link to="/modules/communication/announcement/notification-panel">
            <Typography variant="h5">Notification Panel</Typography>
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
            <NoticeIcon sx={{fontSize:"30px" ,mx:"5px"}} /> Notice Board
          </Typography>
          <Divider />
          <Li>
          <Link to="/modules/communication/noticeboard/notice-board">
            <Typography variant="h5">Notice</Typography>
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
            <EventIcon sx={{fontSize:"30px" ,mx:"5px"}} /> Event
          </Typography>
          <Divider />
          <Li>
          <Link to="/admin">
            <Typography variant="h5">Manage Events</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/modules/communication/event/event-calender">
            <Typography variant="h5">Events Calendar</Typography>
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
            <ActivityIcon sx={{fontSize:"30px" ,mx:"5px"}} /> Activities
          </Typography>
          <Divider />
          <Li>
          <Link to="/admin">
            <Typography variant="h5">Student Activities</Typography>
          </Link>
        </Li>
    </Ul>



    </Container>
  );
};

export default Communication;