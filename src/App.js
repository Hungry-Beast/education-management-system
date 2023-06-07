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
<<<<<<< HEAD
import ModulesLayout from "./ModulesLayout";
import Academic from "./scenes/modules/academic/Academic";
=======
import Dprofile from "./scenes/detailProfile/Dprofile";
>>>>>>> 432a349056aa3c7ae8dad93d329917ab14899fc6

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
            <Route path="/admin/orgProfile" element={<OrgProfile />} />
            <Route path="/admin/faq" element={<FAQ />} />
            <Route path="/admin/calendar" element={<Calendar />} />
            <Route path="/admin/form" element={<Form />} />
          </Route>
          <Route path="/login" element={<Login/>} />
          <Route  element={<ModulesLayout/>} >
            <Route path="/modules/academic" element={<Academic />} />
          </Route>
          <Route path="/profile" element={<Dprofile/>} />
        </Routes>
      </ThemeProvider>
    // </ColorModeContext.Provider>
  );
}

export default App;
