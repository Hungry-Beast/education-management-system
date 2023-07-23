import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Typography } from '@mui/material';
import { Button } from '@mui/base';
import Box from '@mui/material/Box';
import styled from 'styled-components';

 function DatePickerComponent() {
  const [value, setValue] = React.useState(dayjs('2022-04-17'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer  sx={{
      '@media screen and (max-width: 768px)': {
     // Set a maximum width for screens with a maximum width of 768px
        width:'100%' // Optional: Center the container horizontally
      },
    }}
        components={['DatePicker', 'DatePicker']}>
        <Typography variant='subtitle1' >From</Typography>
        <DatePicker defaultValue={dayjs('2022-04-17')}  />
        <Typography variant='subtitle1'> Till </Typography>
        <DatePicker
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
  
    
  );
}

export default DatePickerComponent;