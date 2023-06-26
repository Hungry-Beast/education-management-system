import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import {FaEdit} from 'react-icons/fa'
import { GrEdit } from "react-icons/gr";
import RolesModal from "./RolesModal";
import { useState } from "react";


const StyledModal = styled.div`
  button {
    background-color: #1dbfc1;
    border: none;
    border-radius: 0.2rem;
    padding: 0.5rem;
    margin-left:1rem;
    color: white;
  }
`;




const ModalButton = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <StyledModal>
      <Button onClick={handleOpen}>
        <BsFillExclamationCircleFill />
        
      </Button>

      <Button onClick={handleOpen}>
        <FaEdit/>
      </Button>

    

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <RolesModal handleClose={handleClose} />
      </Modal>
    </StyledModal>
  );
};



const columns = [
  { field: "id", headerName: "Sl", flex: 1 },
  { field: "mindays", headerName: "Role Name", flex: 1 },
  {
    field: "maxdays",
    headerName: "Permision(s)",
    flex: 1,
    renderCell: (params) => <ModalButton />,
  },
];

const rows = [
  {
    id: 1,
    mindays: "Administrator",
  },
  {
    id: 2,
    mindays: "asset",
    maxdays: "10",
  },
  {
    id: 3,
    mindays: "cafeteria",
    maxdays: "5",
  },
  {
    id: 4,
    mindays: "Enrollment",
    maxdays: "10",
  },
  {
    id: 5,
    mindays: "finance",
    maxdays: "10",
  },
  {
    id: 6,
    mindays: "Housekeeping",
    maxdays: "10",
  },
  {
    id: 7,
    mindays: "Intern Group",
    maxdays: "10",
  },
  {
    id: 8,
    mindays: "librarian",
    maxdays: "",
  },
  {
    id: 9,
    mindays: "parent",
    maxdays: "10",
  },
  {
    id: 10,
    mindays: "Pre-admission",
    maxdays: "10",
  },
  {
    id: 11,
    mindays: "Principal",
    maxdays: "10",
  },
  {
    id: 12,
    mindays: "reception",
    maxdays: "10",
  },
  {
    id: 13,
    mindays: "Security-officer",
    maxdays: "10",
  },
  {
    id: 14,
    mindays: "staff",
    maxdays: "10",
  },
  {
    id: 15,
    mindays: "student",
    maxdays: "10",
  },
  {
    id: 16,
    mindays: "teacher",
    maxdays: "10",
  },
  {
    id: 17,
    mindays: "transport",
    maxdays: "10",
  },
  {
    id: 18,
    mindays: "warden",
    maxdays: "10",
  },
  {
    id: 19,
    mindays: "sweeper",
    maxdays: "10",
  },
  {
    id: 20,
    mindays: "caretaker",
    maxdays: "10",
  },
  {
    id: 21,
    mindays: "Director",
    maxdays: "10",
  },
];

export default function RolesTables()

{
  return (
    <div style={{ height: 1000, width: "100%", marginTop: "20px" }}>
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
  );
}
