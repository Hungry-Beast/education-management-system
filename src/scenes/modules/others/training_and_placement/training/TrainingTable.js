import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button, ButtonGroup, IconButton, colors } from "@mui/material";
import { Delete, Edit, Link, List, Visibility } from "@mui/icons-material";

const columns1=[
  { field: "heading", headerName: "Applicant List", width: 120 },
];

const columns = [
  { field: "id", headerName: "Sl.No.", width: 200 },
  {
    field: "uniqueID",
    headerName: "Unique ID",
    width: 200,
    // editable: true,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "training",
    headerName: "Training",
    width: 250,
    headerAlign: "center",
    align: "center",
    // editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    //type: "number",
    width: 250,
    headerAlign: "center",
    align: "center",
  },

  /*{
    field: "studentAssigned",
    headerName: "Student (Assigned)",
    type: "number",
    width: 120,

    headerAlign: "center",
    align: "center",
  },

  {
    field: "sections",
    headerName: "Section(s)",
    renderCell: (data) => {
      return data?.row?.sections?.map((section) => (
        <Button sx={{ mx: "5px" }} key={section.id} variant="outlined">
          {section.value}
        </Button>
      ));
    },
    width: 250,
    headerAlign: "center",
    align: "center",
  },*/
  {
    field: "actions",
    headerName: "Action",
    renderCell: (data) => {
      return (
        <>
          <Button
            sx={{ mx: "5px" }}
            variant="outlined"
            color="secondary"
          >
            Details
          </Button>
          {/*<Button
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
            color="success"
            startIcon={<Link />}
          >
            Link
          </Button>
          <Button
            sx={{ mx: "5px" }}
            variant="outlined"
            color="success"
            startIcon={<List />}
          >
            Sections
          </Button>
          <Button
            sx={{ mx: "5px" }}
            variant="outlined"
            color="error"
            startIcon={<Delete />}
          >
            Delete
      </Button>*/}
        </>
      );
    },
    width: 250,
    headerAlign: "center",
    align: "center",
  },
];

const data = [
  {
    id: 1,
    uniqueID: "TR/19122022/18",
    training: "Teacher training",
    status: "not applied/Enrolled",
  },
 
];
export default function TrainingTable() {
  return (
    <Box sx={{ height: 200, width: 1, mt: 3 }}>
      <DataGrid
        rows={data}
        // disableColumnFilter
        // disableColumnSelector
        // disableDensitySelector
        columns1={columns1}
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
