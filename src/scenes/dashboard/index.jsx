import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import ProgressCircle from "../../components/ProgressCircle";
import { useState } from "react";
import BasicTable from "./EventTable";
import PersonIcon from '@mui/icons-material/Person';
import StaticsticsComponent from "../modules/academic/attendence/attendence-dashboard/StaticsticsComponent";
import styled from "styled-components";
import DatePickerComp from "./DatePickerComp";


const Component = styled.div`
  width: calc(100% - 30px);
  height: max-content;
  padding: 16px;
  background-color: #fff;
  margin: 15px auto;
  border-radius: 10px;
`;

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isMenu, setIsMenu] = useState(false)

  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };


  return (
    <Box m="20px" pb="30px" >
      {/* HEADER */}
      <Box display="flex" justifyContent="center" alignItems="center" sx={{mb: "25px"}} >
        <PersonIcon sx={{fontSize: "30px", mb: "6px", color: "blue"}} />
        <Typography sx={{fontWeight: "600"}} variant="h3" color="blue" > "Hello SULEKHA PANDIT , Welcome back to Infotute EMS"</Typography>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        
        {/* Row 1 */}
        <Box gridColumn="span 12" gridRow="span 2" >
          <StaticsticsComponent />
        </Box>

        
        {/* ROW 2 */}
        <Box
          gridColumn="span 12"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
        >
          <Box sx={{ px:"30px", mt: "10px" ,display: "flex", alignItems: "center", justifyContent: "space-between"}} >
            <Box>
                <Typography my="5px" variant="h4" fontWeight="600" color={colors.grey[100]}>
                  School Calender
                </Typography>
            </Box>

            <DatePickerComp/>

            <Box></Box>
          </Box>

          <Box mt="25px" p="0 30px">
            <Box  >
              <BasicTable/>
            </Box>
          </Box>
        </Box>


        {/* ROW 3 */}
        <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            mt="25px"
            p="0 30px"
          >
            <Box>
              <Typography
                my="25px"
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Daily Bulletin
              </Typography>

            </Box>

          </Box>

        </Box>



        {/* ROW 4 */}
        <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            mt="25px"
            p="0 30px"
          >
            <Box>
              <Typography
                my="25px"
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Live Attendance 
              </Typography>

            </Box>
            {/* <Box sx={{ width: 1 }} >
              <BasicTable/>
            </Box> */}
          </Box>

        </Box>



        {/* ROW 5 */}
        <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            mt="25px"
            p="0 30px"
          >
            <Box>
              <Typography
                my="25px"
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Live Finance Data
              </Typography>

            </Box>
            {/* <Box sx={{ width: 1 }} >
              <BasicTable/>
            </Box> */}
          </Box>
        </Box>



        


        {/* LOWER LEVEL ROWS */}
        <Box
          gridColumn="span 3"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          
        >
          <Typography variant="h5" fontWeight="600">
            Library
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              Total Books
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>

        <Box
          gridColumn="span 5"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Approvals
          </Typography>
          {/* <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box> */}
        </Box>


        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          
        >
          <Typography variant="h5" fontWeight="600">
            Finance
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              Amount To Be Received
            </Typography>
            
          </Box>
        </Box>

      </Box>
    </Box>
  );
};

export default Dashboard;