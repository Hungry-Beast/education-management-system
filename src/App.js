import { useState } from "react";
import { Routes, Route } from "react-router-dom";
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
import Login from './scenes/login/Login'

import OrgProfile from "./scenes/OrgProfile/OrgProfile";
import AdminLayout from "./AdminLayout";
import SetSettings from "./scenes/settings";
import AcademicStructure from "./settingcomponents/academicstructure";
import EmailTemplates from "./settingcomponents/emailtemplates";
import ModulesLayout from "./ModulesLayout";
import Academic from "./scenes/modules/academic/Academic";
import Dprofile from "./scenes/detailProfile/Dprofile";
import ModulesOnOff from "./settingcomponents/modulesonoff";
import Holidays from "./settingcomponents/holidays";
import SubCategory from "./scenes/modules/academic/Sections/Subject/SubCategory";
import NotificationTemplate from "./settingcomponents/notificationtemplate";
import TermsConditions from "./settingcomponents/termsconditions";
import TermsDisplayPage from "./settingcomponents/termsconditions/TermsDisplayPage";
import EmptyTableMessage from "./settingcomponents/emptytablemessage";
import SmsModule from "./settingcomponents/smsmodule";
import WeeklyOff from "./settingcomponents/weeklyoff";

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
            
            <Route path="/admin/settings" element={<SetSettings />} >
              <Route path="orgProfile" element={<OrgProfile />} />
              <Route path="acc-structure" element={ <AcademicStructure/> } />
              <Route path="set-email-template" element={ <EmailTemplates/> } />
              <Route path="set-modules" element={ <ModulesOnOff/> } />
              <Route path="holidays" element={ <Holidays/>} />
              <Route path="notification-template" element={ <NotificationTemplate/> } />
              <Route path="terms-conditions" element={ <TermsConditions /> } />
              <Route path="empty-table-message" element={ <EmptyTableMessage /> } />
              <Route path="sms-module" element={ <SmsModule /> } />
              <Route path="weekly-off" element={ <WeeklyOff /> } />
            </Route>
          </Route>
          <Route path="/login" element={<Login/>} />
          <Route path="/school-terms" element={ <TermsDisplayPage/> } />    {/*Route to Display the terms and conditions */}
          <Route  element={<ModulesLayout/>} >
            <Route path="/modules/academic" element={<Academic />} />
            <Route path="/modules/academic/subject-category" element={<SubCategory />} />
          </Route>
          <Route path="/profile" element={<Dprofile/>} />
        </Routes>
      </ThemeProvider>
    // </ColorModeContext.Provider>
  );
}

export default App;
