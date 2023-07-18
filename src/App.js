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
// import Health from "./detailscomponents/health/index";
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
import ClassTimeTable from "./scenes/modules/academic/class-schedule/class-time-table/ClassTimeTable";
import Health from "./detailscomponents/health";
import Subject from "./detailscomponents/subjectMapping";
import StudentSettings from "./scenes/modules/academic/attendence/student-setting/StudentSettings";
import { ImageContext } from "./context/Context";
import StudentAttendence from "./scenes/modules/academic/attendence/student-attendence/StudentAttendence";
import AttendenceDashboard from "./scenes/modules/academic/attendence/attendence-dashboard/AttendenceDashboard";
import Training from "./scenes/modules/others/training_and_placement/training/Training";

import LMS from "./scenes/modules/academic/lms/LMS";
import LMSLink from "./scenes/modules/academic/lms/LMS";
import SectionLinkId from "./scenes/modules/academic/lms/SectionLinkId";
import AssessmentAndGrade from "./scenes/modules/academic/grade-setup/assessment-and-grade/AssessmentAndGrade";
import AssessmentLink from "./scenes/modules/academic/grade-setup/assessment-and-grade/Sections/Assessment/assessment-link/AssessmentLink";
import SectionGradeBook from "./scenes/modules/academic/grade-setup/section-grade-book/SectionGradeBook";
import PromotionGraduation from "./scenes/modules/academic/promotion-graduation/PromotionGraduation";
import Student from "./scenes/modules/user/student/enrollment-record/Student";
import CategoryLocation from "./scenes/modules/administration/asset/categorylocation";
import Vendor from "./scenes/modules/administration/asset/vendor";
import Assets from "./scenes/modules/administration/asset/assets";
import AssetPurchase from "./scenes/modules/administration/asset/assetpurchase/AssetPurchase";
import SchoolStructure from "./scenes/modules/administration/school structure/schoolstructure";
import SchoolStructureUI from "./scenes/modules/administration/school structure/schoolstructureUI";
import TeacherSetting from "./scenes/modules/administration/teacher attendance/teachersetting";
import Myleaves from "./detailscomponents/myleaves";

import RolesPermissions from "./scenes/roles&permision/roles-permision";
import Advance from "./detailscomponents/advance/index";
import ChangeAcademic from "./scenes/changeacademic/change-academic";
import StaffAttendance from "./scenes/modules/administration/teacher attendance/staffattendance";
import ManageVisitors from "./scenes/modules/administration/visitor/managevisitors";
import Postal from "./scenes/modules/administration/visitor/postal";
import Enquiry from "./scenes/modules/administration/visitor/enquiry";
import { Notice } from "./scenes/modules/communication/noticeboard/Notice";
import StudentProfile from "./scenes/modules/user/student/enrollment-record/student-profile/StudentProfile";

import Announcement from "./scenes/modules/communication/announcement/Announcement";
import FormBuilder from "./scenes/modules/user/preadmission/formbuilder/FormBuilder";
import ManageEvent from "./scenes/modules/communication/manageevent";
import FormPreview from "./scenes/modules/user/preadmission/formpreviewer/FormBuilder";
// import  NotificationPanel  from "./scenes/modules/communication/announcement/Announcement";
// import OrgProfile from "./settingcomponents/OrgProfile/OrgProfile";
//>>>>>>> b63988d5e5c115f3840ce513fec25967cdd5c832

