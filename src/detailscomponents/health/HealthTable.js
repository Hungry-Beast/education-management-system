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
