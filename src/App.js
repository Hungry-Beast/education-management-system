import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Form from "./scenes/form";
import FAQ from "./scenes/faq";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Login from "./scenes/login/Login";

import OrgProfile from "./scenes/OrgProfile/OrgProfile";
import AdminLayout from "./AdminLayout";
import SetSettings from "./scenes/settings";
import AcademicStructure from "./settingcomponents/academicstructure";
import EmailTemplates from "./settingcomponents/emailtemplates";
import ModulesLayout from "./ModulesLayout";
import Academic from "./scenes/modules/academic/academic/academic-configuration/Academic";
// import Dprofile from "./scenes/detailProfile/Dprofile";
import ModulesOnOff from "./settingcomponents/modulesonoff";
import Holidays from "./settingcomponents/holidays";

import Changepassword from "./scenes/changepassword/Changepassword";
import SubCategory from "./scenes/modules/academic/academic/academic-configuration/Sections/Subject/SubCategory";
import NotificationTemplate from "./settingcomponents/notificationtemplate";
import TermsConditions from "./settingcomponents/termsconditions";
import TermsDisplayPage from "./settingcomponents/termsconditions/TermsDisplayPage";
import Health from "./detailscomponents/health/index";
import EmptyTableMessage from "./settingcomponents/emptytablemessage";
import SmsModule from "./settingcomponents/smsmodule";
import WeeklyOff from "./settingcomponents/weeklyoff";
import LeaveSetting from "./settingcomponents/leavesetting";
import MyDetails from "./scenes/details";
import Home from "./detailscomponents/home";
import Profile from "./detailscomponents/profile";
import IntimeOuttime from "./settingcomponents/intimeouttime";
import ClassTeacherMapping from "./scenes/modules/academic/academic/class-teacher-mapping/ClassTeacherMapping";
import ClassSchedule from "./scenes/modules/academic/class-schedule/class-schedule/ClassSchedule";
// import OrgProfile from "./settingcomponents/OrgProfile/OrgProfile";
//>>>>>>> b63988d5e5c115f3840ce513fec25967cdd5c832

function App() {
  const [theme, colorMode] = useMode();

  return (
    // <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/team" element={<Team />} />
          <Route path="/admin/contacts" element={<Contacts />} />
          <Route path="/admin/invoices" element={<Invoices />} />
          {/* <Route path="/admin/orgProfile" element={<OrgProfile />} /> */}
          <Route path="/admin/faq" element={<FAQ />} />
          <Route path="/admin/calendar" element={<Calendar />} />
          <Route path="/admin/form" element={<Form />} />

          <Route path="/admin/settings" element={<SetSettings />}>
            <Route path="orgProfile" element={<OrgProfile />} />
            <Route path="acc-structure" element={<AcademicStructure />} />
            <Route path="set-email-template" element={<EmailTemplates />} />
            <Route path="set-modules" element={<ModulesOnOff />} />
            <Route path="holidays" element={<Holidays />} />
            <Route
              path="notification-template"
              element={<NotificationTemplate />}
            />
            <Route path="terms-conditions" element={<TermsConditions />} />
            <Route path="empty-table-message" element={<EmptyTableMessage />} />
            <Route path="sms-module" element={<SmsModule />} />
            <Route path="weekly-off" element={<WeeklyOff />} />
            <Route path="leave-setting" element={<LeaveSetting />} />
            <Route path="intime-outtime" element={<IntimeOuttime />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/school-terms" element={<TermsDisplayPage />} />{" "}
        {/*Route to Display the terms and conditions */}
        <Route element={<ModulesLayout />}>
          <Route path="/modules/academic" element={<Academic />} />
          <Route
            path="/modules/academic/subject-category"
            element={<SubCategory />}
          />
          <Route
            path="/modules/academic/class-teacher-mapping"
            element={<ClassTeacherMapping />}
          />
          <Route
            path="/modules/academic/class-schedule"
            element={<ClassSchedule />}
          />
        </Route>
        {/* <Route path="/profile" element={<Dprofile/>} /> */}
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route element={<MyDetails />}>
          <Route path="/profile/staff-home" element={<Home />} />
          <Route path="/profile/staff-profile" element={<Profile />} />
        </Route>
        <Route path="/profile/staff-health-record" element={<Health />} />
      </Routes>
    </ThemeProvider>
    // </ColorModeContext.Provider>
  );
}

export default App;
