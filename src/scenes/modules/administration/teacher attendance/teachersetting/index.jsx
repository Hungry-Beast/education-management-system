import React, {useState} from 'react'
import { Box, Typography, Modal } from '@mui/material';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import styled from "styled-components";
import DeleteIcon from '@mui/icons-material/Delete';
// import NewAssetModal from './AssetCommonModal';
import TeacherAttendanceModal from "./TeacherAttendanceModal"
import AttendanceSessions from "./AttendanceSessions"

const Component = styled.div`
  width: calc(100% - 30px);
  /* height: 100%; */
  padding: 16px;
  background-color: #fff;
  margin: 15px auto;
  border-radius:10px;
`;


const EditDeleteButton = () => {
    return (
        <>
        <DeleteIcon/>
      </>
    );
  };

const columns = [
    { field: 'id', headerName: 'Sl No', flex: 1, headerAlign: "center", align: "center" },
    { field: 'status', headerName: 'Status', flex: 1, headerAlign: "center", align: "center" },
    { field: 'shortCode', headerName: 'Short Code', flex: 1 , headerAlign: "center", align: "center"},
    { field: 'color', headerName: 'Color', flex: 0  , headerAlign: "center", align: "center" ,  renderCell: (params) => (
        <input type="color"  name="favcolor" value="#ff0000"/>
      )  },
    { field: 'action', headerName: 'Action', flex: 0  , headerAlign: "center", align: "center" ,  renderCell: (params) => (
        <EditDeleteButton/>
      )  }
  ];
  
  
  const rows = [
    { id: 1, status: "OTP registration", shortCode: 'P'},
    { id: 2, status: "OTP registration", shortCode: 'P'},
    { id: 3, status: "OTP registration", shortCode: 'P'},
    { id: 4, status: "OTP registration", shortCode: 'P'},
  ];


function TeacherSetting() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (

    <>
    <Component>
    <Box sx={{ width: '100%' }} >

        <Box sx={{display: "flex", justifyContent: "flex-end", mb: "30px"}} >
            <Button variant="contained" sx={{color: 'white'}} onClick={handleOpen} color="success" >New Status</Button>
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

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-type"
        >
        <TeacherAttendanceModal title="Add Asset status" handleClose={handleClose} />
      </Modal>

    </Box>
    </Component>

    <AttendanceSessions/>
    </>
  )
}

export default TeacherSetting;