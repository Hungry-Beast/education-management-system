import React from "react";
import styled from "styled-components";
import { ImageContext } from "../../../../../context/Context";
import { useContext } from "react";
import { useEffect } from "react";
import Retrive from "./Retrive";
import Card from "./Card";
const Component = styled.div`
  width: calc(100% - 30px);
  height: 100%;
  padding: 16px;
  background-color: #fff;
  margin: 15px 0;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 0px;
  align-items:center;
  justify-content: space-between;
  /* justify-content: space-between; */
`;
const Student = () => {
  const [context, setContext] = useContext(ImageContext);
  useEffect(() => {
    setContext("studentEnrolledRecords.svg");
  }, []);

  return (
    <div>
      <Retrive />
      <Component>
        <Card />
        <Card />
        <Card />
      </Component>
    </div>
  );
};

export default Student;
