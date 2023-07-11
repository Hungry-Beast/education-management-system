import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  colors,
  IconButton,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Close } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",
  p: 0,
};

const HeaderContainer = styled.div`
  width: 100%;
  background-color: #1dbfc1;
  text-align: center;
  border-radius: 10px;
  padding: 18px 10px;
  border-bottom: 2px solid #ffa800;
  margin: 0;
`;

const Form = styled.form`
  margin: 20px 0;
  padding: 15px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  justify-content: space-between;
  width: 990px; /* Set the desired width of the dropdown */
`;
const CloseButton = styled(IconButton)`
  position: absolute;
  bottom: 30px;

  float: right;
`;

const StyledFormControl = styled(FormControl)``;

const StyledCards = styled.div`
  width: 93%;
  border: 0.6px solid black;
  margin: 1.3rem;
  border-radius: 0.4rem;
`;

const StyledBorder = styled.div`
  border: 1px solid black;
`;
const SaveButton = styled(Button)``;

const StyledButtonS = styled.div`
  display: flex;
  gap: 0.7rem;
  margin-left: 70%;
`;

const NotiModal = ({ handleClose }) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      courseName: "",
      courseCode: "",
      courseCredit: "",
      isSpecialization: true,
    },
  });

  const onSubmit = (data) => console.log(data);
  console.log(watch("isSpecialization"));

  return (
    <Box sx={style}>
      <HeaderContainer>
        <Typography variant="h4">Enable Module</Typography>
        <CloseButton onClick={handleClose}>
          <Close />
        </CloseButton>
      </HeaderContainer>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <StyledFormControl>
          <p>Modules</p>
          <Select {...register("courseType")}>
            <MenuItem value={1}>Academic</MenuItem>
            <MenuItem value={2}>Academic session</MenuItem>
            <MenuItem value={3}>Academic session student</MenuItem>
          </Select>
        </StyledFormControl>
      </Form>
      <StyledButtonS>
        <SaveButton variant="contained" onClick={handleSubmit(onSubmit)}>
          Save
        </SaveButton>

        <Button variant="contained" onClick={handleClose}>
          Close
        </Button>
      </StyledButtonS>
    </Box>
  );
};

export default NotiModal;
