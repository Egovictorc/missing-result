import * as Yup from "yup";

const RegistrationSchema = Yup.object({
  passport: Yup.string()
    .required("Passport is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  department: Yup.string()
    .min(8, "Description should be of minimum 8 characters length")
    .required("Description is required"),
  commodity: Yup.string()
    .min(2, "Commodity should be of minimum 2 characters length")
    .required("Commodity is required"),
  role: Yup.string()
    .min(2, "Role should be of minimum 2 characters length")
    .required("Password is required"),
  price: Yup.number().required("Price is required"),
  clientPhone: Yup.string().matches(new RegExp('[0-9]{7}'), "Enter a valid phone number").required("Phone number is required")
});

export default RegistrationSchema;
