import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';


const TabSystem = () => {

  const [state, setState] = React.useState({
    mon: true,
    tue: false,
    wed: false,
    thu: false,
    fri: false,
    sat: false,
    sun: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { mon, tue, wed, thu, fri, sat, sun } = state;


  return (
      <>
      <Box sx={{ width: "100%"}} >
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox checked={mon} onChange={handleChange} name="mon" />} label="Mon" 
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={tue} onChange={handleChange} name="tue" />} label="Tue"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={wed} onChange={handleChange} name="wed" />} label="Wed"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={thu} onChange={handleChange} name="thu" /> } label="Thu"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={fri} onChange={handleChange} name="fri" />} label="Fri"
                     />
                <FormControlLabel
                  control={
                    <Checkbox checked={sat} onChange={handleChange} name="sat" />} label="Sat"
                     />
                <FormControlLabel
                  control={
                    <Checkbox checked={sun} onChange={handleChange} name="sun" />} label="Sun"
                     />
              </FormGroup>
            
          </Box>
    </>
  );
};


const columns = [
  { field: 'id', headerName: 'Sl No', flex: 0 },
  { field: 'class', headerName: 'Class', flex: 1 },
  { field: 'code', headerName: 'Code', flex: 1 },
  { field: 'weeklyoff', headerName: 'Weekly Off', flex: 3, renderCell: (params) => (
    <TabSystem/>
  )}
];


const rows = [
  { id: '1'  ,class: 'BCA 1st sem', code: "bca1"},
  { id: '2' , class: 'BCA 2nd sem', code: "bca2" },
  { id: '3' ,class: 'BSC chem 1st', code: "che1"},
];


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


function WeeklyOff() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} >
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1 }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Teacher"  />
            <Tab label="Staff"  />
            <Tab label="Student"  />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
        <TabSystem/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TabSystem/>
        </TabPanel>
        <TabPanel value={value} index={2}>
            <div style={{ height: 400, width: '100%', marginTop: '40px' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5, 10]}
              />
            </div>
        </TabPanel>
      </Box>
    </Box>
  )
}

export default WeeklyOff