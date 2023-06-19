
import { Divider, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AssetIcon from '@mui/icons-material/LocalMallSharp';
import SchoolstrIcon from '@mui/icons-material/AccountBalanceSharp';
import TeacherIcon from '@mui/icons-material/Groups2';
import VisitorIcon from '@mui/icons-material/PersonRounded';
import HostelIcon from '@mui/icons-material/MapsHomeWorkRounded';
import TransportIcon from '@mui/icons-material/LocalTaxi';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import ReportIcon from '@mui/icons-material/Assessment';

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
          < AssetIcon sx={{ fontSize:"30px" ,mx: "5px" }} /> Asset
        </Typography>
        <Divider />
        <Li>
          <Link to="/modules/administration/location-category">
            <Typography variant="h5">Category & Location</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/modules/administration/vendor">
            <Typography variant="h5">vendor</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/modules/administration/assets">
            <Typography variant="h5">Assets</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/modules/administration/asset-purchase">
            <Typography variant="h5">Assests purchase</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Assests assignment</Typography>
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
          < SchoolstrIcon sx={{fontSize:"30px" , mx: "5px" }} /> School Structure
          </Resolve>
        </Typography>
        <Divider />
        <Li>
          <Link to="/admin">
            <Typography variant="h5">School Structure</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">School Structure UI</Typography>
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
          < TeacherIcon sx={{ fontSize:"30px" ,mx: "5px" }} /> Teacher/Staff Attendance
          </Resolve>
        </Typography>
        <Divider />
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Teacher Setting</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Teacher Attendance</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Staff Attendance</Typography>
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
          < VisitorIcon sx={{ fontSize:"30px" ,mx: "5px" }} /> Visitor
        </Typography>
        <Divider />
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Manage Visitor</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Postal</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Enquiry</Typography>
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
          < HostelIcon sx={{ fontSize:"30px" ,mx: "5px" }} /> Hostel
        </Typography>
        <Divider />
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Hostel</Typography>
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
          < TransportIcon sx={{ fontSize:"30px" ,mx: "5px" }} /> Transport
        </Typography>
        <Divider />
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Transport Management</Typography>
          </Link>
        </Li>
        <Li>
          <Link to="/admin">
            <Typography variant="h5">User Management</Typography>
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
          < ImportExportIcon  sx={{ fontSize:"30px" ,mx: "5px" }} /> Import/Export
        </Typography>
        <Divider />
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Import/Export Management</Typography>
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
          < ReportIcon sx={{ mx: "5px" }} /> Report
        </Typography>
        <Divider />
        <Li>
          <Link to="/admin">
            <Typography variant="h5">Report</Typography>
          </Link>
        </Li>
    </Ul>








     
      
      
      
    
    </Container>
  );
};

export default Administration;
