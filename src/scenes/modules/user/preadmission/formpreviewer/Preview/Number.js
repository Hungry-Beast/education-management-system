import { Delete, Edit } from "@mui/icons-material";
import { Alert, Box, Button, IconButton, TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Number = ({ schema, register, editSchema, deleteSchema, errors }) => {
  return (
    <TextField
      name={schema.name}
      label={schema.label}
      type="number"
      required={schema.required}
      sx={{ gridColumn: `span ${schema.gridSpan}` }}
      {...register(schema.name, {
        required: schema.required,
        max: schema.max,
        min: schema.min,
        pattern: schema.pattern,
      })}
      fullWidth
    />
  );
};

export default Number;
