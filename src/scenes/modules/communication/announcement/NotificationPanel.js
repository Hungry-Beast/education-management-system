import React, { useContext, useEffect } from 'react'
import styled from 'styled-components';
import { ImageContext } from '../../../../context/Context';



const Component = styled.div`
  width: calc(100% - 30px);
  height: 100%;
  padding: 16px;
  background-color: #fff;
  margin: 15px auto;
  border-radius: 10px;
`;




export const NotificationPanel = () => {
    const [context, setContext] = useContext(ImageContext);
  useEffect(() => {
    setContext("notification.svg");
  }, []);


  return (
    <Component>NotificationPanelhjgjhg</Component>
  )
}
