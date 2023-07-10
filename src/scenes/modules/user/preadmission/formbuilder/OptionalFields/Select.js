import { Add, Delete } from "@mui/icons-material";
import {
  Box,
  Button,
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
const Select = ({
  schemaBuilder,
  handleTextChange,
  handleCheckChange,
  handleOptionChange,
  handleOptionDelete,
  handleAddOption,
}) => {
  return (
    <ComponentInside>
      <Typography variant="h4">Optionals</Typography>

      {schemaBuilder?.options.map((option, index) => (
        <Box
          display="flex"
          flexDirection={"column"}
          alignItems={"flex-end"}
          gap="5px 0"
        >
          <Box key={index} display="flex" gap={"0 10px"}>
            <TextField
              size="small"
              label={"label-" + index + 1}
              name="label"
              onChange={(e) => handleOptionChange(e, index)}
              value={option.label}
            />
            <TextField
              size="small"
              label={"value-" + index + 1}
              name="value"
              onChange={(e) => handleOptionChange(e, index)}
              value={option.value}
            />
          </Box>

          {index ? (
            <Button onClick={() => handleOptionDelete(index)} color="error">
              <Delete />
            </Button>
          ) : (
            <></>
          )}
        </Box>
      ))}
      <Button
        variant="contained"
        size="small"
        color="success"
        onClick={() => handleAddOption()}
      >
        <Add />
      </Button>
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

export default Select;
