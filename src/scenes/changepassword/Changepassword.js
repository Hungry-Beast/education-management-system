import React from 'react';
import logo512 from "./logo512.png";
import LockIcon from '@mui/icons-material/LockSharp';
import {StyledMain,
        StyledSubmain,
        StyledCol1,
        StyledCol2,
        StyledTitle,
        StyledGroup1,
        StyledLockicon,
        StyledGroup2,
        StyledGroup3,
        StyledButton } from "./changepassword.styles";

export default function Changepassword() {
  return (
    <StyledMain>
      <StyledSubmain >
        <StyledCol1>
              <img src={logo512} alt="logo512"/>

        </StyledCol1>

        <StyledCol2>
        <StyledTitle>Change Password</StyledTitle>
                <StyledGroup1>
                <StyledLockicon> <  LockIcon/> </StyledLockicon>
                    <input type="password" name="currpassword" id="currpassword" autocomplete="off" placeholder="Current Password"/>
                </StyledGroup1>
               <StyledGroup2>
               <StyledLockicon> < LockIcon/> </StyledLockicon>
                  <input type="password" name="newpassword" id="newpassword" autocomplete="off" placeholder="New Password"/>
              </StyledGroup2>
              <StyledGroup3>
              <StyledLockicon> <  LockIcon/> </StyledLockicon>
              <input type="password" name="newpassword" id="newpassword" autocomplete="off" placeholder="confirm Password"/>
            </StyledGroup3>
                  <StyledButton class="password-btn" type="submit">Change Password</StyledButton>
          
          </StyledCol2>
    </StyledSubmain>
      
  </StyledMain>
  )
}
