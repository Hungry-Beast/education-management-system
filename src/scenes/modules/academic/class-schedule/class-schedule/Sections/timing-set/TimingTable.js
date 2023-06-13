import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button, ButtonGroup, IconButton, colors } from "@mui/material";
import { Delete, Edit, Link, List, Visibility } from "@mui/icons-material";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 350,
    // editable: true,
    headerAlign: "center",
    align: "center",
  },
  
  {
    field: "description",
    headerName: "Description",
    width: 450,
    // editable: true,
    headerAlign: "center",
    align: "center",
  },
  

  {
    field: "actions",
    headerName: "Actions",
    renderCell: (data) => {
      return (
        <>
          <Button
            sx={{ mx: "5px" }}
            variant="outlined"
            color="success"
            startIcon={<Visibility />}
          >
            View
          </Button>
          
        </>
      );
    },
    width: 500,
    headerAlign: "center",
    align: "center",
  },
];

const data = [
  {
    id: 1,
    name: "Class 1",
    description: "Class 1 description",
  }
 

];
export default function ClassTable() {
  return (
    <Box sx={{ height: 600, width: 1, mt: 5 }}>
      <DataGrid
        rows={data}
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
