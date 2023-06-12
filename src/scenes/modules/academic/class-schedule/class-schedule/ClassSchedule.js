import React from "react";
import styled from "styled-components";
import TabsSection from "./TabsSection";
import { useState } from "react";
import { Divider } from "@mui/material";
import SectionContainer from "./SectionContainer";

const Component = styled.div`
  width: calc(100% - 30px);
  height: 100%;
  padding: 16px;
  background-color: #fff;
  margin: 15px auto;
  border-radius:10px;
`;
const ClassSchedule = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Component>
      <TabsSection value={value} handleChange={handleChange} />
      <Divider sx={{my:"5px"}} color="#ffa800" />
      <SectionContainer value={value} />
    </Component>
  );
};

export default ClassSchedule;
