import { Delete, Edit } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import styled from "styled-components";

const SelectComponent = ({
  schema,
  register,
  editSchema,
  deleteSchema,
  errors,
  control
}) => {
  return (
    <Controller
      name={schema?.name}
      control={control}
      required
      //   defaultValue={1}
      render={({ field }) => (
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{schema.label}</InputLabel>
          <Select
            required={schema.required}
            name={schema.name}
            label={schema.label}
            sx={{ gridColumn: `span ${schema.gridSpan ? "2" : "1"}` }}
            {...register(schema.name, {
              required: schema.required,
            })}
            fullWidth
          >
            {schema?.options?.map((option, index) => (
              <MenuItem value={option.value}>{option.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
};

export default SelectComponent;
