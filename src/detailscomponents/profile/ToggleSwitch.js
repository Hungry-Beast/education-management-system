import React from "react";
import styled, { keyframes } from "styled-components";

const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  font-size: ${props => {
    if (props.size === "xs") return "6px";
    if (props.size === "sm") return "8px";
    if (props.size === "lg") return "12px";

    return "10px";
  }};
  width: 10em;
  height: 3.4em;

  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};

  ${Input} {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 3.4em;

  &::before {
    position: absolute;
    content: "";
    height: 3.6em;
    width: 3.6em;
    left: 3em;
    bottom: 0.1em;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  ${Input}:checked + & {
    background-color: #4caf50;
  }

  ${Input}:checked + &::before {
    -webkit-transform: translateX(2.6em);
    -ms-transform: translateX(2.6em);
    transform: translateX(2.6em);
  }

  ${Input}:focus + & {
    box-shadow: 0 0 0.1em #2196f3;
  }

  ${Input}:disabled + & {
    pointer-events: none;
    background: #e6e6e6;
  }
`;

export default function ToggleSwitch({
  value,
  checked,
  onChange,
  name,
  id,
  disabled,
  title,
  size
}) {
  return (
    <Label htmlFor={id} disabled={disabled} title={title} size={size}>
      <Input
        id={id}
        type="checkbox"
        name={name}
        value={value}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <Slider />
    </Label>
  );
}