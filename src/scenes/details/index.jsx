import React from "react";
import StatusBar from "../global/StatusBar";
import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import styled from "styled-components";
import Topbar from "../global/Topbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";



const Container = styled.div`
  padding: 16px;
  margin: 0 auto;
  width: calc(100% - 30px);
  background-color: #d8e4ec86;
  border-radius: 10px;
`;

const PictureDiv = styled.div`
  padding: 10px 5px;
  width: 25%;
  background-color: #ffffff;
  height: 330px;
`;

const ImageCont = styled.div`
  width: 200px;
  height: 210px;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
`;

const TabCont = styled.div`
  /* background-color: white;
  margin-bottom:20px; */
  width: 100%;
  /* border-radius: 0.8rem; */
  max-width: 600px;
  margin: 0 auto;
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hclassden={value !== index}
      class={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function MyDetails() {
  const location = useLocation();
  const pathValue=location.pathname.split('/').at(-1);
  console.log(pathValue)
  const [value, setValue] = React.useState(pathValue);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue == "staff-home") navigate("/profile/staff-home");
    if (newValue == "staff-profile") navigate("/profile/staff-profile");
    if (newValue == "staff-health") navigate("/profile/staff-health");
    if (newValue == "staff-myleaves") navigate("/profile/staff-myleaves");
   
    if (newValue == "staff-subjectMapping") navigate("/profile/staff-subjectMapping");
    if (newValue == "staff-advance") navigate("/profile/staff-advance");
  };

  return (
    <>
      <Topbar />
      <StatusBar />
      <br />
      <Container>
        <Box sx={{ width: "100%", display: "flex", gap: "30px" }}>
          <PictureDiv>
            <ImageCont>
              <Image src="/assets/womenProfile.jpeg" />
            </ImageCont>

            <Typography variant="h3" sx={{ textAlign: "center", mt: "15px" }}>
              SULEKHA PANDIT
            </Typography>
            <Typography sx={{ textAlign: "center" }}>Unique ID 3943</Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <NotificationsNoneIcon sx={{ fontSize: "26px" }} />
            </Box>
          </PictureDiv>

          <Box style={{ width: "100%" }}>
            <TabCont>
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1 }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab label="Home" value={"staff-home"} />
                    <Tab label="Profile" value={"staff-profile"} />
                    <Tab label="Health Record" value={"staff-health"} />
                    <Tab label="Subject Mapping" value={"staff-subjectMapping"} />
                    <Tab label="Fees & Invoices" value={"staff-fee"} />
                    <Tab label="My Leaves" value={"staff-leave"} />
                    <Tab label="Advance Payment" value={"staff-advance"} />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}></TabPanel>
                <TabPanel value={value} index={1}></TabPanel>
                <TabPanel value={value} index={2}></TabPanel>
                <TabPanel value={value} index={3}></TabPanel>
                <TabPanel value={value} index={4}></TabPanel>
                <TabPanel value={value} index={5}></TabPanel>
                <TabPanel value={value} index={6}></TabPanel>
              </Box>
            </TabCont>

            <Outlet />
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default MyDetails;
