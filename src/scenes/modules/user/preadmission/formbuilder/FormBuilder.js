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
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Fields from "./Fields";
import OptionalDataCollector from "./OptionalDataCollector";
import { Delete, Edit } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

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

const FormDisplayer = styled.div`
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
export default function App() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (e) => {
    // console.log(data);
    e.preventDefault();
    navigate("/formpreview", { state: formSchema });
  };

  const [formSchema, setFormSchema] = useState([]);
  const [schemaBuilder, setSchemaBuilder] = useState({
    name: "",
    label: "",
    type: "",
    minLenght: "",
    maxLength: "",
    pattern: "",
    options: [{ value: "", label: "" }],
    radios: [""],
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
    const formatedDate =
      parseInt(date.$M + 1) + "-" + parseInt(date.$D) + "-" + date.$y;
    console.log(formatedDate);
    setSchemaBuilder({ ...schemaBuilder, [name]: formatedDate });
  };
  const handleOptionChange = (e, index) => {
    setSchemaBuilder((prevObject) => {
      let newOptions = [...prevObject.options];
      newOptions[index][e.target.name] = e.target.value;
      return {
        ...prevObject,
        options: newOptions,
      };
    });
  };
  const handleOptionDelete = (index) => {
    // setSchemaBuilder(schemaBuilder?.options?.filter((ele, i) => i !== index));
    setSchemaBuilder((prevObject) => {
      const newOptions = [...prevObject.options];
      newOptions.splice(index, 1);
      return {
        ...prevObject,
        options: newOptions,
      };
    });
  };

  const handleAddOption = () => {
    // let tempSchemaBuilder = schemaBuilder;
    // tempSchemaBuilder?.options?.push({ label: "", value: "" });
    setSchemaBuilder((prevSchema) => ({
      ...prevSchema,
      options: [...prevSchema.options, { label: "", value: "" }],
    }));
  };
  const handleAddRadio = () => {
    setSchemaBuilder((prevSchema) => ({
      ...prevSchema,
      radios: [...prevSchema.radios, ""],
    }));
  };
  const handleRadioChange = (e, index) => {
    setSchemaBuilder((prevObject) => {
      let newRadios = [...prevObject.radios];
      newRadios[index] = e.target.value;
      return {
        ...prevObject,
        radios: newRadios,
      };
    });
  };
  const handleRadioDelete = (index) => {
    // setSchemaBuilder(schemaBuilder?.options?.filter((ele, i) => i !== index));
    setSchemaBuilder((prevObject) => {
      const newRadios = [...prevObject.radios];
      newRadios.splice(index, 1);
      return {
        ...prevObject,
        radios: newRadios,
      };
    });
  };
  const addSchema = (e) => {
    e.preventDefault();
    const id = formSchema.at(-1)?.id;
    // console.log(formSchema.at(-1).id);

    if (!schemaBuilder.edited) {
      let tempSchema = schemaBuilder;
      tempSchema.id = id !== undefined ? id + 1 : 0;
      if (tempSchema.type === "header") tempSchema.gridSpan = true;
      setFormSchema([...formSchema, tempSchema]);
    } else {
      let tempSchema = schemaBuilder;
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
      options: [{ value: "", label: "" }],
      id: id,
    });
  };
  const editSchema = (schema) => {
    let newSchema = schema;
    newSchema.edited = true;
    setSchemaBuilder(schema);
  };
  const deleteSchema = (schema) => {
    setFormSchema(formSchema.filter((item) => item.id !== schema.id));
  };
  console.log(schemaBuilder);

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
            handleOptionChange={handleOptionChange}
            handleOptionDelete={handleOptionDelete}
            handleAddOption={handleAddOption}
            handleAddRadio={handleAddRadio}
            handleRadioChange={handleRadioChange}
            handleRadioDelete={handleRadioDelete}
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
      <Component onSubmit={onSubmit}>
        <FormDisplayer>
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
          {formSchema?.map((schema, i) => (
            <ContainerBox key={i} gridSpan={schema?.gridSpan}>
              <Fields
                key={schema.id}
                schema={schema}
                register={register}
                editSchema={editSchema}
                deleteSchema={deleteSchema}
                errors={errors}
                control={control}
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
          <Box
            display="flex"
            alignContent="center"
            justifyContent={"flex-end"}
            gridColumn={"span 2"}
          >
            <Button type="submit" color="success" variant="contained">
              Preview
            </Button>
          </Box>
        </FormDisplayer>
      </Component>
    </MainComponent>
  );
}
