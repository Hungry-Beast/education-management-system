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
const File = ({ schemaBuilder, handleTextChange, handleCheckChange }) => {
  return (
    <ComponentInside>
      <Typography variant="h4">Optionals</Typography>

      <TextField
        label="Min Kb"
        name="minKb"
        value={schemaBuilder?.minKb}
        type="number"
        onChange={handleTextChange}
      />
      <TextField
        label="Max kb"
        name="maxKb"
        type="number"
        value={schemaBuilder?.maxKb}
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

export default File;
