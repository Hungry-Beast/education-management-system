import { AccessAlarm, AccessTime, LibraryBooks, LockClock, ModeEdit, PunchClock, Subject } from "@mui/icons-material";
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
        <Tab label="Timing Set" value={0} icon={<AccessTime/>} />
        <Tab label="Section Time Set" value={1} icon={<AccessTime/>}  />
      </Tabs>
    </Container>
  );
};

export default TabsSection;
