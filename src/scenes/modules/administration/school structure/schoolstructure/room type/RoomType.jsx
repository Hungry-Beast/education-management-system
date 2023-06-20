import React, {useState} from 'react'
import { Box, Typography, Modal } from '@mui/material';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import BlocksRoomTypeCommonModal from '../BlocksRoomTypeCommonModal';

const EditDeleteButton = () => {
    return (
        <>
      <EditIcon/> <DeleteIcon/>
      </>
    );
  };

const columns = [
    { field: 'id', headerName: 'Sl No', flex: 1, headerAlign: "center", align: "center" },
    { field: 'roomType', headerName: 'Room Type', flex: 1, headerAlign: "center", align: "center" },
    { field: 'action', headerName: 'Action', flex: 1, headerAlign: "center", align: "center" , renderCell: (params) => (
        <EditDeleteButton/>
      )  }
  ];
  
  
  const rows = [
    { id: 1, roomType: "OTP registration" },
    { id: 2, roomType: "Fees Paid" },
    { id: 3, roomType: "OTP Testing" },
    { id: 4, roomType: "OTP Testing"  },
  
  ];


function RoomType() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ width: '100%' }} >

        <Box sx={{display: "flex", justifyContent: "flex-end", mb: "30px"}} >
            <Button variant="contained" sx={{color: 'white'}} onClick={handleOpen} color="success" >Add Room Type</Button>
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
        <BlocksRoomTypeCommonModal title="Add Room Type" handleClose={handleClose} />
      </Modal>

    </Box>
  )
}

export default RoomType