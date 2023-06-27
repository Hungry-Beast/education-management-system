import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar ,GridOverlay} from "@mui/x-data-grid";
import { Button, ButtonGroup, IconButton, colors } from "@mui/material";
import { Delete, Edit, Link, List, Visibility } from "@mui/icons-material";



const columns = [
  { field: "id", headerName: "Sl.No.", width: 100 },
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
    width: 200,
    headerAlign: "center",
    align: "center",
    // editable: true,
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
    width: 180,
    headerAlign: "center",
    align: "center",
  },
];

const rows=[];
 



export default function ViewTraining() {
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
