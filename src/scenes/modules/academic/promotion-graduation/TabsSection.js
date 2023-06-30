import { Announcement, CalendarMonth, Campaign, LibraryBooks, Link, ModeEdit, School, Settings, Speaker, Subject } from "@mui/icons-material";
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
        <Tab label="Sessions" value={0} icon={<CalendarMonth/>} />
        <Tab label="Promotions" value={1} icon={<Campaign/>}  />
        <Tab label="Graduation" value={2} icon={<School/>} />
      </Tabs>
    </Container>
  );
};

export default TabsSection;
