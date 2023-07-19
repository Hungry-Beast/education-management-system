import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar ,GridOverlay} from "@mui/x-data-grid";
import { Button, ButtonGroup, IconButton, colors } from "@mui/material";
import { Delete, Edit, Link, List, Visibility } from "@mui/icons-material";




const columns = [
  { field: "id", headerName: "Sl.No.", width: 100 },
  {
    field: "Invoice No",
    headerName: "Invoice No",
    width: 130,
    // editable: true,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Fees Name",
    headerName: "Fees name",
    width: 130,
    headerAlign: "center",
    align: "center",
    // editable: true,
  },
  
  {
    field: "student",
    headerName: "Student",
    type: "number",
    width: 130,

    headerAlign: "center",
    align: "center",
  },
  {
    field: "amount paid",
    headerName: "Amount Paid",
    width: 130,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "payment type",
    headerName: "Payment Type",
    width: 130,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "payment mode",
    headerName: "Payment Mode",
    width: 130,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Transaction ID",
    headerName: "Transaction Id",
    width: 130,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Transaction Date",
    headerName: "Transaction Date",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
];

const rows=[];
 



export default function FinanceTable() {
  return (
    <Box sx={{ height: 150, width: 1, mt: 0, mr:3, ml:3}}>
      <DataGrid
        rows={rows}
        // disableColumnFilter
        // disableColumnSelector
        // disableDensitySelector
        columns={columns}
        
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
      />
    </Box>
  );
}
