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
  const TextArea = ({ schemaBuilder, handleTextChange, handleCheckChange }) => {
    return (
      <ComponentInside>
        <Typography variant="h4">Optionals</Typography>
  
        <TextField
          label="Min Rows"
          name="minRow"
          value={schemaBuilder?.minRow}
          type="number"
          onChange={handleTextChange}
        />
        <TextField
          label="Max Rows"
          name="maxRow"
          type="number"
          value={schemaBuilder?.maxRow}
          onChange={handleTextChange}
        />
        <TextField
          label="Min Length"
          name="minLength"
          value={schemaBuilder?.minLength}
          type="number"
          onChange={handleTextChange}
        />
        <TextField
          label="Max Length"
          name="maxLength"
          type="number"
          value={schemaBuilder?.maxLength}
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
  
  export default TextArea;
  