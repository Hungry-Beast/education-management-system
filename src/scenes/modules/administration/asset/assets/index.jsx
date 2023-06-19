import {useState} from 'react'
import { Box,Modal } from '@mui/material';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import styled from "styled-components";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import NewAssetModal from './NewAssetModal';



const Component = styled.div`
  width: calc(100% - 30px);
  height: 100%;
  padding: 16px;
  background-color: #fff;
  margin: 15px auto;
  border-radius:10px;
`;

const EditDeleteButton = () => {
    return (
        <>
      <EditIcon/> <DeleteIcon/> <VisibilityIcon/>
      </>
    );
  };
  
const columns = [
  { field: 'id', headerName: 'Sl No', flex: 1 },
  { field: 'hsiCode', headerName: 'Hsi Code', flex: 1 },
  { field: 'title', headerName: 'Title', flex: 2 },
  { field: 'condition', headerName: 'Condition', flex: 1 },
  { field: 'category', headerName: 'Category', flex: 1 },
  { field: 'location', headerName: 'Location', flex: 1 },
  { field: 'image', headerName: 'Image', flex: 1,  renderCell: (params) => (
    <Box
        component="img"
            sx={{ height: 50 }}
            alt="Logo"
            src={`${params.value}`}
          />
  ) },
  { field: 'action', headerName: 'Action', flex: 1,  renderCell: (params) => (
      <EditDeleteButton/>
  ) }
];


const rows = [
  { id: 1, hsiCode: 'Snow', title: "Tree Of Life", condition: "Rare", category: "category", location: "London, UK",  image: 'http://testing.infotute.com/storage/Settings/empty_message/lEXI2rWUHmigcm1YHFjYL0TZCjNJTYfcytYe5AbA.png', action: 35},
  { id: 2, hsiCode: 'Lannister', title: "Tree Of Life",condition: "Rare", category: "category", location: "London, UK",  image: 'http://testing.infotute.com/storage/Settings/empty_message/rCd1Tj1T4CUfx8VWYjxYHr66Xe77yd0p2KBXnStv.png', action: 42 },
];

function Assets() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Component>
    <Box sx={{ width: '100%' }}>

      <Box sx={{display: "flex", justifyContent: "flex-end", mb: "30px"}} >
            <Button variant="contained" sx={{color: 'white'}} onClick={handleOpen} color="success" >New Asset</Button>
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
        <NewAssetModal title="Add Asset vendorName" handleClose={handleClose} />
      </Modal>

      </Box>
      </Component>
  )
}

export default Assets