import React from "react";

import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";

import {
  StyledLoginForm,
  StyledLabel,
  StyledInput,
  StyledButton,
  StyledWelcome,
  StyledWelcomeIcon,
  StyledVersion,
  StyledError,
} from "../LoginForm.styles";

function FormValidation() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    navigate("/admin");
  };

  console.log(errors);
  return (
    <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
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
        {...register("username", { required: "Username is required" })}
        aria-invalid={errors.username ? "true" : "false"}
      />
      <StyledError>
        {errors.username && <p role="alert">{errors.username?.message}</p>}
      </StyledError>

      <StyledLabel>Password:</StyledLabel>
      <StyledInput
        type="password"
        {...register("password", {
          required: "Password of minimum 6 length is required",
          minLength: {
            value: 6,
            message: "Password must be more than 6 characters",
          },
        })}
        aria-invalid={errors.password ? "true" : "false"}
      />
      <StyledError>
        {errors.password && <p role="alert">{errors.password?.message}</p>}
      </StyledError>
      <StyledButton type="submit">Login</StyledButton>

      {/* </StyledFormLogin> */}

      <StyledVersion>
        <p>School Terms</p>
        <h2>Version 11.23.15</h2>
      </StyledVersion>
    </StyledLoginForm>
  );
}

export default FormValidation;
