import {
  EmergencyRecording,
  LocalHospital,
  MonitorHeart,
  Person,
  Person2,
  Phone,
} from "@mui/icons-material";
import { Box, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Component = styled.div`
  width: 100%;
  padding: 20px 15px;
  gap: 20px 0;
  display: flex;
  flex-direction: column;
`;
const Upper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 20px;
`;
const LeftComponent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px 20px;
`;
const UpperCardBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column: span 2;
  margin-bottom: 10px;
`;
const UpperCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #c7ffc7;
  align-items: center;
  padding: 20px 10px;
  border-radius: 10px;
`;
const ColorBox = styled.div`
  width: 30px;
  height: 30px;
  background: ${(props) => props.bgColor};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const lowerCard = styled.div``;
const RightComponent = styled.div``;
const HealthIcon = styled.img`
  width: 30px;
`;
const Middle = styled.div``;
const Lower = styled.div``;
const Profile = () => {
  return (
    <Component>
      <Upper>
        <LeftComponent>
          <UpperCard>
            <UpperCardBox>
              <Typography variant="h4" fontWeight="bolder">
                Blood PressureS
              </Typography>
              <ColorBox bgColor="#3246d3">
                <MonitorHeart sx={{ color: "#fff" }} />
              </ColorBox>
            </UpperCardBox>
            <Box style={{ gridColumn: "span 1" }}>
              <Typography variant="h4" fontWeight="light">
                Upper
              </Typography>
              <Typography variant="h5" fontWeight="light">
                NA
              </Typography>
            </Box>
            <Box style={{ gridColumn: "span 1" }}>
              <Typography variant="h4" fontWeight="light">
                Lower
              </Typography>
              <Typography variant="h5" fontWeight="light">
                NA
              </Typography>
            </Box>
          </UpperCard>
          <UpperCard>
            <UpperCardBox>
              <Typography variant="h4" fontWeight="bolder">
                Fever History
              </Typography>
              {/* <ColorBox bgColor="#3246d3">
                <MonitorHeart sx={{ color: "#fff" }} />
              </ColorBox> */}
            </UpperCardBox>
            <Box style={{ gridColumn: "span 1" }}>
              <Typography variant="h4" fontWeight="light">
                NA
              </Typography>
            </Box>
          </UpperCard>
          <UpperCard>
            <UpperCardBox>
              <Typography variant="h4" fontWeight="bolder">
                Emergency Contact
              </Typography>
              <ColorBox bgColor="#3246d3">
                <Phone sx={{ color: "#fff" }} />
              </ColorBox>
            </UpperCardBox>
            <Box>
              <Box
                sx={{
                  gridColumn: "span 1",
                  backgroundColor: "#ee3158",
                  width: "max-content",
                  padding: "3px 9px",
                  borderRadius: "15px",
                  color: "#fff",
                }}
              >
                6002957667
              </Box>
            </Box>
          </UpperCard>
          <UpperCard>
            <UpperCardBox>
              <Typography variant="h4" fontWeight="bolder">
                DR. RANJIT PATHAK
              </Typography>
              <ColorBox bgColor="#3246d3">
                <LocalHospital sx={{ color: "#fff" }} />
              </ColorBox>
            </UpperCardBox>
            <Box>
              <Box
                sx={{
                  gridColumn: "span 1",
                  //   backgroundColor: "#ee3158",
                  //   width: "max-content",
                  //   padding: "3px 9px",
                  //   borderRadius: "15px",
                  //   color: "#fff",
                }}
              >
                My Doctor
              </Box>
            </Box>
          </UpperCard>
        </LeftComponent>
        <RightComponent>
          <Typography variant="h3" sx={{ px: 2, py: 1 }}>
            Current Vitals
          </Typography>
          <Divider />
          <Box
            display="flex"
            sx={{ mt: 2, px: 2 }}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box display="flex" gap="0 5px">
              <Typography variant="h5" fontWeight="light">
                Student Name:
              </Typography>
              <Typography variant="h5" fontWeight="bolder">
                BIBUNGSAR BASUMATRY
              </Typography>
            </Box>
            <Box display="flex" gap="0 5px">
              <Typography variant="h5" fontWeight="300">
                Unique Id:
              </Typography>
              <Typography variant="h5" fontWeight="bolder">
                0196
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{ mt: 2, px: 2 }}
            display="flex"
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box
              display="flex"
              alignItems={"center"}
              justifyContent={"space-between"}
              gap="0 10px"
            >
              <HealthIcon src="/assets/weight.png" />
              <Box>
                Weight
                <Typography fontWeight="bolder" variant="h5">
                  N/A kg
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              alignItems={"center"}
              justifyContent={"space-between"}
              gap="0 10px"
            >
              <HealthIcon src="/assets/human.png" />
              <Box>
                Height
                <Typography fontWeight="bolder" variant="h5">
                  N/A cm
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              alignItems={"center"}
              justifyContent={"space-between"}
              gap="0 10px"
            >
              <HealthIcon src="/assets/bmi.png" />
              <Box>
                BMI
                <Typography fontWeight="bolder" variant="h5">
                  N/A kg
                </Typography>
              </Box>
            </Box>
          </Box>
        </RightComponent>
      </Upper>
      <Middle>
        <Paper
          //   elevation={3}
          sx={{
            boxShadow: 2,
            // p: 2,
            backgroundColor: "#e9edf2",
            "&:hover": {
              boxShadow: 5,
            },
          }}
        >
          <Typography sx={{ p: 1 }} fontWeight="bolder" variant="h5">
            Attendence
          </Typography>
          <Divider />
          <Box
            sx={{ p: 1 }}
            display="flex"
            justifyContent={"center"}
            alignItems={"center"}
          >
            
          </Box>
        </Paper>
      </Middle>
      <Lower></Lower>
    </Component>
  );
};

export default Profile;
