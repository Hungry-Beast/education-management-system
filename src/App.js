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
import OrgProfile from "./scenes/OrgProfile/OrgProfile";
import AdminLayout from "./AdminLayout";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<AdminLayout />}>
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/team" element={<Team />} />
            <Route path="/admin/contacts" element={<Contacts />} />
            <Route path="/admin/invoices" element={<Invoices />} />
            <Route path="/admin/orgProfile" element={<OrgProfile />} />
            <Route path="/admin/faq" element={<FAQ />} />
            <Route path="/admin/calender" element={<Calendar />} />
            <Route path="/admin/form" element={<Form />} />
          </Route>
          <Route path="/login" element={<></>} />
          
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
