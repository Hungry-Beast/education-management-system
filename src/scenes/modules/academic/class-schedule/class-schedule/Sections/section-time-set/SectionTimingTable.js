import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {
  Button,
  ButtonGroup,
  FormControl,
  IconButton,
  InputLabel,
  Select,
  colors,
} from "@mui/material";
import { Delete, Edit, Link, List, Visibility } from "@mui/icons-material";
import MenuItem from "@mui/material/MenuItem";
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "section",
    headerName: "Section",
    width: 350,
    // editable: true,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "class",
    headerName: "Class",
    width: 350,
    // editable: true,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "schedule",
    headerName: "Schedule",
    width: 350,
    // editable: true,
    headerAlign: "center",
    align: "center",
    renderCell: (e) => {
      return (
        <Box sx={{ width: "80%" }}>
        <FormControl fullWidth size="small">

          <Select   defaultValue={1}>
            <MenuItem value={1}>Primary School</MenuItem>
            <MenuItem value={2}>High School</MenuItem>
          </Select>
        </FormControl>
        </Box>
      );
    },
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
