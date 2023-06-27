import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button, ButtonGroup, IconButton, Modal, colors } from "@mui/material";
import {
  CheckCircle,
  Delete,
  Edit,
  Link,
  List,
  Unpublished,
  Visibility,
} from "@mui/icons-material";
import ViewAssessmentModal from "./ViewAssessmentModal";
import { useState } from "react";

const data = [
  {
    id: 1,
    assessmentCategory: "Assessment",
    assessmentName: "Assessment",
    scaleType: "ABC",
    status: true,
  },
  {
    id: 2,
    assessmentCategory: "Assessment",
    assessmentName: "Assessment",
    scaleType: "ABC",
    status: false,
  },
];
export default function AssessmentTable() {
  const [open, setOpen] = React.useState(false);
  const [dataRow, setDataRow] = useState();
  const handleOpen = (inData) => {
    setOpen(true);
    setDataRow(inData);
  };
  const handleClose = () => setOpen(false);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "assessmentCategory",
      headerName: "Assessment Category",
      width: 350,
      // editable: true,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "assessmentName",
      headerName: "Assessment Name",
      width: 350,
      headerAlign: "center",
      align: "center",
      // editable: true,
    },
    {
      field: "scaleType",
      headerName: "Scale Type",
      width: 120,
      headerAlign: "center",
      align: "center",
    },

    {
      field: "status",
      headerName: "Status",
      width: 120,

      headerAlign: "center",
      align: "center",
      renderCell: (data) => {
        return data.row.status ? "Published" : "Not Published";
      },
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
              onClick={() => handleOpen(data?.row)}
            >
              View
            </Button>
            <Button
              sx={{ mx: "5px" }}
              variant="outlined"
              color="success"
              startIcon={data.row.status ? <CheckCircle /> : <Unpublished />}
            >
              {data.row.status ? "Published" : "UnPublished"}
            </Button>
          </>
        );
      },
      width: 500,
      headerAlign: "center",
      align: "center",
    },
  ];
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ViewAssessmentModal data={dataRow} handleClose={handleClose} />
      </Modal>
    </Box>
  );
}
