import React, {useState} from 'react'
import { Box, Typography, Modal } from '@mui/material';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CheckinModal from './CheckinModal';

const EditDeleteButton = () => {
    return (
        <>
      <VisibilityIcon/> <SendToMobileIcon/> <DeleteIcon/>
      </>
    );
  };

const columns = [
    { field: 'id', headerName: 'Sl No', flex: 1, headerAlign: "center", align: "center" },
    { field: 'visitorId', headerName: 'Visitor Id', flex: 1, headerAlign: "center", align: "center" },
    { field: 'name', headerName: 'Name', flex: 1 , headerAlign: "center", align: "center"},
    { field: 'phone', headerName: 'Phone', flex: 1 , headerAlign: "center", align: "center"},
    { field: 'toMeet', headerName: 'To Meet', flex: 1 , headerAlign: "center", align: "center"},
    { field: 'checkedIn', headerName: 'Checked In', flex: 1 , headerAlign: "center", align: "center"},
    { field: 'status', headerName: 'Status', flex: 1 , headerAlign: "center", align: "center"},
    { field: 'action', headerName: 'Action', flex: 1, headerAlign: "center", align: "center" , renderCell: (params) => (
        <EditDeleteButton/>
      )  }
  ];
  
  
  const rows = [
    { id: 1, visitorId: "OTP registration", name: 'Lorem ipsum', phone: "2893728r34", toMeet: "John doe in lunch", checkedIn: "05-11-2023", status: "Active" },
    { id: 2, visitorId: "OTP registration", name: 'Lorem ipsum', phone: "2893728r34", toMeet: "John doe in lunch", checkedIn: "05-11-2023", status: "Active" },
    { id: 3, visitorId: "OTP registration", name: 'Lorem ipsum', phone: "2893728r34", toMeet: "John doe in lunch", checkedIn: "05-11-2023", status: "Active" },
    { id: 4, visitorId: "OTP registration", name: 'Lorem ipsum', phone: "2893728r34", toMeet: "John doe in lunch", checkedIn: "05-11-2023", status: "Active" },
    { id: 5, visitorId: "OTP registration", name: 'Lorem ipsum', phone: "2893728r34", toMeet: "John doe in lunch", checkedIn: "05-11-2023", status: "Active" },

  
  ];


function CheckinVisitor() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ width: '100%' }} >

        <Box sx={{display: "flex", justifyContent: "space-between", mb: "30px"}} >
            <Typography variant='h3' >Checked In Visitors</Typography>
            <Button variant="contained" sx={{color: 'white'}} onClick={handleOpen} color="success" >Add Visitor</Button>
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
        <CheckinModal title="Add Asset visitorId" handleClose={handleClose} />
      </Modal>

    </Box>
  )
}

export default CheckinVisitor