import { Delete, Edit } from "@mui/icons-material";
import { Alert, Box, Button, IconButton, TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Text from "./Preview/Text";
import Number from "./Preview/Number";

const ContainerBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  gap: 10px 20px;
`;

const Fields = ({ schema, register, editSchema, deleteSchema, errors }) => {
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
       <></>
      )
    default:
      break;
  }
};

export default Fields;
