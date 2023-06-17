<<<<<<< HEAD
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
=======
import React from "react";
// import "./changepasswordStyle.js";
import logo512 from "./logo512.png";
import styled from "styled-components";
import { Container } from "./changepasswordStyle";

export default function Changepassword() {
  return (
    <Container>
      <div className="main">
        <div className="register">
          <div className="col-1">
            <div className="img">
              <img src={logo512} alt="logo512" />
            </div>
          </div>
          <div className="col-2">
            <span className="title">Change Password</span>
            <div className="group1">
              <span htmlFor="currpassword">
                <i class="zmdi zmdi-lock" area-hidde="true"></i>
              </span>
              <input
                type="password"
                name="currpassword"
                id="currpassword"
                autocomplete="off"
                placeholder="Current Password"
              />
            </div>
            <div className="group2">
              <span htmlFor="newpassword">
                <i class="zmdi zmdi-lock"></i>
              </span>
              <input
                type="password"
                name="newpassword"
                id="newpassword"
                autocomplete="off"
                placeholder="New Password"
              />
            </div>
            <div className="group3">
              <span htmlFor="confirmpassword">
                <i class="zmdi zmdi-lock"></i>
              </span>
              <input
                type="password"
                name="confirmpassword"
                id="confirmpassword"
                autocomplete="off"
                placeholder="Confirm Password"
              />
            </div>
            <div class="container-password-btn">
              <button class="password-btn" type="submit">
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
>>>>>>> 433baa456ab3a9b2a1b25708c8c02172b3b5f197
}
