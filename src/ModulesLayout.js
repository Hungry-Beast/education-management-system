import React, { useState } from "react";
import Sidebar from "./scenes/global/Sidebar";
import Topbar from "./scenes/global/Topbar";
import { Outlet } from "react-router-dom";
import StatusBar from "./scenes/global/StatusBar";
import styled from "styled-components";
import { tokens } from "./theme";
import { useEffect } from "react";
import { ImageContext } from "./context/Context";

const colors = tokens("light");
const Container = styled.div`
  background-color: ${colors.yellowAccent[100]};
`;
const ModulesLayout = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(true);
  const [context, setContext] = useState("academic.png");

  return (
      <Container className="app"> 
        <main className="content">
          <Topbar setIsSidebar={setIsSidebar} />
          <StatusBar />
          <Outlet />
        </main>
      </Container>
  );
};

export default ModulesLayout;
