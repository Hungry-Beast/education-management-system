import {
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import styled from "styled-components";
const ComponentInside = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 20px 20px;
`;
const Number = ({ schemaBuilder, handleTextChange, handleCheckChange }) => {
  return (
    <ComponentInside>
      <Typography variant="h4">Optionals</Typography>

      <TextField
        label="Min Number"
        name="min"
        value={schemaBuilder?.min}
        type="number"
        onChange={handleTextChange}
      />
      <TextField
        label="Max Number"
        name="max"
        type="number"
        value={schemaBuilder?.maxNumber}
        onChange={handleTextChange}
      />
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

export default Number;
