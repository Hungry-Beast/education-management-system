import React from 'react';
import "./changepassword.css";
import logo512 from "./logo512.png";

export default function Changepassword() {
  return (
    <div className="main">
        < div className="register">
        <div className="col-1">
            <div className="img">
            <img src={logo512} alt="logo512"/>
            </div>

        </div>
        <div className="col-2">
        <span className="title">Change Password</span>
                <div className="group1">
                    <span htmlFor="currpassword">
                     <i class="zmdi zmdi-lock" area-hidde="true"></i>
                    </span>
                    <input type="password" name="currpassword" id="currpassword" autocomplete="off" placeholder="Current Password"/>
                </div>
               <div className="group2">
                  <span htmlFor="newpassword">
                    <i class="zmdi zmdi-lock"></i>
                  </span>
                  <input type="password" name="newpassword" id="newpassword" autocomplete="off" placeholder="New Password"/>
              </div>
              <div className="group3">
                <span htmlFor="confirmpassword">
                  <i class="zmdi zmdi-lock"></i>
                </span>
                <input type="password" name="confirmpassword" id="confirmpassword" autocomplete="off" placeholder="Confirm Password"/>
            </div>
            <div class="container-password-btn">
                  <button class="password-btn" type="submit">Change Password</button>
            </div>
          </div>
    </div>
      
    </div>
  )
}
