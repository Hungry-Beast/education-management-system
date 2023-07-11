import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

import { ImageContext } from '../../../../context/Context';
import NoticeModal from './NoticeModal';
import { StyledHead, StyledShowandSearchContainer, StyledSearch,
   StyledShow ,ActionContainer,ActionIcon,ModalNav,
  ModalDesc,ModalType,ModalFlex,ModalTwo,
  ModalDate,ModalInput,ModalLast,ModalButton} from './Notice.Styled';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  width:40%;
  background-color: #fff;
  border-radius: 10px;
  margin: auto;
  padding-bottom: 1rem;
  h3{
    color: black;
  }
`;
const Component = styled.div`
  width: calc(100% - 30px);
  height: 100%;
  padding: 12px;
  background-color: #fff;
  margin: 15px auto;
  border-radius: 10px;
`;
export const Notice = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = () => setOpen(true);

  const handleViewClick = () => {
    setViewModalOpen(true);
  };

  const handleEditClick = () => {
    setEditModalOpen(true);
  };

  const handleDeleteClick = () => {
    setEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setViewModalOpen(false);
    setEditModalOpen(false);
  };

  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  

  const dummyData = [
    {
      id: 1,
      slNo: 1,
      startDate: '2023-07-01',
      endDate: '2023-07-10',
      title: 'Test Notice ',
      publishedTo: 'Student Parents Teachers Staffs',
      attachment: 'https://example.com/attachment1',
      notify: '',
      actions:'',
    },
    {
      id: 2,
      slNo: 2,
      startDate: '2023-07-02',
      endDate: '2023-07-11',
      title: 'test notification settings',
      publishedTo: 'Student Parents Teachers',
      attachment: 'https://example.com/attachment2',
      notify: 'https://example.com/notify2',
    },
    {
      id: 3,
      slNo: 3,
      startDate: '2023-07-03',
      endDate: '2023-07-12',
      title: 'This is a test notice to check communication',
      publishedTo: 'Student Parents Teachers Staffs',
      attachment: 'https://example.com/attachment3',
      notify: true,
    },
    {
      id: 4,
      slNo: 4,
      startDate: '2023-07-04',
      endDate: '2023-07-13',
      title: 'dialog test 2',
      publishedTo: 'Student',
      attachment: 'https://example.com/attachment4',
      notify: false,
    },
    {
      id: 5,
      slNo: 5,
      startDate: '2023-07-05',
      endDate: '2023-07-14',
      title: 'test dialog',
      publishedTo: 'Student',
      attachment: 'https://example.com/attachment5',
      notify: true,
    },
    {
      id: 6,
      slNo: 6,
      startDate: '2023-07-06',
      endDate: '2023-07-15',
      title: 'Notice 6',
      publishedTo: 'Teachers',
      attachment: 'https://example.com/attachment6',
      notify: false,
    },
    {
      id: 7,
      slNo: 7,
      startDate: '2023-07-07',
      endDate: '2023-07-16',
      title: 'Notice 7',
      publishedTo: 'Students',
      attachment: 'https://example.com/attachment7',
      notify: true,
    },
    {
      id: 8,
      slNo: 8,
      startDate: '2023-07-08',
      endDate: '2023-07-17',
      title: 'Notice 8',
      publishedTo: 'Teachers',
      attachment: 'https://example.com/attachment8',
      notify: false,
    },
    {
      id: 9,
      slNo: 9,
      startDate: '2023-07-09',
      endDate: '2023-07-18',
      title: 'Notice 9',
      publishedTo: 'Students',
      attachment: 'https://example.com/attachment9',
      notify: true,
    },
    {
      id: 10,
      slNo: 10,
      startDate: '2023-07-10',
      endDate: '2023-07-19',
      title: 'Notice 10',
      publishedTo: 'Teachers',
      attachment: 'https://example.com/attachment10',
      notify: false,
    },
  ];
  
  return (
    <Component>
      <StyledHead>
        <Button onClick={handleOpen}>+ New Notice</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <NoticeModal handleClose={handleClose} />
        </Modal>
      </StyledHead>

      <StyledShowandSearchContainer>
        <StyledShow>
          <p>Show</p>
          <FormControl midWidth>
            <InputLabel id="demo-simple-select-label"></InputLabel>
            <Select defaultValue={10} label="10" onChange={handleChange}>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={100}>100</MenuItem>
            </Select>
          </FormControl>
          <p>entries</p>
        </StyledShow>
        <StyledSearch>
          <p>Search:</p>
          <input type="text" />
        </StyledSearch>
      </StyledShowandSearchContainer>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sl. No</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Published To</TableCell>
              <TableCell>Attachment</TableCell>
              <TableCell>Notify</TableCell>
              <ActionContainer>Actions
              <ActionIcon onClick={handleViewClick}></ActionIcon>
              <ActionIcon onClick={handleEditClick}></ActionIcon>
              <ActionIcon onClick={handleDeleteClick}></ActionIcon>
            </ActionContainer>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyData.map((data) => (
              <TableRow key={data.id}>
                <TableCell>{data.slNo}</TableCell>
                <TableCell>{data.startDate}</TableCell>
                <TableCell>{data.endDate}</TableCell>
                <TableCell>{data.title}</TableCell>
                <TableCell>{data.publishedTo}</TableCell>
                <TableCell>
                  <a href={data.attachment} target="_blank" rel="noopener noreferrer">
                    attachment
                  </a>
                </TableCell>
                <TableCell>
                  <a href={data.notify} target="_blank" rel="noopener noreferrer">
                    notify
                  </a>
                    </TableCell>
                <TableCell>
                <svg onClick={handleViewClick} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16" color='blue'>
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                </svg>
                <svg onClick={handleEditClick} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16" color='purple'>
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" color='red'>
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                </svg>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          {viewModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalNav>
            <h3>View Notices</h3>
            </ModalNav>
            <ModalDesc>
              <ModalType>
              <h4>Publish Type : </h4>
              <p>All</p>
              </ModalType>
              <ModalFlex>
              
                  <h4>Published To</h4>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16" color='#1dbfc1'>
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                  </svg>
                  <h4>Students</h4>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16" color='#1dbfc1'>
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                  </svg>
                  <h4>Teachers</h4>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16" color='#1dbfc1'>
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                  </svg>
                  <h4>Parents</h4>
              </ModalFlex>
              <ModalTwo>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16" color='#1dbfc1'>
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                  </svg>
                  <h4>Staffs</h4>
              </ModalTwo>
              <h4>Title</h4>
              <input type='text' readOnly value='Test Notice'></input>
              <ModalDate>
              <h4>Start Date</h4>
              <h4>End Date</h4>
              </ModalDate>
              <ModalInput>
              <input value='2023-06-26' type='date' readOnly ></input>
              <input value='2023-06-27' type='date' readOnly ></input>
              </ModalInput>
              <h4>Description</h4>
              <input type='text' readOnly value='Test notice on event calendar'></input>
              <ModalLast>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-app" viewBox="0 0 16 16" color='gray'>
              <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z"/>
              </svg>
              <h4>Notify via email</h4>
              </ModalLast>
              <Button onClick={handleCloseModal}>Close</Button>
            </ModalDesc>
            
            
          </ModalContent>
        </ModalOverlay>
      )}

      {editModalOpen && (
        <ModalOverlay>
          <ModalContent>
         
            <ModalNav>
            <h3>Edit Notices</h3>
            </ModalNav>
            <ModalDesc>
              <ModalType>
              <h4><span className='star'>*</span> Publish Type </h4>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16" color='#1dbfc1'>
              <circle cx="8" cy="8" r="8"/>
              </svg>
              <p>All</p>
              </ModalType>
              <ModalFlex>
                  <h4> <span className='star'>*</span> Published To</h4>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16" color='#1dbfc1'>
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                  </svg>
                  <h4>Students</h4>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16" color='#1dbfc1'>
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                  </svg>
                  <h4>Teachers</h4>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16" color='#1dbfc1'>
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                  </svg>
                  <h4>Parents</h4>
              </ModalFlex>
              <ModalTwo>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16" color='#1dbfc1'>
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                  </svg>
                  <h4>Staffs</h4>
              </ModalTwo>
              <h4><span className='star'>*</span> Title</h4>
              <input type='text' readOnly value='Test Notice'></input>
              <ModalDate>
              <h4><span className='star'>*</span> Start Date</h4>
              <h4><span className='star'>*</span> End Date</h4>
              </ModalDate>
              <ModalInput>
              <input value='2023-06-26' type='date' readOnly ></input>
              <input value='2023-06-27' type='date' readOnly ></input>
              </ModalInput>
              <h4>Attachment</h4>
              <input type='file'></input>
              <h4>Description</h4>
              <input className='desc' type='text' readOnly value='this is my phone number is y'></input>
              <ModalLast>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-square" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
              </svg>
              <h4>Notify via email</h4>
              </ModalLast>
              <ModalButton>
                <Button className='btn-1'>Update</Button>
                <Button className='btn-2' onClick={handleCloseModal}>Close</Button>
              </ModalButton>
            
            </ModalDesc>
          </ModalContent>
        </ModalOverlay>
      )}
    </Table>
    </TableContainer>
    </Component>
  );
};
