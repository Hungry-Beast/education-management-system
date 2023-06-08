import { Box, Typography } from '@mui/material';
import React from 'react'
import styled from "styled-components";
import EmailIcon from "@mui/icons-material/Email";

const allTemplates = [
  'Custom Email Templates', 
  'User Accounts',
  'Attendance Module',
  'Communication',
  'CRM Enroll & Forms',
  'Learning Management System',
  'Fee & Invoicing Module',
  'Health Records',
  'Fund Raising Module',
  'Old Pre-admission Module',
  'E-commerce Order Invoice'
]

const EmailTemplates = () => {
  return (
    <Box width={ '100%' } >
    {
      allTemplates.map( (template) => (
        <Box width={ '100%' } sx={{mb: '35px', px: '20px'}} >
          <Typography variant='h2' >{template}</Typography>
          <Box width={ '100%' } sx={{py: '20px'}} >
            <Box display="flex" justifyContent="space-between" >
              <Typography>Email Template</Typography>
              <Typography>From Email</Typography>
              <Typography>Last Modified</Typography>
              <Typography>Action</Typography>
            </Box>

            <hr style={{ width:"100%", border: '1px solid black'}} />

            <Box display="flex" justifyContent="space-between" >
              <Typography>Default</Typography>
              <Typography sx={{ ml: '60px' }} >Institute Email</Typography>
              <Typography>12-01-2017 03:48 AM</Typography>
              <EmailIcon sx={{  fontSize: "26px" }} />
            </Box>
          </Box>

        </Box>
      ) )
    }

      

    </Box>
  )
}

export default EmailTemplates