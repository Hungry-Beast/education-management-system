import {useState} from 'react'
import { Box,Modal, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import styled from "styled-components";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PostalModal from './PostalModal';


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
<VisibilityIcon/>
      </>
    );
  };
  
const columns = [
  { field: 'id', headerName: '#', flex: 1 },
  { field: 'to', headerName: 'To', flex: 1 },
  { field: 'referenceNo', headerName: 'Reference No', flex: 1 },
  { field: 'date', headerName: 'Date', flex: 1 },
  { field: 'action', headerName: 'Action', flex: 1,  renderCell: (params) => (
      <EditDeleteButton/>
  ) }
];


const rows = [
  { id: 1, to: 'Snow', referenceNo: "Tree Of Life", date: "12-03-22"},
  { id: 1, to: 'Snow', referenceNo: "Tree Of Life", date: "12-03-22"},
];

function Postal() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    
    <Component>
      <Box sx={{ width: '100%' }}>

      <Box sx={{display: "flex", justifyContent: "space-between", mb: "30px"}} >
            <Typography variant='h3' >Dispatched Postal</Typography>
            <Button variant="contained" sx={{color: 'white'}} onClick={handleOpen} color="success" >Add Postal</Button>
        </Box>


        <div style={{width: '100%', marginTop: '40px' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            autoHeight
          />
        </div>

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-type"
          >
          <PostalModal title="Add Asset vendorName" handleClose={handleClose} />
        </Modal>

        </Box>
      </Component>

      <Component>
      <Box sx={{ width: '100%' }}>

      <Box sx={{display: "flex", justifyContent: "space-between", mb: "30px"}} >
            <Typography variant='h3' >Recieved Postal</Typography>
        </Box>


        <div style={{width: '100%', marginTop: '40px' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            autoHeight
          />
        </div>


        </Box>
      </Component>

      </>
  )
}

export default Postal