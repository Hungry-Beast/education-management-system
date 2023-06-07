import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Sidebar from "../global/Sidebar";
import { Outlet } from 'react-router-dom';

function SetModules() {
  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{bgcolor: "#FFA800", px: '20px'}} >
        <Box display="flex" justifyContent="space-between" alignItems="center" >
          <Box component="img" sx={{height: 70}} alt="placeholder" src="/logo192.png" />
          
          <Box>
            <Typography variant="h3"  py={'5px'}>Modules On/Off</Typography>
            <Typography color={'white'} variant="p" >INFOTUTE | School Management System</Typography>
          </Box>
        </Box>

        <Box>
          <Typography> Home - Setting - Modules ajncsind </Typography>
        </Box>
      </Box>

    <br />


    <Box display="flex"  >

      <Sidebar/>


      <Outlet/>
    </Box>



    </>


  )
}

export default SetModules