<<<<<<< HEAD
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];
=======
import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const EditDeleteButton = () => {
  return (
    <>
      <EditIcon /> <DeleteIcon />
    </>
  );
};

// const columns = [

//   {
//     field: 'SrNo.',
//     headerName: 'Sr.No.',
//     width: 120,
//     editable: true,
//   },
//   {
//     field: 'Title',
//     headerName: 'Title',
//     width: 140,
//     editable: true,
//   },
//   {
//     field: 'Description',
//     headerName: 'Description',
//     type: 'number',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'Attachment',
//     headerName: 'Attachment',
//     width: 180,
//     editable: true,
//   },
//   {
//     field: 'Action',
//     headerName: 'Action',
//     width: 150,
//     editable: true,
//   },
// ];
>>>>>>> f8060d492a306434678af6ef883d7a0cce8125cc

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

<<<<<<< HEAD
export default function HealthTable() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
=======
const columns = [
  { field: "id", headerName: "Sl No", flex: 1 },
  { field: "mindays", headerName: "Min Days", flex: 1 },
  { field: "maxdays", headerName: "Max Days", flex: 1 },
  { field: "type", headerName: "Type", flex: 1 },
  { field: "typename", headerName: "Type Name", flex: 1 },
  { field: "verifyby", headerName: "Verify By", flex: 1 },
  {
    field: "reverify",
    headerName: "Re-verify for Students/Verify By for Others",
    flex: 3,
  },
  {
    field: "action",
    headerName: "Action",
    flex: 1,
    renderCell: (params) => <EditDeleteButton />,
  },
];

const rows = [
  {
    id: 1,
    mindays: "OTP registration",
    maxdays: "Snow",
    type: "teacher",
    typename: "",
    verifyby: "",
    reverify: "RAJNISH KUMAR[teacher]",
  },
  {
    id: 2,
    mindays: "Fees Paid",
    maxdays: "Lannister",
    type: "teacher",
    typename: "",
    verifyby: "",
    reverify: "PRANAB GOSWAMI[staff]",
  },
  {
    id: 3,
    mindays: "OTP Testing",
    maxdays: "Lannister",
    type: "staff",
    typename: "",
    verifyby: "",
    reverify: "PRANAB GOSWAMI[staff]",
  },
  {
    id: 4,
    mindays: "OTP Testing",
    maxdays: "Lannister",
    type: "class",
    typename: "",
    verifyby: "",
    reverify: "	ARINDOM CHATTERJEE[teacher]",
  },
];

export default function HealthTable() {
  return (
      <div style={{ height: 400, width: "100%", marginTop: "40px" }}>
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
>>>>>>> f8060d492a306434678af6ef883d7a0cce8125cc
