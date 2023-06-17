import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  colors,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import Switch from "@mui/material/Switch";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { Box } from "@mui/system";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import Stack from "@mui/material/Stack";

import {
  StyledProfileCard,
  StyledProfileBorder,
  StyledProfileFirtCard,
  Label,
  StyledProfileFirstLeftCard,
  StyledProfileFirstRightCard,
  StyledRfid,
  StyledStaffPersonal,
  StyledProfileSecondCard,
  StyledProfileSecondLeftCard,
  StyledProfileSecondRightCard,
  StyledCommunicationDetailsLine,
  StyledProfileThirdCard,
  StyledProfileThirdLeftCard,
  StyledToggleEdit,
  StyledCommunicationDetails,
  StyledPhoto,
  StyledRadio,
} from "./profile.styles.js";

const Form = styled.form`
  margin: 90px 0;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;

  grid-template-columns: 0.1fr;
  gap: 15px;
  justify-content: space-between;
`;

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Profile() {

  const [isDisabled, setIsDisabled] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      subjectName: "",
      subjectCode: "",
      subjectCredit: "",
      //   subjectType: 1,
    },
  });
  const onclick = (data) => console.log(data);


  return (
    //  ProfileDetails Wrapper Card starts
    <StyledProfileCard>
      {/* profile border starts */}
      <StyledProfileBorder>
        {/* first detail card section */}



        <StyledToggleEdit onClick={() => setIsDisabled(!isDisabled)}>
                        {isDisabled ? 'Edit Data' : 'Edit Data'}
          
          <Switch {...label} defaultChecked  />
        </StyledToggleEdit>

        <Form onSubmit={handleSubmit(onclick)}>
          <StyledProfileFirtCard>
            {/* profile left side card */}

            <StyledProfileFirstLeftCard>
              <StyledRfid>RFID:</StyledRfid>

              <Label>Role:</Label>
              <TextField
               disabled={isDisabled}
                fullWidth
                sx={{ gridColumn: "span 1" }}
                {...register("Role")}
              />
            </StyledProfileFirstLeftCard>

            {/* profile right side card */}
            <StyledProfileFirstRightCard>
              <Label>Designation:</Label>
              <TextField
               disabled={isDisabled}
                fullWidth
                sx={{ gridColumn: "span 1" }}
                {...register("Designation")}
              />
              <Label>Exp in Year:</Label>
              <TextField
              disabled={isDisabled}
                fullWidth
                sx={{ gridColumn: "span 1" }}
                {...register("ExpYear")}
              />
            </StyledProfileFirstRightCard>
          </StyledProfileFirtCard>

          <StyledStaffPersonal>
            <h1>Staff Personal</h1>
          </StyledStaffPersonal>

          <StyledProfileSecondCard>
            <StyledProfileSecondLeftCard>
              <Label>First Name</Label>
              <TextField
              disabled={isDisabled}
                fullWidth
                sx={{ gridColumn: "span 1" }}
                {...register("FirstName")}
              />

              <Label>Last Name</Label>
              <TextField
              disabled={isDisabled}
                fullWidth
                sx={{ gridColumn: "span 1" }}
                {...register("LastName")}
              />

              <Label>Date of Birth staff</Label>
              <TextField
              disabled={isDisabled}
                fullWidth
                sx={{ gridColumn: "span 1" }}
                {...register("DateofBirth")}
              />

              <Label>PAN NO</Label>
              <TextField
              disabled={isDisabled}
                fullWidth
                sx={{ gridColumn: "span 1" }}
                {...register("PanNo")}
              />
              <Label>Designation</Label>
              <TextField
              disabled={isDisabled}
                fullWidth
                sx={{ gridColumn: "span 1" }}
                {...register("Designation")}
              />
              <Label>Father name</Label>
              <TextField
              disabled={isDisabled}
                fullWidth
                sx={{ gridColumn: "span 1" }}
                {...register("FatherName")}
              />
              <Label>Mobile No</Label>
              <TextField
              disabled={isDisabled}
                fullWidth
                sx={{ gridColumn: "span 1" }}
                {...register("MobileNo")}
              />
              {/* <Label>Photo</Label>
            <TextField sx={{ gridColumn: "span 1" }} /> */}
              <StyledPhoto>
                <Label>Photo</Label>

                <Stack direction="row" alignItems="center" spacing={2}>
                  <Button variant="contained" component="label">
                    Choose File
                    <input hidden accept="image/*" multiple type="file" disabled={isDisabled} />
                  </Button>
                </Stack>
              </StyledPhoto>
            </StyledProfileSecondLeftCard>

            <StyledProfileSecondRightCard>
              <Label>Middle Name</Label>
              <TextField
              disabled={isDisabled}
                fullWidth
                sx={{ gridColumn: "span 1" }}
                {...register("MiddleName")}
              />

              <Label>Gender</Label>
              <TextField
              disabled={isDisabled}
                fullWidth
                sx={{ gridColumn: "span 1" }}
                {...register("Gender")}
              />

              <Label>AADHAR No</Label>
              <TextField
              disabled={isDisabled}
                fullWidth
                sx={{ gridColumn: "span 1" }}
                {...register("AadharNo")}
              />

              <StyledRadio>
                <Label>Blood Group</Label>
                <Controller
               
                  control={control}
                  name="checkbox"
                  defaultValue=""
                  render={({ field }) => (
                    <RadioGroup sx={{display:"flex",flexDirection:"row"}} {...field}>
                      <FormControlLabel
                       disabled={isDisabled}
                        value="choice-1"
                        control={<Radio />}
                        label="A+"
                      />

                      <FormControlLabel
                       disabled={isDisabled}
                        value="choice-2"
                        control={<Radio />}
                        label="A-"
                      />

                      <FormControlLabel
                       disabled={isDisabled}
                        value="choice-3"
                        control={<Radio />}
                        label="B+"
                      />

                      <FormControlLabel
                       disabled={isDisabled}
                        value="choice-4"
                        control={<Radio />}
                        label="B-"
                      />

                      <FormControlLabel
                       disabled={isDisabled}
                        value="choice-5"
                        control={<Radio />}
                        label="O+"
                      />

                      <FormControlLabel
                       disabled={isDisabled}
                        value="choice-6"
                        control={<Radio />}
                        label="O-"
                      />
                    </RadioGroup>
                  )}
                />
              </StyledRadio>

        

              <Label>Date of Joining</Label>
              <TextField
              disabled={isDisabled}
                fullWidth
                sx={{ gridColumn: "span 1" }}
                {...register("DateOfjoining")}
              />
              <Label>Mother name</Label>
              <TextField
              disabled={isDisabled}
                fullWidth
                sx={{ gridColumn: "span 1" }}
                {...register("MotherName")}
              />
              <Label>Email ID</Label>
              <TextField
              disabled={isDisabled}
                fullWidth
                sx={{ gridColumn: "span 1" }}
                {...register("EmailId")}
              />
            </StyledProfileSecondRightCard>
          </StyledProfileSecondCard>

          {/* Communication details start */}

          <StyledCommunicationDetailsLine></StyledCommunicationDetailsLine>

          <StyledCommunicationDetails>
            Communication Details
          </StyledCommunicationDetails>

          <StyledProfileThirdCard>
            <StyledProfileThirdLeftCard>
              <Label>PIN</Label>
              <TextField
              disabled={isDisabled}
                fullWidth
                sx={{ gridColumn: "span 1" }}
                {...register("Pin")}
              />
              <Label>Vill/Ward</Label>
              <TextField
              disabled={isDisabled}
                fullWidth
                sx={{ gridColumn: "span 1" }}
                {...register("Vill/Ward")}
              />
              <Label>District</Label>
              <TextField
              disabled={isDisabled}
                fullWidth
                sx={{ gridColumn: "span 1" }}
                {...register("District")}
              />
            </StyledProfileThirdLeftCard>

            <StyledProfileThirdLeftCard>
              <Label>PO</Label>
              <TextField
              disabled={isDisabled}
                fullWidth
                sx={{ gridColumn: "span 1" }}
                {...register("Po")}
              />
              <Label>PS</Label>
              <TextField
              disabled={isDisabled}
                fullWidth
                sx={{ gridColumn: "span 1" }}
                {...register("Ps")}
              />
              <Label>State</Label>
              <TextField
              disabled={isDisabled}
                fullWidth
                sx={{ gridColumn: "span 1" }}
                {...register("State")}
              />
            </StyledProfileThirdLeftCard>
          </StyledProfileThirdCard>
          {/* first detail card section ends */}
        </Form>
      </StyledProfileBorder>
      {/* profile border ends */}
    </StyledProfileCard>
    // ProfileDetails Wrapper Card ends
  );
}
