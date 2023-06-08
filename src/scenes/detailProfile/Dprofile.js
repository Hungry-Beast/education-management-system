import React from 'react'
import RadioButton from "./RadioButton";
import { useState } from 'react';
import { StyledDetailProfileWrapper,
    StyledProfileImage,
    StyledProfileDesc,
    StyledTabs,
    StyledTabContainer,
    StyledButton,
    StyledInputDetails,
    StyledProfileFlex,
    StyledTabandDetailFlex,
    StyledInputDetailLeft,
    StyledRoleInput,
    


} from './Dprofile.styles'
import { GlobalFont } from "../login/GlobalFont.styles";
import InputFieldProfile from './InputFieldProfile';
import { Tab, Tabs } from '@mui/material';
import DetailsContainer from './DetailsContainer';

function Dprofile() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  const [radioValue, setRadio] = useState(true);
  return (
    <StyledDetailProfileWrapper>

    <GlobalFont/>
    <StyledProfileFlex>
    <StyledProfileImage>
    <img src="/assets/womenProfile.jpeg" alt="" />

    
    <StyledProfileDesc>
        <h1>SULEKHA PANDIT</h1>
        <h3>Unique ID 3245</h3>
    </StyledProfileDesc>
    </StyledProfileImage>


<StyledTabandDetailFlex>

    <StyledTabContainer>




<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
      <Tab label="Item" value={0} />
      <Tab label="Item Two" value={1} />
      <Tab label="Item Three" value={2} />
        </Tabs>




          {/* <StyledButton>Home</StyledButton>
          <StyledButton>Profile</StyledButton>
          <StyledButton>Health Record</StyledButton>
          <StyledButton>Fees & Invoices</StyledButton>
          <StyledButton>My leaves</StyledButton>
          <StyledButton>Advance Payment</StyledButton>     */}
    </StyledTabContainer>

    <StyledInputDetails>

    <DetailsContainer value={value}/>
    </StyledInputDetails>
    
    
    </StyledTabandDetailFlex>
   
    </StyledProfileFlex>
    
  

    </StyledDetailProfileWrapper>
  )
}

export default Dprofile;