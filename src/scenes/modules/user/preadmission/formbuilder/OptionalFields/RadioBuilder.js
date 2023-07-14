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
const RadioBuilder = ({
  schemaBuilder,
  handleTextChange,
  handleCheckChange,
  handleOptionChange,
  handleOptionDelete,
  handleAddOption,
  handleRadioChange,
  handleRadioDelete,
  handleAddRadio,
}) => {
  return (
    <ComponentInside>
      <Typography variant="h4">Optionals</Typography>

      {schemaBuilder?.radios?.map((radio, index) => (
        <Box
          display="flex"
          flexDirection={"column"}
          alignItems={"flex-end"}
          gap="5px 0"
          key={index}
        >
          {/* <Box key={index} display="flex" gap={"0 10px"}> */}
          <TextField
            size="small"
            label={"label-" + parseInt(index + 1)}
            name="label"
            fullWidth
            onChange={(e) => {
              handleRadioChange(e, index);
            }}
            value={radio}
          />
          {/* </Box> */}

          {index ? (
            <Button onClick={() => handleRadioDelete(index)} color="error">
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
        onClick={() => handleAddRadio()}
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
      <FormControlLabel
        control={
          <Checkbox
            value={schemaBuilder?.row}
            name="row"
            onChange={handleCheckChange}
          />
        }
        label="Veticle alignment"
      />
    </ComponentInside>
  );
};

export default RadioBuilder;
