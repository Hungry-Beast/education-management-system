import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button, ButtonGroup, IconButton, colors } from "@mui/material";
import { Delete, Edit, Link, List, Visibility } from "@mui/icons-material";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "class",
    headerName: "Class",
    width: 250,
    // editable: true,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "classCode",
    headerName: "Code",
    width: 150,
    headerAlign: "center",
    align: "center",
    // editable: true,
  },
  {
    field: "studentLimit",
    headerName: "Student (Limit)",
    type: "number",
    width: 180,
    headerAlign: "center",
    align: "center",
  },

  {
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
    class: "Abc",
    classCode: "123",
    studentLimit: 10,
    studentAssigned: 10,
    sections: [
      {
        id: 1,
        value: "Abc",
      },
    ],
  },
  {
    id: 1,
    class: "Abc",
    classCode: "123",
    studentLimit: 10,
    studentAssigned: 10,
    sections: [
      {
        id: 1,
        value: "Abc",
      },
    ],
  },
  {
    id: 1,
    class: "Abc",
    classCode: "123",
    studentLimit: 10,
    studentAssigned: 10,
    sections: [
      {
        id: 1,
        value: "Abc",
      },
    ],
  },

];
export default function SectionTimingTable() {
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
