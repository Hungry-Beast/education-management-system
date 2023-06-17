import React from 'react'
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import styled from "styled-components";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AssetLocation from './AssetLocation';
import AssetCategory from './AssetCategory';


const Component = styled.div`
  width: calc(100% - 30px);
  height: 100%;
  padding: 16px;
  background-color: #fff;
  margin: 15px auto;
  border-radius:10px;
`;


const EditDeleteButton = () => {
  return (
      <>
    <EditIcon/> <DeleteIcon/>
    </>
  );
};


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



export default function CategoryLocation() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  

  return (
    <Component>

    <Box sx={{ display: "flex", justifyContent: "center"}} >
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Asset Location" />
                <Tab label="Asset Category"  />
          </Tabs>
    </Box>

    <hr style={{ width:"100%", border: '1px solid orange'}} />

      <TabPanel value={value} index={0}>
        <AssetLocation/>
      </TabPanel>
      <TabPanel value={value} index={1}>
          <AssetCategory/>
      </TabPanel>

  </Component>
  )
}
