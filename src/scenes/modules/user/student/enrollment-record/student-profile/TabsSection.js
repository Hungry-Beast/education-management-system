import { LibraryBooks, ModeEdit, Person, Subject } from "@mui/icons-material";
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
        <Tab wrapped={true} label="Profile" value={0} icon={<Person/>} />
        <Tab wrapped={true} label="Subject" value={1} icon={<Subject/>} />
        <Tab wrapped={true} label="Courses" value={2} icon={<LibraryBooks/>}  />
        <Tab wrapped={true} label="Class/Sem/Year" value={3} icon={<ModeEdit/>} />
      </Tabs>
    </Container>
  );
};

export default TabsSection;
