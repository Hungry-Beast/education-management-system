import { Delete, Edit } from "@mui/icons-material";
import { Alert, Box, Button, IconButton, TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";

const File = ({ schema, register, editSchema, deleteSchema, errors }) => {
  return (
    <TextField
      accept="image/*" // Specify the accepted file types if needed
      type="file"
      {...register(schema.name, {
        required: `${schema.name} is required`,
        validate: {
          minSize: (value) => {
            if (value[0]?.size < schema.minKb * 1024) {
              return "Invalid file size";
            }
            return true;
          },
          maxSize: (value) => {
            // const maxSizeInBytes = 1024 * 1024; // Example: 1MB
            if (value[0]?.size > schema.maxKb * 1024) {
              return "File size exceeds the maximum limit";
            }
            return true;
          },
        },
      })}
    />
  );
};

export default File;
