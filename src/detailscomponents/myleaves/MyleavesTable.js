import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import MyLeavesModal from "./MyleavesModal";

const style = {
  // position: "absolute",
  // top: "50%",
  // left: "50%",
  // transform: "translate(-50%, -50%)",
  margin: "10rem auto",
  borderRadius: "0.5rem",
  width: 500,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 0,
  p: 2,
};

const StyledModal = styled.div`
  button {
    background-color: #1dbfc1;
    border: none;
    border-radius: 0.2rem;
    padding: 0.5rem;
    color: white;
  }
`;

const StyledHeadingModal = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  text-align: center;
  border-bottom: 0.1rem solid lightgray;

  h1 {
    font-size: 1.2rem;
  }
`;

const StyledDate = styled.div`
  display: flex;
  gap: 5rem;
`;

const StyledFrom = styled.div`
  h1 {
    color: #3246d3;
    font-size: 1.1rem;
    margin: 0;
  }

  input {
    width: 10rem;
    padding: 0.3rem;
  }
  /* input:active {
    width: 10%;
    border: solid #3246d3;
  } */
`;

const StyledTill = styled.div`
  h1 {
    color: #3246d3;
    font-size: 1.1rem;
    margin: 0;
  }

  input {
    width: 10rem;
    padding: 0.3rem;
  }
  /* input:active {
    width: 30%;
    border: solid #3246d3;
  } */
`;

const StyledReason = styled.div`
  h1 {
    font-size: 1.1rem;
    color: #3246d3;
  }

  input {
    width: 100%;
    padding-bottom: 10rem;
    font-size: 1.1rem;
    border: solid lightblue;
  }

  input:active {
    border: solid green;
  }
`;

const StyledButtons = styled.div`
  display: flex;
  gap: 0.2rem;
  margin-left: 75%;
  margin-top: 0.7rem;
  align-items: center;
`;
const StyledSaveButton = styled.div`
  button {
    background-color: #1dbfc1;
    padding: 0.8rem;
    border: none;
    border-radius: 0.2rem;
  }
`;

const StyledCloseButton = styled.div`
  button {
    background-color: #e4e6ef;
    padding: 0.8rem;
    font-size: 0.9rem;
    border: none;
    border-radius: 0.2rem;
  }
`;

const ModalButton = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <StyledModal>
      <Button onClick={handleOpen}>Apply</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
           <MyLeavesModal handleClose={handleClose}/>
      </Modal  >
  
    </StyledModal >
  );
};

const columns = [
  { field: "id", headerName: "#", flex: 1 },
  { field: "mindays", headerName: "Leave Type", flex: 1 },
  { field: "maxdays", headerName: "Leave Assigned", flex: 1 },
  { field: "type", headerName: "Leave Available", flex: 1 },
  { field: "typename", headerName: "Carry Over", flex: 1 },
  { field: "verifyby", headerName: "Valid From", flex: 1 },
  {
    field: "reverify",
    headerName: "Valid Till",
    flex: 1,
  },
  {
    field: "action",
    headerName: "Action",
    flex: 1,
    renderCell: (params) => <ModalButton />,
  },
];

const rows = [
  {
    id: 1,
    mindays: "Sick Leaves(SL)",
    maxdays: "10",
    type: "10",
    typename: "Yes",
    verifyby: "01-01-2020",
    reverify: "31-12-2020",
  },
  {
    id: 2,
    mindays: "Sick Leaves(SL)",
    maxdays: "10",
    type: "10",
    typename: "Yes",
    verifyby: "01-01-2020",
    reverify: "31-11-2020",
  },
  {
    id: 3,
    mindays: "Special Prev Leave(SPL)",
    maxdays: "5",
    type: "5",
    typename: "No",
    verifyby: "01-04-2022",
    reverify: "31-03-2023",
  },
  {
    id: 4,
    mindays: "Regularisation(RG)",
    maxdays: "10",
    type: "10",
    typename: "No",
    verifyby: "01-01-2020",
    reverify: "31-12-2020",
  },
  {
    id: 5,
    mindays: "Regularisation(RG)",
    maxdays: "10",
    type: "10",
    typename: "No",
    verifyby: "01-04-2023",
    reverify: "31-03-2024",
  },
];

export default function HealthTable() {
  return (
    <div style={{ height: 400, width: "100%", marginTop: "20px" }}>
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