function App() {
  const [theme, colorMode] = useMode();
  const [context, setContext] = useState("");

  return (
    // <ColorModeContext.Provider value={colorMode}>
    <ImageContext.Provider value={[context, setContext]}>
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
            <Route path="/school-terms" element={<TermsDisplayPage />} />{" "}
            {/*Route to Display the terms and conditions */}
          </Route>
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
            <Route
              path="/modules/academic/class-time-table"
              element={<ClassTimeTable />}
            />
            <Route
              path="/modules/academic/attendence-status-settings"
              element={<StudentSettings />}
            />
            <Route
              path="/modules/academic/student-attendence"
              element={<StudentAttendence />}
            />
            <Route
              path="/modules/academic/attendence-dashboard"
              element={<AttendenceDashboard />}
            />
            <Route
              path="/modules/administration/location-category"
              element={<CategoryLocation />}
            />
            <Route path="/modules/administration/vendor" element={<Vendor />} />
            <Route path="/modules/administration/assets" element={<Assets />} />
            <Route
              path="/modules/administration/asset-purchase"
              element={<AssetPurchase />}
            />
            <Route
              path="/modules/administration/school-structure"
              element={<SchoolStructure />}
            />
            <Route
              path="/modules/administration/school-structure-blocks"
              element={<SchoolStructureUI />}
            />
            <Route
              path="/modules/administration/attendance-status/teacher"
              element={<TeacherSetting />}
            />
            {/* <Route path="/modules/communication/announcement/notification-panel" element={<NotificationPanel/>} />  */}
            <Route
              path="/modules/communication/noticeboard/notice-board"
              element={<Notice />}
            />
            <Route
              path="/modules/administration/attendance-manage-staff"
              element={<StaffAttendance />}
            />
            <Route
              path="/modules/administration/manage-visitor"
              element={<ManageVisitors />}
            />
            <Route
              path="/modules/administration/manage-postal"
              element={<Postal />}
            />
            <Route
              path="/modules/administration/manage-enquiry"
              element={<Enquiry />}
            />
            <Route
              path="/modules/administration/location-category"
              element={<CategoryLocation />}
            />
            <Route path="/modules/administration/vendor" element={<Vendor />} />
            <Route path="/modules/administration/assets" element={<Assets />} />
            <Route
              path="/modules/administration/asset-purchase"
              element={<AssetPurchase />}
            />
            <Route
              path="/modules/administration/school-structure"
              element={<SchoolStructure />}
            />
            <Route
              path="/modules/administration/school-structure-blocks"
              element={<SchoolStructureUI />}
            />
            <Route
              path="/modules/administration/attendance-status/teacher"
              element={<TeacherSetting />}
            />
            <Route
              path="/modules/communication/announcement/notification-panel"
              element={<Announcement />}
            />
            <Route path="/modules/events" element={<ManageEvent />} />
            <Route
              path="/modules/administration/attendance-manage-staff"
              element={<StaffAttendance />}
            />
            <Route
              path="/modules/administration/manage-visitor"
              element={<ManageVisitors />}
            />
            <Route
              path="/modules/administration/manage-postal"
              element={<Postal />}
            />
            <Route
              path="/modules/administration/manage-enquiry"
              element={<Enquiry />}
            />

            <Route
              path="/modules/academic/learning-management-system/link"
              element={<LMSLink />}
            />
            <Route
              path="/modules/academic/learning-management-system/link/:id"
              element={<SectionLinkId />}
            />
            <Route
              path="/modules/academic/assessment-and-grade"
              element={<AssessmentAndGrade />}
            />
            <Route
              path="/modules/academic/assessment-and-grade/assessment/:link"
              element={<AssessmentLink />}
            />
            <Route
              path="/modules/academic/section-grade-book"
              element={<SectionGradeBook />}
            />
            <Route
              path="/modules/academic/promotion-and-graduation"
              element={<PromotionGraduation />}
            />

            <Route path="/modules/users/students" element={<Student />} />
            <Route
              path="/modules/users/students/:id"
              element={<StudentProfile />}
            />
            <Route
              path="/modules/users/preadmission/formbuilder"
              element={<FormBuilder />}
            />

            <Route
              path="/modules/administration/location-category"
              element={<CategoryLocation />}
            />
            <Route path="/modules/administration/vendor" element={<Vendor />} />
            <Route path="/modules/administration/assets" element={<Assets />} />
            <Route
              path="/modules/administration/asset-purchase"
              element={<AssetPurchase />}
            />
            <Route
              path="/modules/administration/school-structure"
              element={<SchoolStructure />}
            />
            <Route
              path="/modules/administration/school-structure-blocks"
              element={<SchoolStructureUI />}
            />
            <Route
              path="/modules/administration/attendance-status/teacher"
              element={<TeacherSetting />}
            />
            <Route
              path="/modules/communication/announcement/notification-panel"
              element={<Announcement />}
            />
            <Route
              path="/modules/communication/events/manage-event"
              element={<ManageEvent />}
            />
            <Route
              path="/modules/administration/attendance-manage-staff"
              element={<StaffAttendance />}
            />
            <Route
              path="/modules/administration/manage-visitor"
              element={<ManageVisitors />}
            />
            <Route
              path="/modules/administration/manage-postal"
              element={<Postal />}
            />
            <Route
              path="/modules/administration/manage-enquiry"
              element={<Enquiry />}
            />

            <Route path="/modules/announcement" element={<Announcement />} />
          </Route>
          {/* <Route path="/profile" element={<Dprofile/>} /> */}
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route element={<MyDetails />}>
            <Route path="/profile/staff-home" element={<Home />} />
            <Route path="/profile/staff-profile" element={<Profile />} />
            <Route path="/profile/staff-health" element={<Health />} />
          </Route>
          {/* <Route path="/profile/staff-health" element={ <Health/> } /> */}
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
          <Route path="/login" element={<Login />} />
          <Route path="/roles-permissions" element={<RolesPermissions />} />
          <Route path="/change-academic" element={<ChangeAcademic />} />
          <Route path="/change-password" element={<Changepassword />} />
          <Route path="/school-terms" element={<TermsDisplayPage />} />{" "}
          {/*Route to Display the terms and conditions */}
          {/* <Route path="/profile" element={<Dprofile/>} /> */}
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route element={<MyDetails />}>
            <Route path="/profile/staff-home" element={<Home />} />
            <Route path="/profile/staff-profile" element={<Profile />} />
            <Route path="/profile/staff-health-record" element={<Health />} />
            <Route path="/profile/staff-myleaves" element={<Myleaves />} />
            <Route path="/profile/staff-subjectMapping" element={<Subject />} />
            <Route path="/profile/staff-advance" element={<Advance />} />
          </Route>
          <Route path="/formpreview" element={<FormPreview />} />
          <Route path="/formpreview/:id" element={<FormPreview />} />
        </Routes>
      </ThemeProvider>
    </ImageContext.Provider>
  );
}

export default App;
