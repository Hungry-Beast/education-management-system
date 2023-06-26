import React, {useState} from 'react'
import { Box, Typography, Modal } from '@mui/material';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisitorCommonModal from './CheckinModal';

const EditDeleteButton = () => {
    return (
        <>
      <EditIcon/> <DeleteIcon/>
      </>
    );
  };

const columns = [
    { field: 'id', headerName: 'Sl No', flex: 1, headerAlign: "center", align: "center" },
    { field: 'location', headerName: 'Location', flex: 1, headerAlign: "center", align: "center" },
    { field: 'description', headerName: 'Description', flex: 4 , headerAlign: "center", align: "center"},
    { field: 'action', headerName: 'Action', flex: 0  , headerAlign: "center", align: "center" ,  renderCell: (params) => (
        <EditDeleteButton/>
      )  }
  ];
  
  
  const rows = [
    { id: 1, location: "OTP registration", description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis in ex sit nulla? Totam tenetur molestias inventore nam quos? Eaque repellendus sit, repudiandae sequi vero id doloribus dolorum molestiae nobis.  ' },
    { id: 2, location: "Fees Paid", description: 'Lannister'},
    { id: 3, location: "OTP Testing"  , description: 'Lannister'},
    { id: 4, location: "OTP Testing"  , description: 'Lannister'},
  
  ];


function CheckoutVisitor() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ width: '100%' }} >

        <Box sx={{mb: "30px"}} >
            <Typography variant='h3' >All Checkout Visitors</Typography>
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

export default CheckoutVisitor