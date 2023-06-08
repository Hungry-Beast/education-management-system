import React from 'react'
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
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

  console.log(state)

  return (

    <Box width={ '100%' }  sx={{lineHeight: "50px"}} >
       <FormControl  sx={{ mt: '20px'}}  component="fieldset" variant="standard">
        {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}

        <Box display="flex" justifyContent="space-between" >
          <Typography sx={{lineHeight: "60px"}} >Module</Typography>
          <Typography sx={{ mr: '30px', lineHeight: "60px"}} >Action</Typography>
        </Box>

        <hr style={{ width:"120%", border: '1px solid black'}} />

        <FormGroup>
 
        <Box display="flex" alignItems="center" gap={'400px' } justifyContent="center" >
          <Typography sx={{ mr: 'auto', lineHeight: "60px"}} >Department</Typography>
          <FormControlLabel
              control={
                <Switch checked={state.department} onChange={handleChange} name="department" />
              }
            />
        </Box>

        <hr style={{ width:"100%", border: '1px solid black'}} />

        <Box display="flex" alignItems="center" gap={'400px' } justifyContent="center" >
          <Typography sx={{ mr: 'auto', lineHeight: "60px"}} >Course</Typography>
          <FormControlLabel
            control={
              <Switch checked={state.course} onChange={handleChange} name="course" />
            }
          />
        </Box>

        <hr style={{ width:"100%", border: '1px solid black'}} />

        <Box display="flex" alignItems="center" gap={'400px' } justifyContent="center" >
          <Typography sx={{ mr: 'auto', lineHeight: "60px"}} >Specialization</Typography>
          <FormControlLabel
            control={
              <Switch checked={state.specialization} onChange={handleChange} name="specialization" />
            }
          />
        </Box>

        <hr style={{ width:"100%", border: '1px solid black'}} />
        <Box display="flex" alignItems="center" gap={'400px' } justifyContent="center" >
          <Typography sx={{ mr: 'auto', lineHeight: "60px"}} >Course Credit</Typography>
          <FormControlLabel
            control={
              <Switch checked={state.subjectCredit} onChange={handleChange} name="subjectCredit" />
            }
          />
        </Box>

        </FormGroup>
      </FormControl>
    </Box>


  );
}

export default AcademicStructure


 