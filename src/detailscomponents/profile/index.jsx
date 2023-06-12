import React from "react";
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
  const onSubmit = (data) => console.log(data);
  return (
    //  ProfileDetails Wrapper Card starts
    <StyledProfileCard>
      {/* profile border starts */}
      <StyledProfileBorder>
        {/* first detail card section */}
        <StyledToggleEdit>
          Edit Data
          <Switch {...label} defaultChecked />
        </StyledToggleEdit>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <StyledProfileFirtCard>
            {/* profile left side card */}

            <StyledProfileFirstLeftCard>
              <StyledRfid>RFID:</StyledRfid>

              <Label>Role:</Label>
              <TextField fullWidth sx={{ gridColumn: "span 1" }} />
            </StyledProfileFirstLeftCard>

            {/* profile right side card */}
            <StyledProfileFirstRightCard>
              <Label>Designation:</Label>
              <TextField fullWidth sx={{ gridColumn: "span 1" }} />
              <Label>Exp in Year:</Label>
              <TextField sx={{ gridColumn: "span 1" }} />
            </StyledProfileFirstRightCard>
          </StyledProfileFirtCard>

          <StyledStaffPersonal>
            <h1>Staff Personal</h1>
          </StyledStaffPersonal>

          <StyledProfileSecondCard>
            <StyledProfileSecondLeftCard>
              <Label>First Name</Label>
              <TextField fullWidth sx={{ gridColumn: "span 1" }} />

              <Label>Last Name</Label>
              <TextField sx={{ gridColumn: "span 1" }} />

              <Label>Date of Birth staff</Label>
              <TextField sx={{ gridColumn: "span 1" }} />

              <Label>PAN NO</Label>
              <TextField sx={{ gridColumn: "span 1" }} />
              <Label>Designation</Label>
              <TextField sx={{ gridColumn: "span 1" }} />
              <Label>Father name</Label>
              <TextField sx={{ gridColumn: "span 1" }} />
              <Label>Mobile No</Label>
              <TextField sx={{ gridColumn: "span 1" }} />
              {/* <Label>Photo</Label>
            <TextField sx={{ gridColumn: "span 1" }} /> */}
              <StyledPhoto>
                <Label>Photo</Label>

                <Stack direction="row" alignItems="center" spacing={2}>
                  <Button variant="contained" component="label">
                    Choose File
                    <input hidden accept="image/*" multiple type="file" />
                  </Button>
                </Stack>
              </StyledPhoto>
            </StyledProfileSecondLeftCard>

            <StyledProfileSecondRightCard>
              <Label>Middle Name</Label>
              <TextField sx={{ gridColumn: "span 1" }} />

              <Label>Gender</Label>
              <TextField sx={{ gridColumn: "span 1" }} />

              <Label>AADHAR No</Label>
              <TextField sx={{ gridColumn: "span 1" }} />

              <Label>Blood Group</Label>

              <FormControlLabel value="female" control={<Radio />} label="A+" />
              <FormControlLabel value="male" control={<Radio />} label="A-" />
              <FormControlLabel value="other" control={<Radio />} label="B+" />
              <FormControlLabel value="female" control={<Radio />} label="B-" />
              <FormControlLabel value="male" control={<Radio />} label="O-" />
              <FormControlLabel value="other" control={<Radio />} label="O+" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="AB+"
              />
              <FormControlLabel value="male" control={<Radio />} label="AB-" />

              <Label>Date of Joining</Label>
              <TextField sx={{ gridColumn: "span 1" }} />
              <Label>Mother name</Label>
              <TextField sx={{ gridColumn: "span 1" }} />
              <Label>Email ID</Label>
              <TextField sx={{ gridColumn: "span 1" }} />
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
              <TextField sx={{ gridColumn: "span 1" }} />
              <Label>Vill/Ward</Label>
              <TextField sx={{ gridColumn: "span 1" }} />
              <Label>District</Label>
              <TextField sx={{ gridColumn: "span 1" }} />
            </StyledProfileThirdLeftCard>

            <StyledProfileThirdLeftCard>
              <Label>PO</Label>
              <TextField sx={{ gridColumn: "span 1" }} />
              <Label>PS</Label>
              <TextField sx={{ gridColumn: "span 1" }} />
              <Label>State</Label>
              <TextField sx={{ gridColumn: "span 1" }} />
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
