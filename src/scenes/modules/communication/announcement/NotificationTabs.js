import { Create, LibraryBooks, ModeEdit, Subject } from "@mui/icons-material";
import { Divider, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

import React from "react";

import { Outlet, useLocation } from "react-router-dom";

const TabCont = styled.div`
  /* background-color: white;
  margin-bottom:20px; */
  width: 100%;
  /* border-radius: 0.8rem; */
  max-width: 600px;
  margin: 0 auto;
`;





const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledTabs = styled(Tabs)`
  .MuiTab-root {
    &:hover {
      background-color: blue;
      color: white;
    }
  }

  .Mui-selected {
    background-color: blue !important;
    color: white !important;
  }
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


const NotificationTabs = () => {

  const location = useLocation();
  const pathValue=location.pathname.split('/').at(-1);
  console.log(pathValue)
  const [value, setValue] = React.useState(pathValue);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // if (newValue == "notice-view") navigate("../announcement/View.js");
    // if (newValue == "notice-create") navigate('../announcement/Create.js');
    if (newValue === "notice-view") navigate("/announcement/View");
    if (newValue === "notice-create") navigate("/announcement/Create");
    
  };




  return (
    <Container>
      {/* <StyledTabs value={value} onChange={handleChange} aria-label="tabs">
        <Tab label="View" value={0} />
        <Tab label="Create" value={1} />
        <Tab label="SMS" value={2} />
        <Tab label="Mail" value={3} />
        <Tab label="Push Notification" value={4} />
      </StyledTabs> */}
      
      <Box style={{ width: "100%" }}>
            <TabCont>
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1 }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab label="View" value={"notice-view"} />
                    <Tab label="Create" value={"notice-create"} />

                    
               
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}></TabPanel>
                <TabPanel value={value} index={1}></TabPanel>
                
              </Box>
            </TabCont>

            <Outlet />
          </Box>
     
    </Container>
  );
};

export default NotificationTabs;
