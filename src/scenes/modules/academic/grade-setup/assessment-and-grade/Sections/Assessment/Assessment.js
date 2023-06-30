import { Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px 40px;
  margin-top: 50px;
  a {
    all: unset;
    cursor: pointer;
    &:hover {
      color: blue;
    }
  }
`;
const gradeArr = [
  {
    name: "Grade Setup I-V",
    link: 1,
  },
  {
    name: "Grade Setup V-VIII",
    link: 2,
  },
  {
    name: "Grade Setup VI",
    link: 3,
  },
  {
    name: "Grade Setup SAS",
    link: 4,
  },
  {
    name: "SAS Grading KGI-II",
    link: 5,
  },
  {
    name: "SAS Grade Setup I-V",
    link: 6,
  },
  {
    name: "SAS Grading IX-X",
    link: 7,
  },
  {
    name: "DPS JORHAT Grading",
    link: 8,
  },
  {
    name: "SAS Grading KGI-II_R1",
    link: 9
  },
  
];

const Assessment = () => {
  
  return (
    <Container>
      {gradeArr.map((grade) => (
        <Paper sx={{ p: 3 }} key={grade.link} elevation={3}>
          <Link to={"/modules/academic/assessment-and-grade/assessment/" + grade.link}>
            <Typography variant="h4" align="center">
              {grade.name}
            </Typography>
          </Link>
        </Paper>
      ))}
    </Container>
  );
};

export default Assessment;
