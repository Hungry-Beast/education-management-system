import React from 'react'
import { Box, Typography } from '@mui/material';
import styled from "styled-components";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CheckinVisitor from './CheckinVisitor';
import CheckoutVisitor from './CheckoutVisitor';

const Component = styled.div`
  width: calc(100% - 30px);
  height: 100%;
  padding: 16px;
  background-color: #fff;
  margin: 15px auto;
  border-radius:10px;
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hclassden={value !== index}
      class={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function ManageVisitors() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Component>

    <Box sx={{ display: "flex", justifyContent: "center"}} >
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Checkin Visitor" />
                <Tab label="Checkout Visitor"  />
          </Tabs>
    </Box>

    <hr style={{ width:"100%", border: '1px solid orange'}} />

      <TabPanel value={value} index={0}>
        <CheckinVisitor/>
      </TabPanel>
      <TabPanel value={value} index={1}>
          <CheckoutVisitor/>
      </TabPanel>

  </Component>
  )
}
