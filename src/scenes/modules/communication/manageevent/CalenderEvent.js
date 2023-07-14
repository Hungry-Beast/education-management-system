import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import styled from 'styled-components';


const StyledCalendar = styled.div`
  background-color: white;
    border-radius:0.5rem;
    border:0.1rem solid lightgray;
  height: 400px;
  margin-top: 2rem;
  font-size: 1.3rem;
  .MuiPickersBasePicker-pickerView {
    font-size: 1.3rem !important;
  }
`;


export default function CalendarEvent() {
  return (
    <StyledCalendar>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar />
      </LocalizationProvider>
    </StyledCalendar>
  );
}
