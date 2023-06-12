// import {
//   Button,
//   FormControl,
//   FormHelperText,
//   InputLabel,
//   MenuItem,
//   Select,
//   TextField,
//   Typography,
//   colors,
// } from "@mui/material";

// import RadioButton from "./RadioButton";
// import ToggleSwitch from "./ToggleSwitch";
// import { useState } from "react";

// import {
//   StyledLabelRfid,
//   StyledLabelInput,
//   StyledRightInput,
//   StyledInputFirstCard,
//   StyledInputLeftCard,
//   StyledSecondInputCard,
//   StyledStaffPersonal,
//   StyledStaffLeftCard,
//   StyledStaffInputLeft,
//   StyledStaffRightCard,
//   StyledStaffInputRight,
//   StyledStaffCard,
//   StyledBloodRadio,
//   StyledLabelBloodInput,
//   StyledPan,
//   StyledCommunicationLine,
//   StyledCommunicationDetails,
//   StyledThirdInputCard,

//   StyledToggle,
// } from "./DetailInput.styled.js";
// import { Box } from "@mui/system";
// import React from "react";
// import { Controller, useForm } from "react-hook-form";
// import styled from "styled-components";

// const style = {
//   position: "absolute",
//   top: "80%",
//   left: "48%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   // bgcolor: "background.paper",
//   //   border: "2px solid #000",
//   // boxShadow: 24,
//   borderRadius: "10px",
//   p: 0,
// };
// const HeaderContainer = styled.div`
  /* width: 100%;
    background-color: #1dbfc1;
    text-align: center;
    border-radius: 10px;
    padding: 25px 10px;
    border-bottom: 2px solid #ffa800;
    margin: 0; */
// `;
// const Form = styled.form`
//   margin: 20px 0;
//   padding: 10px 20px;
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// `;

// const InputFieldProfile = ({ handleClose }) => {
//   const [radioValue, setRadio] = useState(true);
//   const [value, setCheckbox] = useState(true);
//   const {
//     register,
//     handleSubmit,
//     watch,
//     control,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       subjectName: "",
//       subjectCode: "",
//       subjectCredit: "",
//       //   subjectType: 1,
//     },
//   });
//   const onSubmit = (data) => console.log(data);
//   return (
    
//     <Box sx={style}>
//       <Form onSubmit={handleSubmit(onSubmit)}>
  
