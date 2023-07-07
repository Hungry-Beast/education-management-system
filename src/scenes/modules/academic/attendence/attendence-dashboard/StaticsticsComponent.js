import React from "react";

import { Box, Divider, Typography, colors } from "@mui/material";
import styled from "styled-components";
const StatisticContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const GradiantContainer = styled.div`
  background: ${(props) => props.background};
  border-radius: 15px;
  flex: 30%;
  margin: 10px 20px;
  padding: 10px;
  min-height: 240px;
  
`;
const GenderDetailContainer = styled.div`
  display: flex;
  width: 50%;
  border-left: ${(props) => (props.isLast ? "1px solid #fff" : "none")};
  padding: 10px 12px;
  margin-top: 10px;
`;
const IconImage = styled.img`
  height: 70px;
  margin-right: 10px;
`;
const StaticsticsComponent = () => {
  return (
    <StatisticContainer>
      <GradiantContainer
        background={
          "linear-gradient(to bottom right, #33ccff 0%, #82d282 100%)"
        }
      >
        <Typography variant="h3" color="#ffffff">
          Student Statistics
        </Typography>
        <Divider color="white" />
        <Box sx={{ margin: "0 auto", py: "10px" }}>
          <Typography variant="h3" color="#ffffff" align="center">
            411
          </Typography>
          <Typography variant="h5" color="#ffffff" align="center">
            Total Students
          </Typography>
        </Box>
        <Box display={"flex"}>
          <GenderDetailContainer>
            <IconImage src="/assets/fStudent.svg" alt="Female Student" />
            <Box>
              <Typography variant="h4" color="#ffffff">
                {" "}
                185 F
              </Typography>
              <Typography variant="h4" color="#ffffff">
                {" "}
                P 0
              </Typography>
              <Typography variant="h4" color="#ffffff">
                {" "}
                A 185
              </Typography>
            </Box>
          </GenderDetailContainer>
          <GenderDetailContainer isLast={true}>
            <IconImage src="/assets/mStudent.svg" alt="Male Student" />
            <Box>
              <Typography variant="h4" color="#ffffff">
                {" "}
                185 F
              </Typography>
              <Typography variant="h4" color="#ffffff">
                {" "}
                P 0
              </Typography>
              <Typography variant="h4" color="#ffffff">
                {" "}
                A 185
              </Typography>
            </Box>
          </GenderDetailContainer>
        </Box>
      </GradiantContainer>
      <GradiantContainer
        background={"linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)"}
      >
        <Typography variant="h3" color="#ffffff">
          Teacher Statistics
        </Typography>
        <Divider color="white" />
        <Box sx={{ margin: "0 auto", py: "10px" }}>
          <Typography variant="h3" color="#ffffff" align="center">
            111
          </Typography>
          <Typography variant="h5" color="#ffffff" align="center">
            Total Teacher
          </Typography>
        </Box>
        <Box display={"flex"}>
          <GenderDetailContainer>
            <IconImage src="/assets/fTeacher.svg" alt="Female Student" />
            <Box>
              <Typography variant="h4" color="#ffffff">
                {" "}
                185 F
              </Typography>
              <Typography variant="h4" color="#ffffff">
                {" "}
                P 0
              </Typography>
              <Typography variant="h4" color="#ffffff">
                {" "}
                A 185
              </Typography>
            </Box>
          </GenderDetailContainer>
          <GenderDetailContainer isLast={true}>
            <IconImage src="/assets/mTeacher.svg" alt="Male Student" />
            <Box>
              <Typography variant="h4" color="#ffffff">
                {" "}
                185 F
              </Typography>
              <Typography variant="h4" color="#ffffff">
                {" "}
                P 0
              </Typography>
              <Typography variant="h4" color="#ffffff">
                {" "}
                A 185
              </Typography>
            </Box>
          </GenderDetailContainer>
        </Box>
      </GradiantContainer>
      <GradiantContainer
        background={
          "linear-gradient(315deg, rgb(252, 224, 67) 0%, rgb(251, 123, 162) 74%)"
        }
      >
        <Typography variant="h3" color="#ffffff">
          Staff Statistics
        </Typography>
        <Divider color="white" />
        <Box sx={{ margin: "0 auto", py: "10px" }}>
          <Typography variant="h3" color="#ffffff" align="center">
            411
          </Typography>
          <Typography variant="h5" color="#ffffff" align="center">
            Total Students
          </Typography>
        </Box>
        <Box display={"flex"}>
          <GenderDetailContainer>
            <IconImage src="/assets/fStaff.svg" alt="Female Student" />
            <Box>
              <Typography variant="h4" color="#ffffff">
                {" "}
                185 F
              </Typography>
              <Typography variant="h4" color="#ffffff">
                {" "}
                P 0
              </Typography>
              <Typography variant="h4" color="#ffffff">
                {" "}
                A 185
              </Typography>
            </Box>
          </GenderDetailContainer>
          <GenderDetailContainer isLast={true}>
            <IconImage src="/assets/mStaff.svg" alt="Male Student" />
            <Box>
              <Typography variant="h4" color="#ffffff">
                {" "}
                185 F
              </Typography>
              <Typography variant="h4" color="#ffffff">
                {" "}
                P 0
              </Typography>
              <Typography variant="h4" color="#ffffff">
                {" "}
                A 185
              </Typography>
            </Box>
          </GenderDetailContainer>
        </Box>
      </GradiantContainer>
    </StatisticContainer>
  );
};

export default StaticsticsComponent;
