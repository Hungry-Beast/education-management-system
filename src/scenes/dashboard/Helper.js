import React from 'react'
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function OnlineHelper({name, position}) {
  return (
    <Box sx={{px: "30px", mb: '15px'  ,display: "flex", justifyContent: "space-between", alignItems: "center"}} >
      <Box component="img" sx={{ height: "45px", width: "45px", borderRadius: "100%" }} alt="Logo"
        src="/assets/Profilepic.jpg"
      />

      <Box sx={{ml:"-10px", width: "50%"}} >
          <Typography>{name}</Typography>
          <Typography sx={{ml:"2px"}} >{position}</Typography>
      </Box>

      <Box>
        <LaptopMacIcon sx={{ fontSize: "17px", mx: "5px" }} />
        <FiberManualRecordIcon sx={{ fontSize: "17px", mx: "5px", color: "green" }} />
        
      </Box>
  </Box>
  )
}


function BirthdayHelper({name, position}) {
  return (
    <Box sx={{px: "30px", mb: '15px'  ,display: "flex", justifyContent: "space-between", alignItems: "center"}} >
      <Box component="img" sx={{ height: "45px", width: "45px", borderRadius: "100%" }} alt="Logo"
        src="/assets/Profilepic.jpg"
      />

      <Box sx={{ml:"-20px", width: "50%"}} >
          <Typography>{name}</Typography>
          <Typography sx={{ml:"2px"}} >{position}</Typography>
      </Box>

      <Box>
      <Box component="img" sx={{ height: "45px", width: "45px" }} alt="Logo"
        src="/assets/birthday.jpg"
      />
        
      </Box>
  </Box>
  )
}

export { OnlineHelper, BirthdayHelper };