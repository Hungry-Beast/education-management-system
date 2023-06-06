import React ,{useState} from "react";
import FormValidation from './FormLogin/FormValidation'
import './login.css'
import {
  StyledContainer,
  StyledDesc,
  StyledStudent,
  StyledTeacher,
  StyledAdmin,
  StyledForm,
  StyledWork,
  StyledContainerWrap
} from "./Login.styles";
import { GlobalFont } from "./GlobalFont.styles";



function Login() {

  
  const [isSubmitted, setIsSubmitted] = useState(false)

  function submitForm(){
    setIsSubmitted(true);
  }

  return (
   


    // <StyledContainerWrap>

    
    <StyledForm>
    <GlobalFont />
     

      <StyledContainer>
        <StyledStudent>
          <img src="/assets/download.jpeg" alt="" />
          <StyledDesc>
            <h1>Student</h1>
            <p>
              The <span>Future </span>of Tomorrow
            </p>
          </StyledDesc>
        </StyledStudent>

        <StyledTeacher>
          <img src="/assets/teacher.jpeg" alt="" />
          <StyledDesc>
            <h1>Teacher</h1>
            <p>
              The Architecture of <span>Future </span>
            </p>
          </StyledDesc>
        </StyledTeacher>

        <StyledAdmin>
          <img src="/assets/admin.webp" alt="" />
          <StyledDesc>
            <h1>Administrator</h1>
            <p>The People, Process, Teams, Office</p>
          </StyledDesc>
        </StyledAdmin>

        <StyledAdmin>
          <img src="/assets/management.jpeg" alt="" />
          <StyledDesc>
            <h1>Management</h1>
            <p>
              Applies Leadership, Defines Vision for the <span>Future </span>
            </p>
          </StyledDesc>
        </StyledAdmin>
      </StyledContainer>

      <StyledWork>
        <img src="/assets/working.png" alt="" />
      </StyledWork>
      
     
      <FormValidation submitForm={submitForm} />

      
    </StyledForm>
    // </StyledContainerWrap>
  
  );
}

export default Login;
