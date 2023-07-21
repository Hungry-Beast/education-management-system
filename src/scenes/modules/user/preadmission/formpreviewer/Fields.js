import { Delete, Edit } from "@mui/icons-material";
import { Alert, Box, Button, IconButton, TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Text from "./Preview/Text";
import Number from "./Preview/Number";
import SelectComponent from "./Preview/Select";
import Date from "./Preview/Date";
import TextArea from "./Preview/TextArea";
import CheckboxBuilder from "./Preview/CheckboxBuilder";
import File from "./Preview/File";
import RadioBuilder from "./Preview/RadioBuilder";
import HeaderBuilder from "./Preview/HeaderBuilder";

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

    case "textarea":
      return (
        <TextArea
          control={control}
          schema={schema}
          register={register}
          editSchema={editSchema}
          deleteSchema={deleteSchema}
          errors={errors}
        />
      );
    case "checkbox":
      return (
        <CheckboxBuilder
          control={control}
          schema={schema}
          register={register}
          editSchema={editSchema}
          deleteSchema={deleteSchema}
          errors={errors}
        />
      );
    case "file":
      return (
        <File
          control={control}
          schema={schema}
          register={register}
          editSchema={editSchema}
          deleteSchema={deleteSchema}
          errors={errors}
        />
      );
    case "radio":
      return (
        <RadioBuilder
          control={control}
          schema={schema}
          register={register}
          editSchema={editSchema}
          deleteSchema={deleteSchema}
          errors={errors}
        />
      );
    case "header":
      return (
        <HeaderBuilder
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
