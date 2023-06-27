import { Box} from '@mui/material'
import React from 'react'
import Sidebar from "../global/Sidebar";
import StatusBar from "../global/StatusBar";
import { Outlet } from 'react-router-dom';
import Topbar from '../global/Topbar';

function SetSettings() {
  return (
    <>

      <Topbar/>

      <StatusBar/>
    <br />

    <Box sx={{display: "flex", width :"100%"}}  >
      <div style={{width: "26%"}} >
          <Sidebar sx={{width: "100%"}} />
      </div>

      <div style={{ width: "74%", marginRight: "18px"}} >
        <Outlet/>
      </div>

    </Box>

    </>
  )
}

export default SetSettings