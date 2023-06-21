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
import NewAssetModal from './AssetPurchaseModal';



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
  { field: 'asset', headerName: 'Asset', flex: 1 },
  { field: 'vendor', headerName: 'Vendor', flex: 2 },
  { field: 'purchaseBy', headerName: 'Purchased By', flex: 1 },
  { field: 'quantity', headerName: 'Quantity', flex: 1 },
  { field: 'unit', headerName: 'Unit', flex: 1 },
  { field: 'price', headerName: 'Price', flex: 1 },
  { field: 'purchaseDate', headerName: 'Purchase Date', flex: 1 },
  { field: 'serviceDate', headerName: 'Service Date', flex: 1 },
  { field: 'expiryDate', headerName: 'Expiry Date', flex: 1 },
  { field: 'action', headerName: 'Action', flex: 1,  renderCell: (params) => (
      <EditDeleteButton/>
  ) }
];


const rows = [
  { id: 1, asset: 'Snow', vendor: "Tree Of Life", purchaseBy: "Rare", quantity: "category", unit: "London, UK",  price: '200', purchaseDate: "21-09-05", serviceDate: "23-02-20", expiryDate: "24-01-01",  action: 35},
  { id: 2, asset: 'Globe', vendor: "Tree Of Life", purchaseBy: "Rare", quantity: "category", unit: "London, UK",  price: '200', purchaseDate: "21-09-05", serviceDate: "23-02-20", expiryDate: "24-01-01",  action: 35},
  { id: 3, asset: 'Trone', vendor: "Tree Of Life", purchaseBy: "Rare", quantity: "category", unit: "London, UK",  price: '200', purchaseDate: "21-09-05", serviceDate: "23-02-20", expiryDate: "24-01-01",  action: 35},
];

function AssetPurchase() {

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

export default AssetPurchase