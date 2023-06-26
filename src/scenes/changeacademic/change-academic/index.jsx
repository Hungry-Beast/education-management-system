import React,{useState } from "react";
import StatusBar from "../../global/StatusBar";
import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import styled from "styled-components";
import Topbar from "../../global/Topbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import { StyledContainer,StyledDesc,StyledDetails} from './Academic.styles';

import AcademicModal from '../change-academic/AcademicModal';
const Container = styled.div`
  /* padding: 16px; */
  margin: 0 auto;
  width: 100%;
  height: 100%;
  /* width: calc(100% - 30px); */
  background-color: #d8e4ec86;
  /* border-radius: 10px; */
`;


const TabCont = styled.div`
  /* background-color: white;
  margin-bottom:20px; */
  width: 100%;
  /* border-radius: 0.8rem; */
  max-width: 600px;
  margin: 0 auto;
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hclassden={value !== index}
      class={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function ChangeAcademic() {
  const [setVal]=useState('')
  const data=["select","Academic Year 2021-2022" ,"Academic Year 2022-2023","AY 2023-2024","AC 2024-2025"]
  

  return (
    <>
      <Topbar />
      <StatusBar />
      {/* <br /> */}
      <Container>
        <StyledContainer>
          <h3>Change Academic Session</h3>
          <StyledDesc>
            <p>Current Active Session :</p>
            <h4>Academic Year 2022-2023</h4>
          </StyledDesc>
          <StyledDetails>
            <h5>Session</h5>
            <input list='data' placeholder={"Academic Year 2021-2022"} onChange={(e)=>setVal(e.target.value)}/>
              <datalist id='data'>
                {data.map((op)=><option>{op}</option>)}
              </datalist>
      
          <AcademicModal/>   
          </StyledDetails>
        </StyledContainer>  
      </Container>
    </>
  );
}

export default ChangeAcademic;
