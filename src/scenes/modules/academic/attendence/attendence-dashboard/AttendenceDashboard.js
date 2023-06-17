import React from "react";
import { useContext } from "react";
import { Box, Divider, Typography, colors } from "@mui/material";
import styled from "styled-components";
import { ImageContext } from "../../../../../context/Context";
import { useEffect } from "react";
import StaticsticsComponent from "./StaticsticsComponent";
import FormComponent from "./FormComponent";

const Component = styled.div`
  width: calc(100% - 30px);
  height: max-content;
  padding: 16px;
  background-color: #fff;
  margin: 15px auto;
  border-radius: 10px;
`;

const AttendanceDashboard = () => {
  const [context, setContext] = useContext(ImageContext);
  useEffect(() => {
    setContext("studentAttendance.svg");
  }, []);
  return (
    <Component>
      <StaticsticsComponent />
      <FormComponent />
    </Component>
  );
};

export default AttendanceDashboard;
