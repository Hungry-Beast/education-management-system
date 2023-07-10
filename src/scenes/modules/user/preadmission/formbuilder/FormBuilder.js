import {
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
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Fields from "./Fields";
import OptionalDataCollector from "./OptionalDataCollector";

const MainComponent = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 0 30px;
  width: calc(100% - 30px);
  margin: 15px auto;
`;

const Component = styled.form`
  width: 100%;
  height: 100%;
  padding: 40px 16px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px 20px;
  align-items: center;
  justify-content: space-between;
`;

const FormDisplayer = styled.form`
  width: 100%;
  height: max-content;
  padding: 24px;
  background-color: #fff;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 30px;

  /* align-items: center; */
  /* justify-content: space-between; */
`;

const typeOptions = [
  "text",
  "number",
  "date",
  "select",
  "autocomplete",
  "textarea",
  "checkbox",
  "radio",
  "file",
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
export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const [formSchema, setFormSchema] = useState([]);
  const [schemaBuilder, setSchemaBuilder] = useState({
    name: "",
    label: "",
    type: "",
    minLenght: "",
    maxLength: "",
    pattern: "",
    options: [],
    id: 0,
  });

  // console.log(errors);

  const handleTextChange = (e) => {
    setSchemaBuilder({ ...schemaBuilder, [e.target.name]: e.target.value });
  };
  const handleSelectChange = (e) => {
    setSchemaBuilder({ ...schemaBuilder, [e.target.name]: e.target.value });
  };
  const handleCheckChange = (e) => {
    setSchemaBuilder({ ...schemaBuilder, [e.target.name]: e.target.checked });
  };
  const handleDateChange = (date, name) => {
    const formatedDate = date.$D + "-" + date.$M + "-" + date.$y;
    setSchemaBuilder({ ...schemaBuilder, [name]: formatedDate });
  };
  const addSchema = (e) => {
    e.preventDefault();
    const id = formSchema.at(-1)?.id;
    let tempSchema = schemaBuilder;
    // console.log(formSchema.at(-1).id);
    tempSchema.id = id !== undefined ? id + 1 : 0;

    if (!schemaBuilder.edited) {
      setFormSchema([...formSchema, tempSchema]);
    } else {
      setFormSchema(
        formSchema.map((item) =>
          item.id === schemaBuilder.id ? schemaBuilder : item
        )
      );
    }
    setSchemaBuilder({
      name: "",
      label: "",
      type: "",
      minLenght: "",
      maxLength: "",
      pattern: "",
      options: [],
      id: id,
    });
  };
  const editSchema = (schema) => {
    setSchemaBuilder(schema);
    console.log(schema);
    setFormSchema([
      ...formSchema.map((item) => (item.id === schema.id ? schema : item)),
    ]);
  };
  const deleteSchema = (schema) => {
    setFormSchema(formSchema.filter((item) => item.id !== schema.id));
  };

  return (
    <MainComponent>
      <Component onSubmit={addSchema}>
        <Typography variant="h3" fontWeight={"bolder"}>
          Form Builder
        </Typography>
        <Divider sx={{ border: "1px solid rgba(0,0,0,0.5)", width: "100%" }} />
        <TextField
          fullWidth
          name="label"
          label="Label"
          value={schemaBuilder?.label}
          onChange={handleTextChange}
          required
        />
        <TextField
          fullWidth
          name="name"
          label="DataField Name"
          value={schemaBuilder?.name}
          onChange={handleTextChange}
          required
        />
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            fullWidth
            name="type"
            onChange={handleSelectChange}
            required
            value={schemaBuilder.type}
          >
            {typeOptions.map((option) => (
              <MenuItem value={option} key={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
          <OptionalDataCollector
            schemaBuilder={schemaBuilder}
            handleTextChange={handleTextChange}
            handleCheckChange={handleCheckChange}
            handleSelectChange={handleSelectChange}
            handleDateChange={handleDateChange}
          />
          <Button
            type="submit"
            sx={{ my: 2 }}
            variant="contained"
            color="success"
          >
            Create
          </Button>
        </FormControl>
      </Component>
      <Component>
        <FormDisplayer onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h3" gridColumn="span 2">
            Preview Form
          </Typography>
          <Divider
            sx={{
              border: "1px solid rgba(0,0,0,0.5)",
              width: "100%",
              gridColumn: "span 2",
            }}
          />
          {formSchema?.map((schema) => (
            <ContainerBox>
              <Fields
                key={schema.id}
                schema={schema}
                register={register}
                editSchema={editSchema}
                deleteSchema={deleteSchema}
                errors={errors}
              />

              {schema.errorMessage ||
                (errors[schema.name] && (
                  <Alert severity="error">
                    {schema.errorMessage || errors[schema?.name]?.message}
                  </Alert>
                ))}
              <Box>
                <Button
                  onClick={() => {
                    const tempSchema = schema;
                    tempSchema.inUse = true;
                    tempSchema.edited = true;
                    editSchema(tempSchema);
                  }}
                  variant="contained"
                  color="warning"
                >
                  <Edit />
                </Button>
                <Button
                  onClick={() => deleteSchema(schema)}
                  variant="contained"
                  color="error"
                >
                  <Delete />
                </Button>
              </Box>
            </ContainerBox>
          ))}
        </FormDisplayer>
      </Component>
    </MainComponent>
  );
}
