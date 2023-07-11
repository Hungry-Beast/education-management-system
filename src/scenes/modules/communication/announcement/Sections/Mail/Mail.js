import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Checkbox from '@mui/material/Checkbox';
import StarIcon from '@mui/icons-material/Star';
import BellIcon from '@mui/icons-material/Notifications';
import { BsInfoCircle } from 'react-icons/bs'; // Importing the 'i' icon
import {MdOutlineMessage} from 'react-icons/md'
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import avatarImage from '../View/avatar.png';
import styled from 'styled-components'


const StyledTypography = styled.div`
  display:flex;
  gap:2rem;
margin-left:28%;
  `

const StyledModalButton = styled.div`
  margin-left:98%;
  margin-top:0.6rem;
  button{
    font-size:1.3rem;
  }
`

const StyledSearch = styled.div`
  width:100%;
  border-bottom:0.1rem solid lightgray;
  display:flex;
  justify-content:space-between;

align-items:center;
`

const StyledSearchInput = styled.div`
input{
  padding:0.3rem;
}
`

const Mail = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleCellClick = (params) => {
    if (params.field === 'info') {
      setSelectedRow(params.row);
      handleModalOpen();
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const rows = [
    { id: 1, checkBox: false, star: false, image: avatarImage, mobileNumber: '1234567890', bell: false, description: 'Payment successful for unique id: 7495 amount: Rs 1000 and transaction id is 64173892' },
    { id: 2, checkBox: false, star: false, image: avatarImage, mobileNumber: '0987654321', bell: false, description: 'test' },
    { id: 3, checkBox: false, star: false, image: avatarImage, mobileNumber: '1234567890', bell: false, description: 'test' },
    { id: 4, checkBox: false, star: false, image: avatarImage, mobileNumber: '0987654321', bell: false, description: 'test' },
    { id: 5, checkBox: false, star: false, image: avatarImage, mobileNumber: '1234567890', bell: false, description: 'test' },
    { id: 6, checkBox: false, star: false, image: avatarImage, mobileNumber: '0987654321', bell: false, description: 'test' },
    { id: 7, checkBox: false, star: false, image: avatarImage, mobileNumber: '1234567890', bell: false, description: 'test' },
    { id: 8, checkBox: false, star: false, image: avatarImage, mobileNumber: '0987654321', bell: false, description: 'test' },
    { id: 9, checkBox: false, star: false, image: avatarImage, mobileNumber: '1234567890', bell: false, description: 'test' },
    { id: 10, checkBox: false, star: false, image: avatarImage, mobileNumber: '0987654321', bell: false, description: 'test' },
    { id: 11, checkBox: false, star: false, image: avatarImage, mobileNumber: '0987654321', bell: false, description: 'test' },
    { id: 12, checkBox: false, star: false, image: avatarImage, mobileNumber: '0987654321', bell: false, description: 'test' },
    { id: 13, checkBox: false, star: false, image: avatarImage, mobileNumber: '0987654321', bell: false, description: 'test' },
  ];

  const filteredRows = rows.filter((row) =>
    row.mobileNumber.includes(searchQuery)
    
  );

  const columns = [
    {
      width: 70,
      flex: 1,
    },
    {
      field: 'star',
      width: 70,
      flex: 1,
      renderCell: () => <StarIcon color="primary" />,
    },
    {
      field: 'image',
      width: 70,
      flex: 1,
      renderCell: () => (
        <img
          src={avatarImage}
          alt=""
          style={{
            width: '20%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '50%',
          }}
        />
      ),
    },
    {
      field: 'mobileNumber',
      headerName: '',
      flex: 1,
      editable: true,
      renderCell: (params) => (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ overflowWrap: 'break-word', wordWrap: 'break-word', width: '100%', textAlign: 'center' }}>{params.value}</div>
          <div style={{ fontSize: '15px', color: '#888888', marginTop: '5px', overflowWrap: 'break-word', wordWrap: 'break-word', width: '100%', textAlign: 'center' }}>
            {params.row.description}
          </div>
        </div>
      ),
    },
    {
      field: 'message',
      width: 70,
      flex: 1,
      renderCell: () => <MdOutlineMessage color="orange" fontSize="1.6rem"  />,
    },
  ];

  return (
    <Box sx={{ height: 600, width: '100%' }}>
      <StyledSearch>
        <h2>Inbox</h2>
        <StyledSearchInput>
          <input type="text" placeholder="Search" value={searchQuery} onChange={handleSearch} />
        </StyledSearchInput>
      </StyledSearch>
      <StyledModalButton>
        <button onClick={handleModalOpen} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <BsInfoCircle color="primary" />
        </button>
      </StyledModalButton>
      <Modal
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby="modal-title"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '10px',
        }}
      >
        <Box
          sx={{
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 2,
          }}
        >
          <StyledTypography>
            <Typography variant="body1">SMS</Typography>
            <Typography variant="body1">Email</Typography>
            <Typography variant="body1">Push</Typography>
          </StyledTypography>
        </Box>
      </Modal>
      <DataGrid
        rows={filteredRows}
        columns={columns}
        pageSize={15}
        checkboxSelection
        disableRowSelectionOnClick
        hideFooter
        hideToolbar
        onCellClick={handleCellClick}
      />
    </Box>
  );
};

export default Mail;