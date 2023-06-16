import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { ImageContext } from "../../../../../context/Context";
import { Controller, useForm } from "react-hook-form";
import { useEffect } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Form = styled.form`
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  width: 100%;
  margin: 20px 10px;
  gap: 20px;
`;

const FormComponent = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const [context, setContext] = useContext(ImageContext);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form>
      
    </Form>
  );
};

export default FormComponent;
