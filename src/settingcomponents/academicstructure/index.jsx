import React from 'react'
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Box, Typography } from '@mui/material';


function AcademicStructure() {
  const [state, setState] = React.useState({
    department: true,
    course: false,
    specialization: true,
    subjectCredit: true
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };


  return (

    <Box sx={{lineHeight: "50px", width: "100%"}} >
       <FormControl  sx={{ width: "100%" ,mt: '20px'}}  component="fieldset" variant="standard">

        <Box display="flex" justifyContent="space-around" >
          <Typography sx={{lineHeight: "60px"}} >Module</Typography>
          <Typography sx={{ mr: '30px', lineHeight: "60px"}} >Action</Typography>
        </Box>

        <hr style={{ width:"80%", border: '1px solid black'}} />

        <FormGroup sx={{width: "100%"}} >
 
        <Box sx={{display: "flex", justifyContent: "space-around"}} >
          <Typography sx={{ lineHeight: "60px"}} >Department</Typography>
          <FormControlLabel
              control={
                <Switch checked={state.department} onChange={handleChange} name="department" />
              }
            />
        </Box>

        <hr style={{ width:"80%", border: '1/2px solid grey'}} />

        <Box sx={{display: "flex", justifyContent: "space-around"}}  >
          <Typography sx={{ lineHeight: "60px"}} >Course</Typography>
          <FormControlLabel
            control={
              <Switch checked={state.course} onChange={handleChange} name="course" />
            }
          />
        </Box>

        <hr style={{ width:"80%", border: '1/2px solid grey'}} />

        <Box sx={{display: "flex", justifyContent: "space-around"}} >
          <Typography sx={{ lineHeight: "60px"}} >Specialization</Typography>
          <FormControlLabel
            control={
              <Switch checked={state.specialization} onChange={handleChange} name="specialization" />
            }
          />
        </Box>

        <hr style={{ width:"80%", border: '1/2px solid grey'}} />

        <Box sx={{display: "flex", justifyContent: "space-around"}} >
          <Typography sx={{ lineHeight: "60px"}} >Course Credit</Typography>
          <FormControlLabel
            control={
              <Switch checked={state.subjectCredit} onChange={handleChange} name="subjectCredit" />
            }
          />
        </Box>

        <hr style={{ width:"80%", border: '1/2px solid grey'}} />

        </FormGroup>
      </FormControl>
    </Box>


  );
}

export default AcademicStructure


 