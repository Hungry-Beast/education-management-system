import React from 'react'
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import styled from "styled-components";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const InputEl = styled.input`
    padding: 8px 20px;
    background-color: #b7b7b77c;
    border: 2px solid #3292d27b;
`;


const EditDeleteButton = () => {
    return (
        <>
      <EditIcon/> <DeleteIcon/>
      </>
    );
  };
  

const columns = [
    { field: 'id', headerName: 'Sl No', flex: 1 },
    { field: 'title', headerName: 'Title', flex: 3 },
    { field: 'message', headerName: 'Message', flex: 1},
    { field: 'action', headerName: 'Action', flex: 1,  renderCell: (params) => (
        <EditDeleteButton/>
      )  }
  ];
  
  
  const rows = [
    { id: 1, title: "OTP registration"  , message: 'Snow', image: 'http://testing.infotute.com/storage/Settings/empty_message/lEXI2rWUHmigcm1YHFjYL0TZCjNJTYfcytYe5AbA.png', action: 35},
    { id: 2, title: "Fees Paid"  , message: 'Lannister', image: 'http://testing.infotute.com/storage/Settings/empty_message/rCd1Tj1T4CUfx8VWYjxYHr66Xe77yd0p2KBXnStv.png', action: 42 },
    { id: 3, title: "OTP Testing"  , message: 'Lannister', image: 'http://testing.infotute.com/storage/Settings/empty_message/K5Fs55DTuOmlTLe6OS0frsJpJO1L0muYcHETW2wD.svg', action: 45 },
  ];

function SmsModule() {
  return (
    <Box sx={{ width: '100%' }} >

        <Box sx={{display: "flex", justifyContent: "flex-end", mb: "30px"}} >
            <FormControlLabel control={<Switch sx={{mr: "20px"}}  defaultChecked />} labelPlacement="start" label='Edit Data' />
            <Button variant="contained" sx={{color: 'white'}} color="success" >New Message</Button>
        </Box>

        <Box>
            <Box sx={{display: "flex", justifyContent: "space-between"}} >
                <Typography>Module</Typography>
                <Typography>Count</Typography>
                <Typography>Action</Typography>
            </Box>

            <hr style={{ width:"100%", border: '1px solid black'}} />

            <Box sx={{display: "flex", justifyContent: "space-between"}} >
                <Typography>SMS</Typography>
                <InputEl disabled placeholder='1' />
                <Switch defaultChecked />
            </Box>
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

export default SmsModule