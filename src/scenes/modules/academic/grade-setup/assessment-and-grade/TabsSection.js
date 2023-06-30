import { LibraryBooks, Link, ModeEdit, Settings, Subject } from "@mui/icons-material";
import { Divider, Tab, Tabs } from "@mui/material";
import  { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TabsSection = ({value,handleChange}) => {
 
  return (
    <Container>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="tabs"
      >
        <Tab label="Assessment" value={0} icon={<LibraryBooks/>} />
        <Tab label="Grade Book" value={1} icon={<LibraryBooks/>}  />
        <Tab label="Grade Setup" value={2} icon={<Settings/>} />
        <Tab label="Link Class Subject Assignment" value={3} icon={<Link/>} />
      </Tabs>
    </Container>
  );
};

export default TabsSection;