//         <StyledInputFirstCard>
//         <StyledToggle>
//         <StyledLabelInput>Edit Data</StyledLabelInput>
            {/* <ToggleSwitch
            
          title="toogle switch xs"
          size="xs"
          value={value}
          checked={value}
          onChange={({ target }) => setCheckbox(!value)}
        />
            </StyledToggle> */}
        //   <StyledInputLeftCard>
       
         
        //   <StyledLabelRfid>RFID:</StyledLabelRfid>
        //     <StyledLabelInput>Role:</StyledLabelInput>

        //     <TextField />
        //   </StyledInputLeftCard>

        //   <StyledRightInput>
        //     <StyledLabelInput>Designation:</StyledLabelInput>

        //     <TextField />
        //     <StyledLabelInput>Exp in Year:</StyledLabelInput>

        //     <TextField />
        //   </StyledRightInput>
        // </StyledInputFirstCard>

        // <StyledSecondInputCard>
        //   <StyledStaffPersonal>Staff Personal</StyledStaffPersonal>

        //   <StyledStaffCard>
        //     <StyledStaffLeftCard>
        //       <StyledStaffInputLeft>
        //         <StyledLabelInput>
        //           First name
        //           <TextField />
        //         </StyledLabelInput>

        //         <StyledLabelInput>
        //           Last name
        //           <TextField />
        //         </StyledLabelInput>

        //         <StyledLabelInput>
        //           Date of birth
        //           <TextField />
        //         </StyledLabelInput>

        //         <StyledLabelInput>
        //           <StyledPan>
        //             PAN No
        //             <TextField />
        //           </StyledPan>
        //         </StyledLabelInput>

        //         <StyledLabelInput>
        //           Designation
        //           <TextField />
        //         </StyledLabelInput>

        //         <StyledLabelInput>
        //           Father Name
        //           <TextField />
        //         </StyledLabelInput>

        //         <StyledLabelInput>
        //           Mobile No
        //           <TextField />
        //         </StyledLabelInput>

        //         <StyledLabelInput>
        //           Photo
        //           <TextField />
        //         </StyledLabelInput>
        //       </StyledStaffInputLeft>
        //     </StyledStaffLeftCard>

        //     <StyledStaffRightCard>
        //       <StyledStaffInputRight>
        //         <StyledLabelInput>
        //           Middle Name
        //           <TextField />
        //         </StyledLabelInput>

        //         <StyledLabelInput>
        //           Gender
        //           <TextField />
        //         </StyledLabelInput>

        //         <StyledLabelInput>
        //           AADHAR No
        //           <TextField />
        //         </StyledLabelInput>

        //         <StyledLabelBloodInput>
        //           Blood Group
        //           <StyledBloodRadio>
        //             <RadioButton
        //               label="A+"
        //               name="radio"
        //               value={radioValue}
        //               checked={radioValue}
        //               onChange={({ target }) => {
        //                 console.log(target.value);
        //                 setRadio(Boolean(target.value));
        //               }}
        //             />
        //             <RadioButton
        //               label="A"
        //               name="radio"
        //               value={!radioValue}
        //               checked={!radioValue}
        //               onChange={({ target }) => setRadio(!target.value)}
        //             />
        //             <RadioButton
        //               label="B+"
        //               name="radio"
        //               value={!radioValue}
        //               checked={!radioValue}
        //               onChange={({ target }) => setRadio(!target.value)}
        //             />
                    {/* <RadioButton
                      label="B"
                      name="radio"
                      value={!radioValue}
                      checked={!radioValue}
                      onChange={({ target }) => setRadio(!target.value)}
                    />  */}
                //   </StyledBloodRadio>
                // </StyledLabelBloodInput>

//                 <StyledLabelInput>
//                   Date of joining
//                   <TextField />
//                 </StyledLabelInput>

//                 <StyledLabelInput>
//                   Mother Name
//                   <TextField />
//                 </StyledLabelInput>

//                 <StyledLabelInput>
//                   Email ID
//                   <TextField />
//                 </StyledLabelInput>
//               </StyledStaffInputRight>
//             </StyledStaffRightCard>
//           </StyledStaffCard>

//           <StyledThirdInputCard>


//             <StyledCommunicationLine></StyledCommunicationLine>

//             <StyledCommunicationDetails>
//               Communication Details
//             </StyledCommunicationDetails>

// <StyledStaffCard>
//             <StyledStaffLeftCard>
//               <StyledStaffInputLeft>
//                 <StyledLabelInput>
//                   PIN
//                   <TextField />
//                 </StyledLabelInput>
//                 <StyledLabelInput>
//                   Vill/Will
//                   <TextField />
//                 </StyledLabelInput>
//                 <StyledLabelInput>
//                   District
//                   <TextField />
//                 </StyledLabelInput>
// </StyledStaffInputLeft>
// </StyledStaffLeftCard>



// <StyledStaffRightCard>
//               <StyledStaffInputRight>
//                 <StyledLabelInput>
//                   PO
//                   <TextField />
//                 </StyledLabelInput>

//                 <StyledLabelInput>
//                   PS
//                   <TextField />
//                 </StyledLabelInput>

//                 <StyledLabelInput>
//                   State
//                   <TextField />
//                 </StyledLabelInput>

           
//               </StyledStaffInputRight>
//             </StyledStaffRightCard>
//             </StyledStaffCard>


//             <StyledCommunicationLine></StyledCommunicationLine>
//           </StyledThirdInputCard>
//         </StyledSecondInputCard>
//       </Form>
//     </Box>
//   );
// };
// export default InputFieldProfile;
