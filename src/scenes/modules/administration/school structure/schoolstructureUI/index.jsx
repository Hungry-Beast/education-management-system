import {useState} from 'react'
import { Box,Modal, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import styled from "styled-components";
import HouseIcon from '@mui/icons-material/House';

const Component = styled.div`
  width: calc(100% - 30px);
  height: 100%;
  padding: 16px;
  background-color: #fff;
  margin: 15px auto;
  border-radius:10px;
`;

function SchoolStructureUI() {

  return (
    <Component>
      <Box sx={{ width: '100%', display: "flex", gap: "15px"}}>
        <Box sx={{width: "25%", display: "flex", justifyContent: "center", alignItems: "flex-end", borderBottom: "3px solid #2ba7d8", borderRadius: "20px" }} >

          <Box sx={{ width:"50%", maxWidth: "150px", mx: "auto", textAlign: "center" }} >
            <Box sx={{ mx: "auto" , mt: "50%", mb: "20px", width: "55px", height: "55px", bgcolor: '#f8f5cf', display: "flex", justifyContent: 'center', alignItems: "center", borderRadius: "100%"}} >
              <HouseIcon sx={{fontSize: "22px", color: "#dcb402"}} />
            </Box>

            <Typography >Administrative</Typography>
            
            <Box sx={{display: "flex", justifyContent: "space-between", mt: "18px", mb: "18px"}} >
              <Typography sx={{}} >100</Typography>
              <Typography>50</Typography>
              <Typography>50</Typography>
            </Box>

              <Button sx={{borderRadius: '50px', bgcolor: "#3c2bd8", py: "10px", mb: "15px", px: "25px"}} variant='contained' >View</Button>
            
          </Box>
        </Box>
        <Box sx={{width: "25%", display: "flex", justifyContent: "center", alignItems: "flex-end", borderBottom: "3px solid #2ba7d8", borderRadius: "20px" }} >

          <Box sx={{ width:"50%", maxWidth: "150px", mx: "auto", textAlign: "center" }} >
            <Box sx={{ mx: "auto" , mt: "50%", mb: "20px", width: "55px", height: "55px", bgcolor: '#f8f5cf', display: "flex", justifyContent: 'center', alignItems: "center", borderRadius: "100%"}} >
              <HouseIcon sx={{fontSize: "22px", color: "#dc9b02"}} />
            </Box>

            <Typography >Administrative</Typography>
            
            <Box sx={{display: "flex", justifyContent: "space-between", mt: "18px", mb: "18px"}} >
              <Typography >100</Typography>
              <Typography>50</Typography>
              <Typography>50</Typography>
            </Box>

              <Button sx={{borderRadius: '50px', bgcolor: "#3c2bd8", py: "10px", mb: "15px", px: "25px"}} variant='contained' >View</Button>
            
          </Box>
        </Box>
        <Box sx={{width: "25%", display: "flex", justifyContent: "center", alignItems: "flex-end", borderBottom: "3px solid #2ba7d8", borderRadius: "20px" }} >

          <Box sx={{ width:"50%", maxWidth: "150px", mx: "auto", textAlign: "center" }} >
            <Box sx={{ mx: "auto" , mt: "50%", mb: "20px", width: "55px", height: "55px", bgcolor: '#f8f5cf', display: "flex", justifyContent: 'center', alignItems: "center", borderRadius: "100%"}} >
              <HouseIcon sx={{fontSize: "22px", color: "#dc9b02"}} />
            </Box>

            <Typography >Administrative</Typography>
            
            <Box sx={{display: "flex", justifyContent: "space-between", mt: "18px", mb: "18px"}} >
              <Typography sx={{}} >100</Typography>
              <Typography>50</Typography>
              <Typography>50</Typography>
            </Box>

              <Button sx={{borderRadius: '50px', bgcolor: "#3c2bd8", py: "10px", mb: "15px", px: "25px"}} variant='contained' >View</Button>
            
          </Box>
        </Box>
        

      </Box>
    </Component>


     
  )
}

export default SchoolStructureUI







{/* <Box sx={{ width: '100%', display: "flex"}}>
        <Box sx={{bgcolor: "red", width: "25%", height: "auto" }} >
          <Box  sx={{height: "50%" }} ></Box> 

          <Box sx={{ width:"50%", mx: "auto" , bgcolor: "yellow", height: "auto" }} >
            <Box sx={{ mx: "auto" , width: "80px", height: "80px", bgcolor: '#faf6c5', display: "flex", justifyContent: 'center', alignItems: "center", borderRadius: "100%"}} >
              <HouseIcon sx={{fontSize: "40px", color: "#dcb402"}} />
            </Box>
            
            <Box sx={{display: "flex", justifyContent: "space-between"}} >
              <Typography sx={{}} >100</Typography>
              <Typography>50</Typography>
              <Typography>50</Typography>
            </Box>

            <Button>View</Button>
            </Box>
        </Box>
        <Box sx={{bgcolor: "blue" , width: "25%"}} >

            <Box sx={{width: "80px", height: "80px", bgcolor: 'aqua', display: "flex", justifyContent: 'center', alignItems: "center", borderRadius: "100%"}} >
              <HouseIcon sx={{fontSize: "40px", color: "yellow"}} />
            </Box>
            
            <Box>
              <Typography>100</Typography>
              <Typography>50</Typography>
              <Typography>50</Typography>
            </Box>

            <Button>View</Button>

        </Box>
        <Box sx={{bgcolor: "yellow" , width: "25%"}} >

            <Box sx={{width: "70px", height: "70px", bgcolor: 'aqua', display: "flex", justifyContent: 'center', alignItems: "center", borderRadius: "100%"}} >
              <HouseIcon sx={{fontSize: "40px"}} />
            </Box>
            
            <Box>
              <Typography>100</Typography>
              <Typography>50</Typography>
              <Typography>50</Typography>
            </Box>

            <Button>View</Button>

        </Box>

      </Box>
    </Component> */}