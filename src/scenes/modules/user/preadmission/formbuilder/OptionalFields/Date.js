import {
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import styled from "styled-components";
const ComponentInside = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 20px 20px;
`;
const Date = ({
  schemaBuilder,
  handleTextChange,
  handleCheckChange,
  handleDateChange,
}) => {
  return (
    <ComponentInside>
      <Typography variant="h4">Optionals</Typography>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            slotProps={{
              textField: {
                fullWidth: true,
                sx: {
                  gridColumn: `span ${schemaBuilder?.gridSpan ? 2 : 1}`,
                },
              },
            }}
            label="Min Date"
            inputFormat="dd-MM-yyyy"
            onChange={(date) => handleDateChange(date, "minDate")}
          />
        </DemoContainer>
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            slotProps={{
              textField: {
                fullWidth: true,
                sx: {
                  gridColumn: `span ${schemaBuilder?.gridSpan ? 2 : 1}`,
                },
              },
            }}
            label="Max Date"
            onChange={(date) => handleDateChange(date, "Max Date")}

          />
        </DemoContainer>
      </LocalizationProvider>

      <FormControlLabel
        control={
          <Checkbox
            value={schemaBuilder?.gridSpan}
            name="gridSpan"
            onChange={handleCheckChange}
          />
        }
        label="Full Width"
      />
      <FormControlLabel
        control={
          <Checkbox
            value={schemaBuilder?.required}
            name="required"
            onChange={handleCheckChange}
          />
        }
        label="Required"
      />
    </ComponentInside>
  );
};

export default Date;
