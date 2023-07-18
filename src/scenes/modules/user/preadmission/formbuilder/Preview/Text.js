import { Delete, Edit } from "@mui/icons-material";
import { Alert, Box, Button, IconButton, TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Text = ({schema, register, editSchema, deleteSchema, errors }) => {
  return (
      <TextField
        required={schema.required}
        name={schema.name}
        label={schema.label}
        sx={{ gridColumn: `span ${schema.gridSpan?"2":"1"}` }}
        // {...register(schema.name, {
        //   required: schema.required,
        //   maxLength: schema.maxLength,
        //   minLength: schema.minLength,
        //   pattern: schema.pattern,
        // })}
        fullWidth
      />
    
  );
};

export default Text;
