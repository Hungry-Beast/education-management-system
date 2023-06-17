import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import TabsSection from "./TabsSection";
import { useState } from "react";
import { Divider } from "@mui/material";
import SectionContainer from "./SectionContainer";
import { ImageContext } from "../../../../../context/Context";

const Component = styled.div`
  width: calc(100% - 30px);
  height: 100%;
  padding: 16px;
  background-color: #fff;
  margin: 15px auto;
  border-radius:10px;
`;
const Academic = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [context, setContext] = useContext(ImageContext);
  useEffect(() => {
    setContext("academic.svg");
  }, []);

  return (
    <Component>
      <TabsSection value={value} handleChange={handleChange} />
      <Divider sx={{my:"5px"}} color="#ffa800" />
      <SectionContainer value={value} />
    </Component>
  );
};

export default Academic;
