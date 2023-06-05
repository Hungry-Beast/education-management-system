import React from "react";
import useForm from "./useForm";
import validate from './validateInfo'
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

  import {
    StyledLoginForm,
    StyledLabel,
    StyledInput,
    StyledButton,
    StyledWelcome,
    StyledWelcomeIcon,
    StyledVersion,
  } from "../LoginForm.styles";


  // const useForm = (callback, validate) => {
  //   const [values, setValues] = useState({
  //     username: '',
  //     password: '',
  //   });


  
  function FormValidation(submitForm) {
    const {handleChange, values} = useForm(submitForm, validate)
    const navigate = useNavigate()
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = e => {
      e.preventDefault();
  
      setErrors(validate(values));
      setIsSubmitting(false);
    };
    useEffect(
      () => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
          
        }
      },
      [errors]
    );
  
    return (

        <StyledLoginForm onSubmit={handleSubmit}>
        <StyledWelcomeIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            fill="currentColor"
            class="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
          </svg>
        </StyledWelcomeIcon>

        {/* <StyledFormLogin > */}
        <StyledWelcome>Welcome</StyledWelcome>
        
        
    
        <StyledLabel>Username:</StyledLabel>
        <StyledInput
             type='text'
             name='username'
             required="this is required"
             value={values.username}
             onChange={handleChange}
        />
        {errors.username && <p>{errors.username}</p>}

       
        <StyledLabel>Password:</StyledLabel>
        <StyledInput
          type="password"
          name="password"
          required="this is required"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
        <StyledButton onClick ={()=> isSubmitting === 'true' ? navigate('/admin') : null }  type="submit">Login</StyledButton>
        
        {/* </StyledFormLogin> */}

        <StyledVersion>
          <p>School Terms</p>
          <h2>Version 11.23.15</h2>
        </StyledVersion>


       
      </StyledLoginForm>

   
    )
  }


  export default FormValidation;


  