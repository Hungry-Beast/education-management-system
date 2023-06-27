import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Tooltip,
  Typography,
  colors,
} from "@mui/material";
import { Box } from "@mui/system";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60vw",
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
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(7, 1fr);
  gap: 10px 15px;
  justify-content: space-between;
`;
const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
const Image = styled.img`
  max-height: 200px;
  /* margin: auto; */
`;

const NewAssessmentModal = ({ handleClose }) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({});
  const onSubmit = (data) => console.log(data);
  console.log(watch("imageInput"));
  return (
    <Box sx={style}>
      <HeaderContainer>
        <Typography variant="h3">Add Subject</Typography>
      </HeaderContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="category"
          control={control}
          required
          //   defaultValue={1}
          render={({ field }) => (
            <FormControl size="small" fullWidth>
              <InputLabel required>Select Category</InputLabel>
              <Select
                {...field}
                // defaultValue={1}
                fullWidth
              >
                <MenuItem value={1}>Unit Test</MenuItem>
                <MenuItem value={2}>Halft Yearly</MenuItem>
                <MenuItem value={3}>Assignment</MenuItem>
              </Select>
            </FormControl>
          )}
        />
        <TextField
          fullWidth
          label="Assessment Name"
          required
          size="small"
          {...register("assessmentName", {
            required: "Assessment Name is required",
          })}
          sx={{ gridColumn: "span 1" }}
        />

        <TextField
          fullWidth
          label="Max Point"
          required
          {...register("maxPoint", {
            required: "Max Point is required",
          })}
          sx={{ gridColumn: "span 1" }}
          size="small"
        />

        <TextField
          fullWidth
          label="Passing Point"
          required
          size="small"
          {...register("passingPoint", {
            required: "Passing Point is required",
          })}
          sx={{ gridColumn: "span 1" }}
        />

        <Controller
          name="isPublished"
          control={control}
          required
          //   defaultValue={1}
          render={({ field }) => (
            <FormControl size="small" fullWidth>
              <InputLabel required>Publish</InputLabel>
              <Select
                {...field}
                // defaultValue={1}
                fullWidth
              >
                <MenuItem value={true}>Yes</MenuItem>
                <MenuItem value={false}>No</MenuItem>
              </Select>
            </FormControl>
          )}
        />
        <Controller
          name="gradeScale"
          control={control}
          required
          //   defaultValue={1}
          render={({ field }) => (
            <FormControl size="small" fullWidth>
              <InputLabel required>Grade Scale</InputLabel>
              <Select
                {...field}
                // defaultValue={1}
                fullWidth
              >
                <MenuItem value={1}>Grades</MenuItem>
                <MenuItem value={2}>Percentage</MenuItem>
                <MenuItem value={3}>Actual Points</MenuItem>
                <MenuItem value={4}>Manual Entry</MenuItem>
              </Select>
            </FormControl>
          )}
        />
        <Controller
          name="startDate"
          control={control}
          required
          //   defaultValue={1}
          render={({ field }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  slotProps={{
                    textField: {
                      size: "small",
                      required: true,
                      fullWidth: true,
                    },
                  }}
                  {...field}
                  label="Start Date"
                />
              </DemoContainer>
            </LocalizationProvider>
          )}
        />
        <Controller
          name="endDate"
          control={control}
          required
          //   defaultValue={1}
          render={({ field }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  slotProps={{
                    textField: {
                      size: "small",
                      required: true,
                      fullWidth: true,
                    },
                  }}
                  {...field}
                  label="End Date"
                  minDate={watch("startDate")}
                />
              </DemoContainer>
            </LocalizationProvider>
          )}
        />
        <Box sx={{ gridColumn: "span 1", pt: 1 }}>
          <TextField
            fullWidth
            label="Duration (in minutes)"
            required
            size="small"
            {...register("duration", {
              required: "duration is required",
            })}
          />
        </Box>
        <Controller
          name="startTime"
          control={control}
          required
          //   defaultValue={1}
          render={({ field }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["TimePicker"]}>
                <TimePicker
                  label="Start Time"
                  name="startTime"
                  {...field}
                  slotProps={{
                    textField: {
                      size: "small",
                      required: true,
                      fullWidth: true,
                    },
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
          )}
        />
        <Controller
          name="endTime"
          control={control}
          required
          //   defaultValue={1}
          render={({ field }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["TimePicker"]}>
                <TimePicker
                  label="End Time"
                  name="endTime"
                  minTime={watch("startTime")}
                  {...field}
                  slotProps={{
                    textField: {
                      size: "small",
                      required: true,
                      fullWidth: true,
                    },
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
          )}
        />
        <ImageBox style={{ gridColumn: "3", gridRow: "span 3" }}>
          <Tooltip title="Preview">
            <Image
              src={
                watch("imageInput") && watch("imageInput").length
                  ? URL.createObjectURL(watch("imageInput")[0])
                  : "/assets/noImage.gif"
              }
            />
          </Tooltip>
        </ImageBox>
        <Controller
          name="category"
          control={control}
          required
          //   defaultValue={1}
          render={({ field }) => (
            <FormControl sx={{ mt: "8px" }} size="small" fullWidth>
              <InputLabel required>Select Category</InputLabel>
              <Select
                {...field}
                // defaultValue={1}
                fullWidth
              >
                <MenuItem value={1}>Unit Test</MenuItem>
                <MenuItem value={2}>Halft Yearly</MenuItem>
                <MenuItem value={3}>Assignment</MenuItem>
              </Select>
            </FormControl>
          )}
        />
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <InputLabel required>Image</InputLabel>
          <input
            fullWidth
            required
            type="file"
            size="small"
            accept="image/*"
            style={{ gridColumn: "span 1", margin: "3px 0" }}
            {...register("imageInput", {
              required: "Assessment Name is required",
            })}
          />
        </Box>
        <TextField
          fullWidth
          required
          size="small"
          label="Description"
          multiline
          rows={2}
          {...register("descriptiom", {
            required: "Assessment Name is required",
          })}
          sx={{ gridColumn: "span 2" }}
        />
        <Box
          sx={{ gridColumn: "3" }}
          display="flex"
          alignItems="flex-end"
          justifyContent="flex-end"
        >
          <Button
            type="submit"
            variant="contained"
            color="success"
            sx={{ mx: 2 }}
          >
            Save
          </Button>
          <Button onClick={handleClose} variant="contained" color="warning">
            Close
          </Button>
        </Box>
      </Form>
    </Box>
  );
};

export default NewAssessmentModal;
