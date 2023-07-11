import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';
import {StyledDataGrid} from './Notice.Styled'

const NoticeTable = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleOpenModal = (row) => {
    setSelectedRow(row);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSaveChanges = () => {
    // TODO: Implement your save changes logic here
    handleCloseModal();
  };

  const columns = [
    { field: 'slno', headerName: 'Sl no', width: 50 },
    { field: 'startdate', headerName: 'Start Date', width: 100 },
    { field: 'enddate', headerName: 'End Date', width: 100 }, 
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'publishedto', headerName: 'Published To', width: 200, 
    renderCell: (params) => (

      <div style={{backgroundColor:'#1dbfc1',color:'white'}} >
        <p>{params.value[0]}</p>
      </div>
      )
  
    },
    { field: 'attachment', headerName: 'Attachment', width: 100 },
    { field: 'notify', headerName: 'Notify', width: 50 },
    { field: 'actions', headerName: 'Actions', width: 100,
    renderCell: (params) => (
      <div>
        <EditIcon onClick={() => handleOpenModal(params.row)} />
      </div>
    ),
  },
  ];

  const rows = [
    { slno: 1, startdate: '26/06/2023',enddate:'27/06/2023',title:'Test Notice',publishedto:["Student", "Teacher"],attachment:'attachment',notify:'' },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <StyledDataGrid
      rows={rows}
      columns={columns}
      pagination={false}
    />
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '4px',
            width: '400px',
          }}
        >
          <h2>Edit Row</h2>
          {selectedRow && (
            <form>
              <label>Sl No</label>
              <input type="text" value={selectedRow.slno} disabled />
              <br />
              <label>Start Date</label>
              <input
                type="text"
                value={selectedRow.startdate}
                onChange={(e) =>
                  setSelectedRow({ ...selectedRow, name: e.target.value })
                }
              />
              <br />
              <button type="button" onClick={handleSaveChanges}>
                Save Changes
              </button>
              <label>End Date</label>
              <input type="text" value={selectedRow.enddate} disabled />
              <br />
              <label>Title</label>
              <input type="text" value={selectedRow.title} disabled />
              <br />
              <label>Published To</label>
              <input type="text" value= {["Student", "Teacher"]} disabled />
              <br />
              <label>Attachment</label>
              <input type="text" value={selectedRow.attachment} disabled />
              <br />
              <label>Notify</label>
              <input type="text" value={selectedRow.notify} disabled />
              <br />
              <label>Actions</label>
              <input type="text" value={selectedRow.actions} disabled />
              <br />
              
            </form>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default NoticeTable;
