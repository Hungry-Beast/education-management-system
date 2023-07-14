import { Delete, Edit } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import styled from "styled-components";

const RadioBuilder = ({
  schema,
  register,
  editSchema,
  deleteSchema,
  errors,
  control,
}) => {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">{schema?.name}</FormLabel>
      <Controller
        name={schema?.name}
        control={control}
        required
        //   defaultValue={1}
        render={({ field }) => (
          <RadioGroup
            row={schema?.row}
            
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            {...field}
          >
            {schema?.radios?.map((radio) => (
              <FormControlLabel
                key={radio}
                value={radio}
                control={<Radio />}
                label={radio}
              />
            ))}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};

export default RadioBuilder;
