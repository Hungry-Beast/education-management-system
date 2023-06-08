import { Settings } from "@mui/icons-material";
import { Divider, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const Administration = () => {
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
          <Settings sx={{ mx: "5px" }} /> Academic
        </Typography>
        <Divider />
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Academic Configuration</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Class Teacher Meeting</Typography>
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
          <Settings sx={{ mx: "5px" }} /> Academic
        </Typography>
        <Divider />
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Academic Configuration</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Class Teacher Meeting</Typography>
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
          <Settings sx={{ mx: "5px" }} /> Academic
        </Typography>
        <Divider />
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Academic Configuration</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Class Teacher Meeting</Typography>
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
          <Settings sx={{ mx: "5px" }} /> Academic
        </Typography>
        <Divider />
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Academic Configuration</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Class Teacher Meeting</Typography>
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
          <Settings sx={{ mx: "5px" }} /> Academic
        </Typography>
        <Divider />
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Academic Configuration</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Class Teacher Meeting</Typography>
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
          <Settings sx={{ mx: "5px" }} /> Academic
        </Typography>
        <Divider />
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Academic Configuration</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Class Teacher Meeting</Typography>
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
          <Settings sx={{ mx: "5px" }} /> Academic
        </Typography>
        <Divider />
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Academic Configuration</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Class Teacher Meeting</Typography>
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
          <Settings sx={{ mx: "5px" }} /> Academic
        </Typography>
        <Divider />
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Academic Configuration</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Class Teacher Meeting</Typography>
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
          <Settings sx={{ mx: "5px" }} /> Academic
        </Typography>
        <Divider />
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Academic Configuration</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Class Teacher Meeting</Typography>
          </Link>
        </Li>
      </Ul>
    </Container>
  );
};

export default Administration;
