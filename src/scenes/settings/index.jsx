import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Sidebar from "../global/Sidebar";
import StatusBar from "../global/StatusBar";
import { Outlet } from 'react-router-dom';

function SetSettings() {
  return (
    <>
      <StatusBar/>
    <br />

    <Box display="flex"  >
      <Sidebar/>

      <Outlet/>
    
      
    </Box>

    </>
  )
}

export default SetSettings