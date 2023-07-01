import React, { useContext, useEffect } from "react";
import { ImageContext } from "../../../../context/Context";
import { View } from "./View";

import styled from "styled-components";
import { Create } from "@mui/icons-material";
import NotificationTabs from "./NotificationTabs";

const Component = styled.div`
  width: calc(100% - 30px);
  height: 100%;
  padding: 16px;
  background-color: #fff;
  margin: 15px auto;
  border-radius: 10px;
`;

const NotificationPanel = () => {
  const [context, setContext] = useContext(ImageContext);
  useEffect(() => {
    setContext("studentEnrolledRecords.svg");
  }, []);
  return (
    <Component>
      <NotificationTabs />
    </Component>
  );
};

export default NotificationPanel;
