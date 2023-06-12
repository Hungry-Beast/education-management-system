import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button, ButtonGroup, IconButton, colors } from "@mui/material";
import { Delete, Edit, Link, List, Visibility } from "@mui/icons-material";

const columns = [
  { field: "id", headerName: "SL No", width: 90 },

  {
    field: "categoryName",
    headerName: "Category Name",
    width: 400,
    headerAlign: "center",
    align: "center",
    // editable: true,
  },
  {
    field: "categoryCode",
    headerName: "Category Code",
    type: "number",
    width: 400,
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
            color="error"
            startIcon={<Delete />}
          >
            Delete
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
    id:1,
    categoryName: "Food",
    categoryCode: 1,
  },
  {
    id:2,
    categoryName: "Food",
    categoryCode: 1,
  },
  {
    id:3,
    categoryName: "Food",
    categoryCode: 1,
  },

];
export default function SubCategoryTable() {
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
