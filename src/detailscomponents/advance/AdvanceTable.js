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
  { field: "id", headerName: "#", flex: 1 },
  { field: "mindays", headerName: "Amount(Rs)", flex: 1 },
  { field: "maxdays", headerName: "Request Date", flex: 1 },
  { field: "type", headerName: "Required Date", flex: 1 },
  { field: "typename", headerName: "Re-pay in Month(s)", flex: 1 },
  // { field: "typename", headerName: "Re-pay start Month", flex: 1 },
  { field: "verifyby", headerName: "Payment Date", flex: 1 },
  { field: "status", headerName: "Status", flex: 1 },
  { field: "action", headerName: "Action", flex: 1 },
 
 
];

const rows = [];

export default function TableAdvance() {
  return (
      <div style={{ height: 100, width: "100%", marginTop: "40px" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 20]}
        />
      </div>
  );
}
