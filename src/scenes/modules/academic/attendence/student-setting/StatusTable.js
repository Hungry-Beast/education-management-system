import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button, ButtonGroup, IconButton, colors } from "@mui/material";
import { Delete, Edit, Link, List, Visibility } from "@mui/icons-material";
import styled from "styled-components";

const ColorBox = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "status",
    headerName: "Status",
    width: 250,
    // editable: true,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "shortCode",
    headerName: "Short Code",
    width: 150,
    headerAlign: "center",
    align: "center",
    // editable: true,
  },

  {
    field: "color",
    headerName: "Color",
    renderCell: (data) => {
      return (
        <Box onClick={console.log(data)}>
          <ColorBox color={data?.row?.color} />
        </Box>
      );
    },
    width: 250,
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
            color="secondary"
            startIcon={<Edit />}
          >
            Edit
          </Button>
          <Button
            sx={{ mx: "5px" }}
            variant="outlined"
            color="success"
            startIcon={<Visibility />}
          >
            View
          </Button>

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
    status: "Active",
    shortCode: "123",
    color: colors.indigo[500],
  },
 
];
export default function StatusTable() {
  return (
    <Box sx={{ height: 350, width: 1, mt: 5 }}>
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
