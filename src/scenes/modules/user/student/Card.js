import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Divider, IconButton, Typography } from "@mui/material";
import styled from "styled-components";
import { Delete, Key, MoreVert, Visibility } from "@mui/icons-material";

const CardComponent = styled.div`
  padding: 20px 30px;
  background-color: lightskyblue;
  border-radius: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 450px;
`;
const Upper = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: 1fr auto 1fr;
  /* justify-content: space-between; */
`;
const HalfComponentLeft = styled.div`
  display: flex;
  gap: 10px 10px;
  align-items: center;
`;
const ProfileImage = styled.img`
  width: 45%;
`;
const ORImage = styled.img`
  width: 40%;
`;

const HalfComponentRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
const BarCode = styled.img`
  margin: 10px 15px;
  width: 100%;
`;
const Lower = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px 35px;
  margin: 10px 0;
`;
const IconContainer = styled.div`
  display:flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  gap:0 5px;
`;
const Icon = styled.img`
  width:20px;
`;

const Card = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <CardComponent>
      <div style={{ alignSelf: "flex-end" }}>
        <IconButton
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ m: 0, p: 0 }}
        >
          <MoreVert style={{ color: "white" }} />
        </IconButton>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>
            {" "}
            <Key sx={{ mr: 1 }} /> Permission
          </MenuItem>
          <MenuItem onClick={handleClose}>
            {" "}
            <Delete sx={{ mr: 1 }} /> Delete
          </MenuItem>
        </Menu>
      </div>
      <Upper>
        <HalfComponentLeft>
          <ProfileImage src="/assets/maleStudent.png" />
          <ORImage src="/assets/QRDemo.png" />
        </HalfComponentLeft>
        <Divider orientation="vertical" flexItem color="#000" sx={{ mx: 1 }} />

        <HalfComponentRight>
          <Typography variant="h5" fontWeight="100" color="#000">
            Unique ID : 0196
          </Typography>
          <BarCode src="/assets/barCode.gif" />
          <Typography variant="h5" fontWeight="100" color="#000">
            Roll No : 04
          </Typography>
          <Button size="small" sx={{px:1,minWidth:"10px"}} variant="contained" color="error">
            TC
          </Button>
        </HalfComponentRight>
      </Upper>
      <Lower>
        <Typography variant="p" fontSize="14px" fontWeight="600" color="#000">
          BIBUNGSAR BASUMATRY
        </Typography>
        <IconContainer>
          {["/assets/badge.png", "/assets/badge(1).png","/assets/medal.png", "/assets/police-badge.png"].map((icon) => (
            <Icon src={icon} />
          ))}
          <Visibility/>
        </IconContainer>
        <Typography variant="p" fontSize="14px" fontWeight="600" color="#000">
          BIBUNGSAR BASUMATRY
        </Typography>
      </Lower>
    </CardComponent>
  );
};

export default Card;
