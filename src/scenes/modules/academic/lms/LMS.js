import { useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button, ButtonGroup, IconButton, colors } from "@mui/material";
import { Delete, Edit, List, Visibility } from "@mui/icons-material";
import styled from "styled-components";
import { ImageContext } from "../../../../context/Context";
import { Link } from "react-router-dom";

const Component = styled.div`
  width: calc(100% - 30px);
  height: 100%;
  padding: 16px;
  background-color: #fff;
  margin: 15px auto;
  border-radius: 10px;
`;

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "class",
    headerName: "Class",
    width: 450,
    // editable: true,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "classCode",
    headerName: "Code",
    width: 250,
    headerAlign: "center",
    align: "center",
    // editable: true,
  },

  {
    field: "actions",
    headerName: "Actions",
    renderCell: (data) => {
      return (
        <Link
          to={`/modules/academic/learning-management-system/link/${data.row.id}`}
        >
          <Button
            sx={{ mx: "5px" }}
            variant="outlined"
            color="success"
            startIcon={<Link />}
          >
            Link
          </Button>
        </Link>
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

export default function LMSLink() {
  const [context, setContext] = useContext(ImageContext);

  useEffect(() => {
    setContext("academic.svg");
  }, []);
  return (
    <Component>
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
    </Component>
  );
}
