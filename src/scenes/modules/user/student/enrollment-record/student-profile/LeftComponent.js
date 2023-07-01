import { Email, Notifications, Phone } from "@mui/icons-material";
import { Divider, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
const LeftComponentDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px 0;
`;
const Component = styled.div`
  /* flex: 3; */

  background-color: #fff;
  border-radius: 10px;
  padding: 20px 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
`;
const ProfileImage = styled.img`
  width: 30%;
`;
const LeftComponent = () => {
  return (
    <LeftComponentDiv>
      <Component>
        <ProfileImage src="/assets/studentMale.png" />
        <Typography variant="h3" fontWeight="bolder">
          BIBUNGSAR BASUMATRY
        </Typography>
        <Typography variant="h4" fontWeight="bold" color="#7b2cbf">
          CLASS 14 (CLASS 14-A)
        </Typography>
        <Typography variant="h4" fontWeight="bold" color="#7b2cbf">
          Unique ID 0196
        </Typography>
        <Notifications />
      </Component>
      <Component>
        <Typography variant="h4" fontWeight="bold">
          Father
        </Typography>

        <Divider
          // color="#000"
          variant="fullwidth"
          sx={{
            // my: 1,
            border: "1px solid rgba(0,0,0,0.4)",
            width: "100%",
          }}
        />
        <ProfileImage src="/assets/studentMale.png" />
        <Typography variant="h3" fontWeight="bolder">
          HARI DUTTA BASUMATARY
        </Typography>
        <Typography variant="h4" fontWeight="bold" color="#7b2cbf">
          Service
        </Typography>
        <Typography variant="h4" fontWeight="bold"  color="#7b2cbf" display="flex" alignItems="center">
          <Phone sx={{ mr: "5px" }} fontSize="14px" />
          6002957667{" "}
        </Typography>
        <Typography variant="h4" fontWeight="bold"  color="#7b2cbf" display="flex" alignItems="center">
          <Email sx={{ mr: "5px" }} fontSize="14px" />
          6002957667{" "}
        </Typography>
        <Notifications />
      </Component>
      <Component>
        <Typography variant="h4" fontWeight="bold">
          Father
        </Typography>

        <Divider
          // color="#000"
          variant="fullwidth"
          sx={{
            // my: 1,
            border: "1px solid rgba(0,0,0,0.4)",
            width: "100%",
          }}
        />
        <ProfileImage src="/assets/studentMale.png" />
        <Typography variant="h3" fontWeight="bolder">
          HARI DUTTA BASUMATARY
        </Typography>
        <Typography variant="h4" fontWeight="bold" color="#7b2cbf">
          Service
        </Typography>
        <Typography variant="h4" fontWeight="bold"  color="#7b2cbf" display="flex" alignItems="center">
          <Phone sx={{ mr: "5px" }} fontSize="14px" />
          6002957667{" "}
        </Typography>
        <Typography variant="h4" fontWeight="bold"  color="#7b2cbf" display="flex" alignItems="center">
          <Email sx={{ mr: "5px" }} fontSize="14px" />
          6002957667{" "}
        </Typography>
        <Notifications />
      </Component>
      
    </LeftComponentDiv>
  );
};

export default LeftComponent;
