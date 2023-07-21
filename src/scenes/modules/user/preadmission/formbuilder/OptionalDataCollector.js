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
import TextArea from "./OptionalFields/TextArea";
import CheckBox from "./OptionalFields/CheckBox";
import File from "./OptionalFields/File";
import RadioBuilder from "./OptionalFields/RadioBuilder";

const OptionalDataCollector = ({
  schemaBuilder,
  handleCheckChange,
  handleTextChange,
  handleSelectChange,
  handleDateChange,
  handleOptionChange,
  handleOptionDelete,
  handleAddOption,
  handleRadioChange,
  handleRadioDelete,
  handleAddRadio,
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
    case "textarea":
      return (
        <TextArea
          schemaBuilder={schemaBuilder}
          handleTextChange={handleTextChange}
          handleCheckChange={handleCheckChange}
          handleDateChange={handleDateChange}
          handleOptionChange={handleOptionChange}
          handleOptionDelete={handleOptionDelete}
          handleAddOption={handleAddOption}
        />
      );
    case "checkbox":
      return (
        <CheckBox
          schemaBuilder={schemaBuilder}
          handleTextChange={handleTextChange}
          handleCheckChange={handleCheckChange}
          handleDateChange={handleDateChange}
          handleOptionChange={handleOptionChange}
          handleOptionDelete={handleOptionDelete}
          handleAddOption={handleAddOption}
        />
      );
    case "file":
      return (
        <File
          schemaBuilder={schemaBuilder}
          handleTextChange={handleTextChange}
          handleCheckChange={handleCheckChange}
          handleDateChange={handleDateChange}
          handleOptionChange={handleOptionChange}
          handleOptionDelete={handleOptionDelete}
          handleAddOption={handleAddOption}
        />
      );
    case "radio":
      return (
        <RadioBuilder
          schemaBuilder={schemaBuilder}
          handleTextChange={handleTextChange}
          handleCheckChange={handleCheckChange}
          handleDateChange={handleDateChange}
          handleOptionChange={handleOptionChange}
          handleOptionDelete={handleOptionDelete}
          handleAddOption={handleAddOption}
          handleAddRadio={handleAddRadio}
            handleRadioChange={handleRadioChange}
            handleRadioDelete={handleRadioDelete}
        />
      );
    default:
      break;
  }
};

export default OptionalDataCollector;
