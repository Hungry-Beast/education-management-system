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
  grid-template-rows: 1fr 1fr 1fr;
  padding: 10px 15px;
`;
const Ul = styled.ul`
  list-style: none;
  a {
    text-decoration: none;
    /* color: lightblue; */
  }
`;
const Li = styled.li`
  margin-left: 10px;
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
            marginBottom: "8px",
          }}
        >
          {" "}
          <Settings /> Academic
        </Typography>
        <Divider />
        <Li>
          <Link to="/admin">
            <Typography variant="h6">Academic Configuration</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h6">Academic Configuration</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h6">Academic Configuration</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h6">Class Teacher Meeting</Typography>
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
            marginBottom: "8px",
          }}
        >
          {" "}
          <Settings /> Academic
        </Typography>
        <Divider />
        <Li>
          <Link to="/admin">
            <Typography variant="h6">Academic Configuration</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h6">Class Teacher Meeting</Typography>
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
            marginBottom: "8px",
          }}
        >
          {" "}
          <Settings /> Academic
        </Typography>
        <Divider />
        <Li>
          <Link to="/admin">
            <Typography variant="h6">Academic Configuration</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h6">Class Teacher Meeting</Typography>
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
            marginBottom: "8px",
          }}
        >
          {" "}
          <Settings /> Academic
        </Typography>
        <Divider />
        <Li>
          <Link to="/admin">
            <Typography variant="h6">Academic Configuration</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h6">Class Teacher Meeting</Typography>
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
            marginBottom: "8px",
          }}
        >
          {" "}
          <Settings /> Academic
        </Typography>
        <Divider />
        <Li>
          <Link to="/admin">
            <Typography variant="h6">Academic Configuration</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h6">Class Teacher Meeting</Typography>
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
            marginBottom: "8px",
          }}
        >
          {" "}
          <Settings /> Academic
        </Typography>
        <Divider />
        <Li>
          <Link to="/admin">
            <Typography variant="h6">Academic Configuration</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h6">Class Teacher Meeting</Typography>
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
            marginBottom: "8px",
          }}
        >
          {" "}
          <Settings /> Academic
        </Typography>
        <Divider />
        <Li>
          <Link to="/admin">
            <Typography variant="h6">Academic Configuration</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h6">Class Teacher Meeting</Typography>
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
            marginBottom: "8px",
          }}
        >
          {" "}
          <Settings /> Academic
        </Typography>
        <Divider />
        <Li>
          <Link to="/admin">
            <Typography variant="h6">Academic Configuration</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h6">Class Teacher Meeting</Typography>
          </Link>
        </Li>
      </Ul>
      {/* <Ul>
        <Typography
          variant="h3"
          style={{ display: "flex", alignItems: "center", marginTop:"5px",marginBottom:"8px", }}
        >
          {" "}
          <Settings /> Academic
        </Typography>
        <Divider/>
        <Li>
          <Link to="/admin">
            <Typography variant="h6">Academic Configuration</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h6">Class Teacher Meeting</Typography>
          </Link>
        </Li>
      </Ul> */}
    </Container>
  );
};

export default Administration;
