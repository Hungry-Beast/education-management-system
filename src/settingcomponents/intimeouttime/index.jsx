

import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Modal from '@mui/material/Modal';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';

const TabSystem = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));
  const [state, setState] = React.useState({
    mon: true,
    tue: false,
    wed: false,
    thu: false,
    fri: false,
    sat: false,
    sun: false,
  });
 const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));
  const handleChange = (event) => {

    setOpen(true)
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { mon, tue, wed, thu, fri, sat, sun } = state;
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 520,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

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

        <Modal
        open={open}
        onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['TimePicker', 'TimePicker']}>

              <TimePicker label="Controlled picker" value={value} onChange={(newValue) => setValue(newValue)}/>
              <TimePicker label="Controlled picker" value={value} onChange={(newValue) => setValue(newValue)}/>
              <TimePicker label="Controlled picker" value={value} onChange={(newValue) => setValue(newValue)}/>
              <TimePicker label="Controlled picker" value={value} onChange={(newValue) => setValue(newValue)}/>
            </DemoContainer>
          </LocalizationProvider>
        </Box>
      </Modal>
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

export default function IntimeOuttime() {
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
