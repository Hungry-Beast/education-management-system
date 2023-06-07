import { ChevronRight } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 16px;
  margin: 15px auto;
  width: calc(100% - 30px);
  /* max-width: 1200px; */
  background-color: #ffa800;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;

`;
const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;
const LeftIconContainer = styled.img`
    width: 60px;
    margin: 0 10px;
`;
const LeftTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: flex-start; */
    /* justify-content: space-around; */
`;
const RightContainer = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: flex-start; */
`;

const getTitle = (pathname) => {
  const splitPath = pathname.split("/");

  const words = splitPath[splitPath.length - 1].split("-");
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalizedWords.join(" ");
};
const getCamelCase = (title) => {
  const words = title.split(" ");
  const capitalizedWords = words.map((word, i) => {
    if (i == 0) return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join("");
};
const StatusBar = () => {
  const location = useLocation();
  const { pathname } = location;

  const title = getTitle(pathname);
  const imgTitle = getCamelCase(title);

  return (
    <Container>
      <LeftContainer>
        <LeftIconContainer src={`/assets/${imgTitle}.svg`} />
        <LeftTitleContainer>
          <Typography variant="h3" color="primary">
            {title}
          </Typography>
          <Typography variant="h6" color="white">
            INFOTUNE | School Management System
          </Typography>
        </LeftTitleContainer>
      </LeftContainer>
      <RightContainer>
        Home
        {pathname &&
          pathname.split("/").map((path) => {
            return path ? (
              <>
                <ChevronRight /> {path.charAt(0).toUpperCase() + path.slice(1)}
              </>
            ) : (
              <></>
            );
          })}
      </RightContainer>
    </Container>
  );
};

export default StatusBar;
