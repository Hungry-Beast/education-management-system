import React from 'react';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Sl No', flex: 1 },
  { field: 'name', headerName: 'Name', flex: 1 },
  { field: 'date', headerName: 'date', flex: 1 },
  { field: 'holidayfor', headerName: 'Holiday For', flex: 1},
  { field: 'day', headerName: 'Day(s)', flex: 1},
  { field: 'action', headerName: 'Action', flex: 1}
];

const rows = [
  { id: 1, name: 'Snow', date: '12-02-23', day: 35, holidayfor: 'student' },
  { id: 2, name: 'Lannister', date: '12-02-23', day: 42, holidayfor: 'student'  },
  { id: 3, name: 'Lannister', date: '12-02-23', day: 45, holidayfor: 'teacher' },
  { id: 4, name: 'Stark', date: '12-02-23', day: 16, holidayfor: 'student' },
  { id: 5, name: 'Targaryen', date: '12-02-23', day: null, holidayfor: 'student' },
  { id: 6, name: 'Melisandre', date: '12-02-23', day: 150, holidayfor: 'teacher' },
  { id: 7, name: 'Clifford', date: '12-02-23', day: 44, holidayfor: 'student' },
  { id: 8, name: 'Frances', date: '12-02-23', day: 36, holidayfor: 'student' },
  { id: 9, name: 'Roxie', date: '12-02-23', day: 65, holidayfor: 'student' },
];

function Holidays() {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file); // Do something with the selected file
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h2">Holidays</Typography>
      <hr style={{ width: '100%', border: '1px solid yellow', marginBottom: '30px' }} />

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button sx={{ color: 'white', mr: '20px' }} color="success" variant="contained">
          New Holiday
        </Button>
        <Button sx={{ py: '6px', px: '10px' }} variant="outlined" color="success">
          Export Holiday
        </Button>
      </Box>

      <Box sx={{ mt: '40px' }}>
        <Input fullWidth variant="filled" sx={{ mb: '10px' }} type="file" onChange={handleFileChange} />
        <Button variant="contained" component="label">
          Upload File
        </Button>
      </Box>

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
    </Box>
  );
}

export default Holidays;
