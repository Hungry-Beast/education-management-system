import { LibraryBooks, ModeEdit, Subject } from "@mui/icons-material";
import { Divider, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledTabs = styled(Tabs)`
  .MuiTabs-flexContainer {
    background-color: white;
    color:white;
  }

  .MuiTab-root {
    color: black;
    &:hover {
      background-color: blue;
      color: white;
    }
  }

  .Mui-selected {
    background-color: blue;
    color: white !important;
  }
`;

const TabsSection = ({ value, handleChange }) => {
  return (
    <Container>
      <StyledTabs value={value} onChange={handleChange} aria-label="tabs">
        <Tab label="View" value={0} />
        <Tab label="Create" value={1}  />
        <Tab label="SMS" value={2} />
        <Tab label="Mail" value={3} />
        <Tab label="Push Notification" value={4} />
      </StyledTabs>
    </Container>
  );
};

export default TabsSection;
