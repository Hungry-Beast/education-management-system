import { ChevronRight, NavigateNext } from "@mui/icons-material";
import { Breadcrumbs, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { ImageContext } from "../../context/Context";

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
  a{
    text-decoration: none;
    color: #000;
    &:hover{
      text-decoration: underline;
    }

  }
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
  const [context, setContext] = useContext(ImageContext);
  const location = useLocation();
  const { pathname } = location;

  const title = getTitle(pathname);
  const imgTitle = getCamelCase(title);
  const pathnames = location.pathname.split('/').filter(x => x);
  const Breadcrumb = () => {
    const splitPath = pathname.split("/");
    let path = "";
    const breadcrumb = splitPath.map((pathEle) => {
      if (pathEle.charAt(0) === " ") {
        path += pathEle.slice(1) + "/";
      } else {
        path += pathEle + "/";
      }
      return (
        <Link to={path}>
          {" "}
          <Typography variant="h5">{pathEle}</Typography>
        </Link>
      );
    });
    return breadcrumb;
  };

  return (
    <Container>
      <LeftContainer>
        <LeftIconContainer src={`/assets/${context}`} />
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
        <Breadcrumbs
          separator={<NavigateNext fontSize="small" />}
          aria-label="breadcrumb"
        >
            <Link color="inherit" to="/">
              Home
            </Link>
            {pathnames.map((value, index) => {
              const last = index === pathnames.length - 1;
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;

              return last ? (
                <Typography color="textPrimary" key={to}>
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </Typography>
              ) : (
                <Link color="inherit" to={to} key={to}>
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </Link>
              );
            })}
        </Breadcrumbs>
        {/* Home */}
        {/* {pathname &&
            pathname.split("/").map((path) => {
              return path ? (
                <Link to={`/${path}`}>
                  {path.charAt(0).toUpperCase() + path.slice(1)}
                </Link>
              ) : (
                <></>
              );
            })} */}
      </RightContainer>
    </Container>
  );
};

export default StatusBar;
