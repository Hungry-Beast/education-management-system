import { Delete, Edit } from "@mui/icons-material";
import { Alert, Box, Button, IconButton, TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Text from "./Preview/Text";
import Number from "./Preview/Number";
import SelectComponent from "./Preview/Select";
import Date from "./Preview/Date";

const Fields = ({
  schema,
  register,
  editSchema,
  deleteSchema,
  errors,
  control,
}) => {
  switch (schema.type) {
    case "text":
      return (
        <Text
          schema={schema}
          register={register}
          editSchema={editSchema}
          deleteSchema={deleteSchema}
          errors={errors}
        />
      );
    case "number":
      return (
        <Number
          schema={schema}
          register={register}
          editSchema={editSchema}
          deleteSchema={deleteSchema}
          errors={errors}
        />
      );
    case "date":
      return (
        <Date
          control={control}
          schema={schema}
          register={register}
          editSchema={editSchema}
          deleteSchema={deleteSchema}
          errors={errors}
        />
      );
    case "select":
      return (
        <SelectComponent
          control={control}
          schema={schema}
          register={register}
          editSchema={editSchema}
          deleteSchema={deleteSchema}
          errors={errors}
        />
      );
    default:
      break;
  }
};

export default Fields;
