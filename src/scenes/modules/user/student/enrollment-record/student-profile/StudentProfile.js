import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import TabsSection from "./TabsSection";
import { useState } from "react";
import { Divider } from "@mui/material";
import SectionContainer from "./SectionContainer";
import { ImageContext } from "../../../../../../context/Context";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  width: calc(100% - 30px);
  /* height: 100%; */
  padding: 16px;
  margin: 15px auto;
`;
const LeftComponent = styled.div`
  flex: 1;
`;
const Component = styled.div`
  flex: 3;

  background-color: #fff;
  border-radius: 10px;
  padding: 0 20px;
`;
const StudentProfile = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [context, setContext] = useContext(ImageContext);
  useEffect(() => {
    setContext("academic.svg");
  }, []);

  return (
    <Container>
      <LeftComponent>
        <Component>
          
        </Component>
      </LeftComponent>
      <Component>
        <TabsSection value={value} handleChange={handleChange} />
        <Divider sx={{ my: "5px" }} color="#ffa800" />
        <SectionContainer value={value} />
      </Component>
    </Container>
  );
};

export default StudentProfile;
