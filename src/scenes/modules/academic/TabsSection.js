import { LibraryBooks, ModeEdit, Subject } from "@mui/icons-material";
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
        <Tab label="Subject" icon={<Subject/>} />
        <Tab label="Courses" icon={<LibraryBooks/>}  />
        <Tab label="Class/Sem/Year" icon={<ModeEdit/>} />
      </Tabs>
    </Container>
  );
};

export default TabsSection;
