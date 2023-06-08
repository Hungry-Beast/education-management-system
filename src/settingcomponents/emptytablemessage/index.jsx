import React from 'react'
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';


const columns = [
  { field: 'id', headerName: 'Sl No', flex: 1 },
  { field: 'message', headerName: 'Message', flex: 3 },
  { field: 'image', headerName: 'Image', flex: 1,  renderCell: (params) => (
    <Link target='_blank' to={`${params.value}`}>Image</Link>
  ) },
  { field: 'action', headerName: 'Action', flex: 1 }
];


const rows = [
  { id: 1, message: 'Snow', image: 'http://testing.infotute.com/storage/Settings/empty_message/lEXI2rWUHmigcm1YHFjYL0TZCjNJTYfcytYe5AbA.png', action: 35},
  { id: 2, message: 'Lannister', image: 'http://testing.infotute.com/storage/Settings/empty_message/rCd1Tj1T4CUfx8VWYjxYHr66Xe77yd0p2KBXnStv.png', action: 42 },
  { id: 3, message: 'Lannister', image: 'http://testing.infotute.com/storage/Settings/empty_message/K5Fs55DTuOmlTLe6OS0frsJpJO1L0muYcHETW2wD.svg', action: 45 },
  { id: 4, message: 'Stark', image: 'http://testing.infotute.com/storage/Settings/empty_message/jhs83SoWLrNEW1JEE1Ahv9vrrOuAuhbDiqXIZtjY.jpg', action: 16 }
];

function EmptyTableMessage() {
  return (
    <Box sx={{ width: '100%' }}>
      
      <Box sx={{display: "flex", justifyContent: "space-between"}} >
        <Typography variant="h4" >Messages</Typography>
        <Button variant="contained" sx={{color: 'white'}} color="success" >New Message</Button>
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
  )
}

export default EmptyTableMessage