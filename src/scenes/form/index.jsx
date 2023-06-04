import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import styled from "styled-components";
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
`;

const DivInput = styled.div`
  width: 100%;
`;
const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm ();
  const onSubmit = (data) => console.log(data);

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="USER PROFILE" subtitle="Manage User Profile" />

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <TextField defaultValue="test" {...register("example")} />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

export default Form;
