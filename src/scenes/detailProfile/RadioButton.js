// import React from "react";
// import styled, { keyframes } from "styled-components";

// const Input = styled.input`
//   height: 0;
//   width: 0;
//   opacity: 0;
//   z-index: -1;
// `;

// const popIn = keyframes`
// from {
//   opacity: 0;
//   transform: translate(-50%, -50%) scale(1.5) ;
// }
// to {
//   opacity: 1;
//   transform: translate(-50%, -50%) scale(1) ;
// }
// `;

// const Label = styled.label`
//   position: relative;
//   display: inline-block;
//   cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
//   margin: 0.6em 1em;
//   font-size: 17px;
// `;

// const Indicator = styled.div`
//   border: 1px solid;
//   border-radius: 1em;
//   width: 1.2em;
//   height: 1.2em;
//   position: absolute;
//   top: 0;
//   left: -1.5em;
  

//   ${Label}:hover & {
//     background: #ccc;
//   }

//   &::after {
//     content: "";
//     position: absolute;
//     display: none;
//   }

//   ${Input}:checked + &::after {
//     display: block;
//     border: solid #263238;
//     border-radius: 1em;
//     background-color: #263238;
//     width: 0.5em;
//     height: 0.5em;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     animation-name: ${popIn};
//     animation-duration: 0.3s;
//     animation-fill-mode: forwards;
//   }

//   ${Input}:disabled + & {
//     pointer-events: none;
//     opacity: 0.6;
//     background: #e6e6e6;
//   }
// `;

// export default function RadioButton({
//   value,
//   onChange,
//   name,
//   id,
//   label,
//   disabled,
//   checked
// }) {
//   return (
//     <Label htmlFor={id} disabled={disabled}>
//       {label}
//       <Input
//         id={id}
//         type="radio"
//         role="radio"
//         name={name}
//         value={value}
//         disabled={disabled}
//         onChange={onChange}
//         checked={checked}
//       />
//       <Indicator />
//     </Label>
//   );
// }
