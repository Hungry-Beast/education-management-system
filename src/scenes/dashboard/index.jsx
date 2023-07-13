import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import ProgressCircle from "../../components/ProgressCircle";
import { useState } from "react";
import CalendarTable from "./CalendarTable";
import PersonIcon from '@mui/icons-material/Person';
import StaticsticsComponent from "../modules/academic/attendence/attendence-dashboard/StaticsticsComponent";
import styled from "styled-components";
import DatePickerComp from "./DatePickerComp";
import BulletinTable from "./BulletinTable";
import AttendanceTable from "./AttendanceTable";
import FinanceTable from "./FinanceTable";
import BasicDateCalendar from "./Calender";
import LibraryChart from "./PieChart";
import ApprovalTable from "./ApprovalTable";
import WeatherComp from "../../components/WeatherComp";
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { OnlineHelper } from "./Helper";

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
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="140px" gap="20px" >
        {/* Row 1 */}
        <Box gridColumn="span 9" gridRow="span 2" sx={{marginTop: "40px"}} >
          <StaticsticsComponent />
        </Box>

        <Box gridColumn="span 3" gridRow="span 2" sx={{bgcolor: "pink"}} >
            <Box>
              <Typography variant="h4" sx={{bgcolor: "#edf1f4", py: "18px", color: "#131313", pl: "30px"}}  >
                  Who's Online
              </Typography>
            </Box>
          <br/>
            <OnlineHelper name="SULEKHA PANDIT" position="Teacher" />
            <OnlineHelper name="RAKESH SHARMA" position="Staff" />
        </Box>

        
        {/* ROW 2 */}
        <Box gridColumn="span 9" gridRow="span 2" backgroundColor={colors.primary[400]} >
          <Box sx={{ px:"30px", mt: "5px" ,display: "flex", alignItems: "center", justifyContent: "space-between"}} >
            <Box>
                <Typography variant="h4" fontWeight="600" color={colors.grey[100]}>
                  School Calender
                </Typography>
            </Box>
            <DatePickerComp/>
            <Box></Box>
          </Box>

          <Box sx={{mt:"12px"}} >
              <CalendarTable/>
          </Box>
        </Box>

        <Box gridColumn="span 3" gridRow="span 2" sx={{bgcolor: "blue"}} >
          Birthday Card
        </Box>


        {/* ROW 3  Daily Bulletin */}
        <Box gridColumn="span 9" gridRow="span 2" backgroundColor={colors.primary[400]} >
          <Box sx={{ px:"30px", mt: "5px" ,display: "flex", alignItems: "center", justifyContent: "space-between"}} >
            <Box>
                <Typography my="5px" variant="h4" fontWeight="600" color={colors.grey[100]}>
                  Daily Bulletin
                </Typography>
            </Box>
            <DatePickerComp/>
            <Box></Box>
          </Box>

          <Box mt="12px">
              <BulletinTable />
          </Box>
        </Box>

        <Box gridColumn="span 3" gridRow="span 2" sx={{bgcolor: "brown"}} >
          <WeatherComp />
        </Box>


        {/* ROW 4  Live Attendance */}
        <Box gridColumn="span 9" gridRow="span 2" backgroundColor={colors.primary[400]} >
          <Box sx={{ px:"30px", mt: "5px"}} >
              <Typography  my="15px" variant="h4" fontWeight="600" color={colors.grey[100]}  >
                    Live Attendance
              </Typography>
          </Box>

          <Box mt="12px">
            <AttendanceTable/>
          </Box>
        </Box>

        {/* CALENDER HERE _-_-_-_-_- */}
        <Box gridColumn="span 3" gridRow="span 3" backgroundColor={colors.primary[400]} sx={{pt: "40px"}}>
          <BasicDateCalendar/>
        </Box>



        {/* ROW 5 Live Finance Data */}
        <Box gridColumn="span 9" gridRow="span 2" backgroundColor={colors.primary[400]} >
          <Box sx={{ px:"30px", mt: "5px"}} >
              <Typography  my="15px" variant="h4" fontWeight="600" color={colors.grey[100]}  >
                    Live Finance Data
              </Typography>
          </Box>

          <Box mt="12px">
            <FinanceTable/>
          </Box>
        </Box>



        {/* LOWER LEVEL ROWS */}

        <Box gridColumn="span 3" gridRow="span 3" backgroundColor={colors.primary[400]}>
          <Typography variant="h4" fontWeight="600" sx={{px: '20px', pt: "10px"}}>Finance</Typography>
          <LibraryChart />
        </Box>


        <Box gridColumn="span 6" gridRow="span 2" backgroundColor={colors.primary[400]}>
          <Typography variant="h4" fontWeight="600" sx={{ padding: "10px 20px 0 20px", mb:"10px" }}>Approvals</Typography>
          
          <Box>
            <ApprovalTable />
          </Box>
        </Box>

        <Box gridColumn="span 3" gridRow="span 2" backgroundColor={colors.primary[400]} >
          <Typography variant="h4" fontWeight="600" sx={{px: '20px', pt: "10px"}} > Library </Typography>
            <LibraryChart />
        </Box>

      </Box>
    </Box>
  );
};

export default Dashboard;