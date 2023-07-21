import { Delete, Edit } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import styled from "styled-components";

const HeaderBuilder = ({
  schema,
  register,
  editSchema,
  deleteSchema,
  errors,
}) => {
  return (
    <Paper
      elevation={5}
      sx={{
        background: "#1dbfc1",
        width: "100%",
        py: 3,
        px: 2,
        color: "white",
      }}
    >
      <Typography variant="h3">{schema?.label}</Typography>
    </Paper>
  );
};

export default HeaderBuilder;
