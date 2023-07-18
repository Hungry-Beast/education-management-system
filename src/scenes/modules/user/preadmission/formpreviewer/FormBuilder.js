import {
  Alert,
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Fields from "./Fields";
import { Delete, Edit } from "@mui/icons-material";
import { useLocation } from "react-router-dom";

const MainComponent = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 3fr; */
  gap: 0 30px;
  width: calc(100%);
  margin: 5px auto;
`;

const Component = styled.form`
  width: 100%;
  height: 100%;
  padding: 10px 16px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px 20px;
  align-items: center;
  justify-content: space-between;
`;

const FormDisplayer = styled.div`
  width: 100%;
  height: max-content;
  /* padding: 24px; */
  background-color: #fff;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 30px;

  /* align-items: center; */
  /* justify-content: space-between; */
`;
const ContainerBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 10px 20px;
  grid-column: span ${(props) => (props.gridSpan ? 2 : 1)};
`;

const typeOptions = [
  "text",
  "number",
  "date",
  "select",
  // "autocomplete",
  "textarea",
  "checkbox",
  "radio",
  "file",
  "header",
];

const schemaOptions = [
  {
    type: "text",
    name: "",
    label: "",
    minLenght: "",
    maxLength: "",
    pattern: "",
    fullWidth: false,
  },
  {
    type: "textArea",
    name: "",
    label: "",
    minRows: 3,
    minLenght: "",
    maxLength: "",
    pattern: "",
    fullWidth: false,
  },
  {
    type: "select",
    name: "",
    label: "",
    minRows: 3,
    minLenght: "",
    maxLength: "",
    pattern: "",
    fullWidth: "",
    multiple: false,
    options: [],
    fullWidth: false,
  },
];
export default function FormPreview() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const location = useLocation();

  const [formSchema, setFormSchema] = useState([]);

  useEffect(() => {
    console.log(location.state);
    setFormSchema(location.state);
  }, []);

  const onSubmit = (data) => console.log(data);

  return (
    <MainComponent>
      <Component onSubmit={handleSubmit(onSubmit)}>
        <FormDisplayer>
          {formSchema?.map((schema) => (
            <ContainerBox gridSpan={schema?.gridSpan}>
              <Fields
                key={schema.id}
                schema={schema}
                register={register}
                // editSchema={editSchema}
                // deleteSchema={deleteSchema}
                errors={errors}
                control={control}
              />

              {schema.errorMessage ||
                (errors[schema.name] && (
                  <Alert severity="error">
                    {schema.errorMessage || errors[schema?.name]?.message}
                  </Alert>
                ))}
            </ContainerBox>
          ))}
        </FormDisplayer>
        <Box display="flex" justifyContent={"flex-end"} alignItems={"center"} width="100%">
          <Button type="submit" color="success" variant="contained">
            Submit
          </Button>
        </Box>
      </Component>
    </MainComponent>
  );
}
