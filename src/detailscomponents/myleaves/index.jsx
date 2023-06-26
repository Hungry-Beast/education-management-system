import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MyleavesTable from "./MyleavesTable";

import {
  StyledLeaveCard,
  StyledInnerLeaveCard,
  StyledGrayLine,
  StyledShowandSearchContainer,
  StyledShow,
  StyledSearch,
  StyledTableCard,
} from "./myleaves.styles";

export default function Myleaves() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <StyledLeaveCard>
      <StyledInnerLeaveCard>
        <h1>Leave(s) :</h1>
        <StyledGrayLine></StyledGrayLine>

        <StyledShowandSearchContainer>
          <StyledShow>
            <h1>Show</h1>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label"></InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={30}>30</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={100}>100</MenuItem>
              </Select>
            </FormControl>
            <h1>Entity</h1>
          </StyledShow>

          <StyledSearch>
            <h1>Search:</h1>
            <input type="text" />
          </StyledSearch>
        </StyledShowandSearchContainer>

        <StyledTableCard>
          <MyleavesTable />
        </StyledTableCard>
      </StyledInnerLeaveCard>
    </StyledLeaveCard>
  );
}
