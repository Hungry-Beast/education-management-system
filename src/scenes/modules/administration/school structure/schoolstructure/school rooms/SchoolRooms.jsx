import React, {useState} from 'react'
import { Box, Typography, Modal } from '@mui/material';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SchoolRoomsModal from './SchoolRoomsModal';

const EditDeleteButton = () => {
    return (
        <>
      <EditIcon/> <DeleteIcon/> <VisibilityIcon/>
      </>
    );
  };

const columns = [
    { field: 'id', headerName: 'Sl No', flex: 1, headerAlign: "center", align: "center" },
    { field: 'roomNo', headerName: 'Room Number', flex: 1, headerAlign: "center", align: "center" },
    { field: 'block', headerName: 'Block', flex: 1 , headerAlign: "center", align: "center"},
    { field: 'floor', headerName: 'Floor', flex: 1 , headerAlign: "center", align: "center"},
    { field: 'roomType', headerName: 'Room Type', flex: 1 , headerAlign: "center", align: "center"},
    { field: 'capacity', headerName: 'Capacity', flex: 1 , headerAlign: "center", align: "center"},
    { field: 'examCapacity', headerName: 'Exam Capacity', flex: 1 , headerAlign: "center", align: "center"},
    { field: 'action', headerName: 'Action', flex: 1, headerAlign: "center", align: "center" , renderCell: (params) => (
        <EditDeleteButton/>
      )  }
  ];
  
  
  const rows = [
    { id: 1, roomNo: "OTP registration", block: 'Lorem ipsum', floor: "FIRST FLOOR", roomType: 'Lorem ipsum', capacity: "fdsfgbfd", examCapacity: "100 and 1" },
    { id: 2, roomNo: "OTP registration", block: 'Lorem ipsum', floor: "FIRST FLOOR", roomType: 'Lorem ipsum', capacity: "fdsfgbfd", examCapacity: "100 and 1" },
    { id: 3, roomNo: "OTP registration", block: 'Lorem ipsum', floor: "FIRST FLOOR", roomType: 'Lorem ipsum', capacity: "fdsfgbfd", examCapacity: "100 and 1" },
    { id: 4, roomNo: "OTP registration", block: 'Lorem ipsum', floor: "FIRST FLOOR", roomType: 'Lorem ipsum', capacity: "fdsfgbfd", examCapacity: "100 and 1" },

  ];


function SchoolRooms() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ width: '100%' }} >

        <Box sx={{display: "flex", justifyContent: "flex-end", mb: "30px"}} >
            <Button variant="contained" sx={{color: 'white'}} onClick={handleOpen} color="success" >Add New Room</Button>
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
          aria-describedby="modal-modal-description"
        >
        <SchoolRoomsModal title="Add Asset Category" handleClose={handleClose} />
      </Modal>

    </Box>
  )
}

export default SchoolRooms