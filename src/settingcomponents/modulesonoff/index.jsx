import React from 'react'
import { Box, Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';

const allModules = [
  ' Teacher', 
  'Student',
  ' Staff',
  'Parent',
  'Attendance',
  'Health Records',
  ' Learning Management System',
  'Events',
  'Notices',
  'Fees & Invoicing',
  ' Library',
  'Academic',
  'Activities',
  'Asset',
  'Cafeteria',
  'Complain',
  'Examination',
  'Hostel',
  'HRMS',
  'ID Card',
  'Messaging',
  'Pre-Admission',
  ' Promotion & Graduation',
  'Report',
  ' School Structure',
  'Training & Placement',
  'Transport',
  'Visitor',
]

function ModulesOnOff() {

  const [state, setState] = React.useState({
    admin: true,
    teacher: false,
    student: false,
    parent: false,
    staff: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  const { admin, teacher, student, parent, staff } = state;

  return (
    <Box width={ '100%' } sx={{px: "18px", py: "18px", borderRadius: "10px", bgcolor: "#f2f0f0"}} >
      <Box sx={{display: "flex", justifyContent: "space-between"}} >
        <Typography>Modules</Typography>
        <Typography sx={{mr: "20%"}} >Applicable For</Typography>
      </Box>

      {
        allModules.map( (module) => (
          <>
          <Box sx={{display: 'flex', py: "20px"}} >

          <Box sx={{width: "70%"}} >
            <FormControlLabel control={<Switch defaultChecked />} label={`${module}`} />
            <Typography>Enable or disable Attendance Module globally or for individual user roles. Note that disabling Attendance module for individual profile users will not stop absent notifications to students or parents</Typography>
          </Box>
  
          <Box sx={{ width: "30%"}} >
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox checked={admin} onChange={handleChange} name="admin" />} label="Admin" 
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={teacher} onChange={handleChange} name="teacher" />} label="Teacher"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={student} onChange={handleChange} name="student" />} label="Student"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={parent} onChange={handleChange} name="parent" /> } label="Parent"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={staff} onChange={handleChange} name="staff" />} label="Staff" />
              </FormGroup>
            
          </Box>
          
        </Box>

        <hr style={{ width:"100%", border: '1px solid black'}} />

        </>
        ) )
      }

      
    </Box>
  )
}

export default ModulesOnOff