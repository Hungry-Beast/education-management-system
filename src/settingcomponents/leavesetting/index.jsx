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
  { field: 'mindays', headerName: 'Min Days', flex: 1 },
  { field: 'maxdays', headerName: 'Max Days', flex: 1},
  { field: 'type', headerName: 'Type', flex: 1},
  { field: 'typename', headerName: 'Type Name', flex: 1},
  { field: 'verifyby', headerName: 'Verify By', flex: 1},
  { field: 'reverify', headerName: 'Re-verify for Students/Verify By for Others', flex: 3},
  { field: 'action', headerName: 'Action', flex: 1,  renderCell: (params) => (
      <EditDeleteButton/>
    )  }
];


const rows = [
  { id: 1, mindays: "OTP registration", maxdays: 'Snow', type: "teacher", typename: '', verifyby: '', reverify: 'RAJNISH KUMAR[teacher]'},
  { id: 2, mindays: "Fees Paid", maxdays: 'Lannister', type: "teacher", typename: '', verifyby: '', reverify: 'PRANAB GOSWAMI[staff]' },
  { id: 3, mindays: "OTP Testing"  , maxdays: 'Lannister', type: "staff", typename: '', verifyby: '', reverify: 'PRANAB GOSWAMI[staff]'},
  { id: 4, mindays: "OTP Testing"  , maxdays: 'Lannister', type: "class", typename: '', verifyby: '', reverify: '	ARINDOM CHATTERJEE[teacher]'},

];


function LeaveSetting() {
  return (
    <Box sx={{ width: '100%' }} >

        <Box sx={{display: "flex", justifyContent: "flex-end", mb: "30px"}} >
            <Button variant="contained" sx={{color: 'white'}} color="success" >Add Leave</Button>
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

export default LeaveSetting