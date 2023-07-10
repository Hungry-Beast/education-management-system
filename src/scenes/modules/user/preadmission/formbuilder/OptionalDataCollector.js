import {
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import Text from "./OptionalFields/Text";
import React from "react";
import Number from "./OptionalFields/Number";
import Date from "./OptionalFields/Date";
import Select from "./OptionalFields/Select";

const OptionalDataCollector = ({
  schemaBuilder,
  handleCheckChange,
  handleTextChange,
  handleSelectChange,
  handleDateChange,
  handleOptionChange,
  handleOptionDelete,
  handleAddOption,
}) => {
  switch (schemaBuilder.type) {
    case "text":
      return (
        <Text
          schemaBuilder={schemaBuilder}
          handleTextChange={handleTextChange}
          handleCheckChange={handleCheckChange}
        />
      );
    case "number":
      return (
        <Number
          schemaBuilder={schemaBuilder}
          handleTextChange={handleTextChange}
          handleCheckChange={handleCheckChange}
        />
      );
    case "date":
      return (
        <Date
          schemaBuilder={schemaBuilder}
          handleTextChange={handleTextChange}
          handleCheckChange={handleCheckChange}
          handleDateChange={handleDateChange}
        />
      );
    case "select":
      return (
        <Select
          schemaBuilder={schemaBuilder}
          handleTextChange={handleTextChange}
          handleCheckChange={handleCheckChange}
          handleDateChange={handleDateChange}
          handleOptionChange={handleOptionChange}
          handleOptionDelete={handleOptionDelete}
          handleAddOption={handleAddOption}
        />
      );
    default:
      break;
  }
};

export default OptionalDataCollector;
