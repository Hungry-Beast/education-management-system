import React, {useState} from 'react'
import { Box, Typography, Modal } from '@mui/material';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import styled from "styled-components";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EnquiryModal from "./EnquiryModal"

const Component = styled.div`
  width: calc(100% - 30px);
  padding: 16px;
  background-color: #fff;
  margin: 15px auto;
  border-radius:10px;
`;


const EditDeleteButton = () => {
    return (
        <>
      <EditIcon/> <DeleteIcon/>
      </>
    );
  };

const columns = [
    { field: 'id', headerName: 'Sl No', flex: 1, headerAlign: "center", align: "center" },
    { field: 'vendorName', headerName: 'Vendor Name', flex: 1, headerAlign: "center", align: "center" },
    { field: 'type', headerName: 'Type', flex: 1 , headerAlign: "center", align: "center"},
    { field: 'email', headerName: 'Email', flex: 1 , headerAlign: "center", align: "center"},
    { field: 'phone', headerName: 'Phone', flex: 1 , headerAlign: "center", align: "center"},
    { field: 'address', headerName: 'Address', flex: 3 , headerAlign: "center", align: "center"},
    { field: 'action', headerName: 'Action', flex: 0  , headerAlign: "center", align: "center" ,  renderCell: (params) => (
        <EditDeleteButton/>
      )  }
  ];
  
  
  const rows = [
    { id: 1, vendorName: "OTP registration", type: 'Lannister', email: "johndoe@gmail.com", phone: '987654321', address:"24th South Baking Street, london, UK" },
    { id: 2, vendorName: "Fees Paid", type: 'Lannister', email: "johndoe@gmail.com", phone: '987654321', address:"24th South Baking Street, london, UK"},
    { id: 3, vendorName: "OTP Testing"  , type: 'Lannister', email: "johndoe@gmail.com", phone: '987654321', address:"24th South Baking Street, london, UK"},
    { id: 4, vendorName: "OTP Testing"  , type: 'Lannister', email: "johndoe@gmail.com", phone: '987654321', address:"24th South Baking Street, london, UK"},
  
  ];


function Enquiry() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Component>
      <Box sx={{ width: '100%' }} >

          <Box sx={{display: "flex", justifyContent: "flex-end", mb: "30px"}} >
              <Button variant="contained" sx={{color: 'white'}} onClick={handleOpen} color="success" >New Enquiry</Button>
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
          <EnquiryModal title="Add Asset vendorName" handleClose={handleClose} />
        </Modal>

      </Box>
    </Component>
  )
}

export default Enquiry;