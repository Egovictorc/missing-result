import * as Yup from "yup";

const RegistrationSchema = Yup.object({
  passport: Yup.string().required("Passport is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  department: Yup.string().required("Department is required"),
  name: Yup.string()
    .min(2, "Student name should be of minimum 2 characters length")
    .required("Student name is required"),
  username: Yup.string()
    .min(2, "Username should be of minimum 2 characters length")
    .required("Username is required"),
  password: Yup.string()
    .min(2, "Password should be of minimum 2 characters length")
    .required("Password is required")
});

export default RegistrationSchema;
