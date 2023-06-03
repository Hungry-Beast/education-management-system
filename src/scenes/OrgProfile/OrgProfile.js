import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const HeaderBar = styled.div`
  display: block;
  width: 100%;
  font-size: 1.8rem;
  font-weight: bold;
  margin: 20px 0;
  padding: 8px 4px;
  background-color: #add8e6;
  color: rgba(0, 0, 0, 0.79);
  margin-bottom: 40px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const DivInput = styled.div`
  width: 100%;
  flex: 1;
  margin: 30px 0;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;
const ImageDiv = styled.div``;
const Image = styled.img`
  width: 90px;
  margin: 15px 0;
`;
const FileInputDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const FileInput = styled.input`
  /* margin: 15px 0; */
  margin-top: 25px;
  margin-bottom: 30px;
`;
const Span = styled.span``;

const OrgProfile = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  // const [initialValues, setInitialValues] = useState({
  //   instituteName: "",
  //   email: "",
  //   contact: "",
  //   address1: "",
  //   address2: "",
  // });
  // useEffect(() => {
  //   let values = localStorage.getItem("universityDetails")
  //     ? JSON.parse(localStorage.getItem("universityDetails"))
  //     : null;
  //   if (values) {
  //     setInitialValues(values);
  //   }
  // }, []);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  let initialValues = {
    instituteName: "",
    shortName: "",
    affiliationNo: "",
    schoolCode: "",
    country: "",
    pincode: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
  };

  const handleFormSubmit = (values) => {
    console.log(values);
    localStorage.setItem("universityDetails", JSON.stringify(values));
  };

  return (
    <Box m="20px">
      <Header
        title="ORGANIZATION PROFILE"
        subtitle="Manage Organization Profile"
      />

      {/* <Formik
        onSubmit={() => console.log("Handle")}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          submitForm,
        }) => ( */}
          <form onSubmit={handleSubmit}>
            <HeaderBar>Basic Infomation</HeaderBar>

            {/* <InfoContainer>
              <DivInput>
                <ImageDiv>
                  <Typography variant="h3">Logo </Typography>
                  <Image src="/assets/NERIST_LOGO.png" />
                </ImageDiv>
                <FileInputDiv>
                  <FileInput type="file" />
                  <Span>Maximum allowed size 500kb</Span>
                  <Span>Recommended logo size is 90 * 90 px</Span>
                </FileInputDiv>
              </DivInput>
              <DivInput>
                <ImageDiv>
                  <Typography variant="h3">App Logo </Typography>
                  <Image src="/assets/NERIST_LOGO.png" />
                </ImageDiv>
                <FileInputDiv>
                  <FileInput type="file" />
                  <Span>Maximum allowed size 500kb</Span>
                  <Span>Recommended logo size is 90 * 90 px</Span>
                </FileInputDiv>
              </DivInput>
            </InfoContainer> */}
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                required
                fullWidth
                variant="outlined"
                type="text"
                label="Institute Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.instituteName}
                name="instituteName"
                error={!!touched.instituteName && !!errors.instituteName}
                helperText={touched.instituteName && errors.instituteName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                required
                fullWidth
                variant="outlined"
                type="text"
                label="Institute Short Name/SMS Sender Id"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.shortName}
                name="shortName"
                error={!!touched.shortName && !!errors.shortName}
                helperText={touched.shortName && errors.shortName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                required
                fullWidth
                variant="outlined"
                type="text"
                label="Institute Affiliation No"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.affiliationNo}
                name="affiliationNo"
                error={!!touched.affiliationNo && !!errors.affiliationNo}
                helperText={touched.affiliationNo && errors.affiliationNo}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                required
                fullWidth
                variant="outlined"
                type="text"
                label="School Code"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.schoolCode}
                name="schoolCode"
                error={!!touched.schoolCode && !!errors.schoolCode}
                helperText={touched.schoolCode && errors.schoolCode}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <HeaderBar>Contact Infomation</HeaderBar>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                required
                fullWidth
                variant="outlined"
                type="text"
                label="Address 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                required
                fullWidth
                variant="outlined"
                type="text"
                label="Address 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                required
                fullWidth
                variant="outlined"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                required
                fullWidth
                variant="outlined"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                required
                fullWidth
                variant="outlined"
                type="text"
                label="Country"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.country}
                name="country"
                error={!!touched.country && !!errors.country}
                helperText={touched.country && errors.country}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                required
                fullWidth
                variant="outlined"
                type="text"
                label="Pin Code"
                sx={{ gridColumn: "span 2" }}
                {...register("pincode")}
              />
            </Box>
            <Box display="flex" justifyContent="first" mt="20px">
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                sx={{ fontSize: "16 px" }}
              >
                Update Profile
              </Button>
            </Box>
          </form>
        {/* )}
      </Formik> */}
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  instituteName: yup.string().required("required"),
  shortName: yup.string().required("required"),
  affiliationNo: yup.string().required("required"),
  schoolCode: yup.string().required("required"),
  address: yup.string().required("required"),
  country: yup.string().required("required"),
  phoneNo: yup.string().required("required"),
  pincode: yup.string().required("required"),

  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});
const initialValues = {
  instituteName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

export default OrgProfile;
