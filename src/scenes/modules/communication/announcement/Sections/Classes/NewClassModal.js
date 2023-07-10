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
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "10px",
  p: 0,
};
const HeaderContainer = styled.div`
  width: 100%;
  background-color: #1dbfc1;
  text-align: center;
  border-radius: 10px;
  padding: 25px 10px;
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
`;

const NewClassModal = ({ handleClose }) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      className: "",
      classCode: "",
      classCredit: "",
      isSpecialization: true,
      //   classType: 1,
    },
  });

  const onSubmit = (data) => console.log(data);
  console.log(watch("isSpecialization"));
  return (
    <Box sx={style}>
      <HeaderContainer>
        <Typography variant="h3">Add Class</Typography>
      </HeaderContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          label="Class Name"
          required
          {...register("className", { required: "Class name is required" })}
          sx={{ gridColumn: "span 2" }}
        />

        <TextField
          fullWidth
          label="Class Short Code"
          required
          {...register("classShortCode", {
            required: "Class code  is required",
          })}
          sx={{ gridColumn: "span 1" }}
        />
        <TextField
          fullWidth
          label="Student Limit"
          required
          {...register("studentLimi", {
            required: "Student Limit is required",
          })}
          sx={{ gridColumn: "span 1" }}
        />

        <Controller
          name="isCourse"
          control={control}
          required
          defaultChecked
          //   defaultValue={1}
          render={({ field }) => (
            <FormControl fullWidth sx={{ gridColumn: "span 2" }}>
              <FormControlLabel
                control={<Checkbox {...field} defaultChecked color="success" />}
                label="Course"
              />
            </FormControl>
          )}
        />
        {watch("isCourse") ? (
          <Controller
            name="courseType"
            control={control}
            required
            //   defaultValue={1}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel required>Select Course</InputLabel>
                <Select
                  {...field}
                  // defaultValue={1}
                  fullWidth
                >
                  <MenuItem value={1}>Physics</MenuItem>
                  <MenuItem value={2}>Chemistry</MenuItem>
                  <MenuItem value={3}>Electronics</MenuItem>
                  <MenuItem value={4}>Maths</MenuItem>
                </Select>
              </FormControl>
            )}
          />
        ) : (
          <></>
        )}

        <TextField
          fullWidth
          multiline
          rows={4}
          label="Description"
          required
          {...register("description", { required: "Class type is required" })}
          sx={{ gridColumn: "span 2" }}
        />
        <Button type="submit" variant="contained" color="success">
          Save
        </Button>
        <Button onClick={handleClose} variant="contained" color="warning">
          Close
        </Button>
      </Form>
    </Box>
  );
};

export default NewClassModal;
