import { Delete, Edit } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  TextField,
} from "@mui/material";
import React from "react";
import styled from "styled-components";

const CheckboxBuilder = ({
  schema,
  register,
  editSchema,
  deleteSchema,
  errors,
}) => {
  return (
    <FormGroup  sx={{ gridColumn: `span ${schema.gridSpan ? "2" : "1"}` }}>
      <FormControlLabel
        control={
          <Checkbox
            color="success"
            required={schema.required}
            name={schema.name}
            label={schema.label}
            // {...register(schema.name, {
            //   required: schema.required,
            //   maxLength: schema.maxLength,
            //   minLength: schema.minLength,
            //   pattern: schema.pattern,
            // })}
            fullWidth
          />
        }
        label={schema.label}
      />
    </FormGroup>
  );
};

export default CheckboxBuilder;
