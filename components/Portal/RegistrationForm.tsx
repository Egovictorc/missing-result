import React, {
  ChangeEvent,
  ChangeEventHandler,
  useState,
  useEffect,
} from "react";
import Image from "next/image";

import {
  Card,
  Typography,

  TextField,
  InputAdornment,
  Stack,
  MenuItem,
  CardActions,
  CardContent,
  Alert,
  FormControl,
  Box,
} from "@mui/material";
import {
  ShoppingBagOutlined,
  ShoppingCartOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { useFormik } from "formik";
import registrationSchema from "./registrationSchema";

import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import StudentService from "../../services/StudentService";
interface IDepartment {
  name: string;
  staff: string[];
}

const fetchDepartments = async (): Promise<IDepartment[]> => {
  const departments = await fetch("/data/departments.json");
  const { data } = await departments.json();
  return data;
};
  const studentsCount = StudentService.getStudentsCount();
   const currentYear = new Date().getFullYear();
const RegistrationForm = () => {
 


  const [{ alt, src }, setImg] = useState({
    src: "",
    alt: "Upload an Image",
  });
  const [file, setFile] = useState<File>();
  const [departments, setDepartments] = useState<IDepartment[]>([]);

  useEffect(() => {
    fetchDepartments()
      .then((res) => setDepartments(res))
      .catch((err) => console.log("err ", err));
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      department: "",
      username: "",
      password: "",
      passport: "",
    },
    validationSchema: registrationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      // setIsSubmitting(true);
      // send email to
      const formData = new FormData();
      const mapValues = new Map(Object.entries(values));

      console.log("values ", values)
    
     
      mapValues.forEach((val, key) => {
        formData.append(key, val);
        console.log(key, " -> ", val)
      });
       if (file) {
        formData.append("file ", file);
      }
console.log("formData ", formData)
    try {
        StudentService.saveStudent(formData);
    } catch(err) {

    }
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      setImg({
        src: URL.createObjectURL(files[0]),
        alt: files[0].name,
      });
      setFile(files[0]);
    }
  };

  return (
    <Card
      variant="outlined"
      sx={{ p: 5, my: 8, maxWidth: "650px", mx: "auto" }}
    >
      <CardContent>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Personal Information
        </Typography>

        <Stack
          component="form"
          noValidate
          rowGap={4}
          onSubmit={formik.handleSubmit}
          alignItems="flex-start"
           encType="multipart/form-data"
        >
          <TextField
            required
            fullWidth
            variant="outlined"
            label={"Student Name"}
            name="name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            required
            fullWidth
            variant="outlined"
            label={"Email"}
            name="email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <TextField
            select
            required
            fullWidth
            label="Department"
            variant="outlined"
            name="department"
            value={formik.values.department}
            onChange={formik.handleChange}
            error={
              formik.touched.department && Boolean(formik.errors.department)
            }
            helperText={formik.touched.department && formik.errors.department}
          >
            {departments.map(({ name }) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </TextField>

          {src && (
            <Image
              src={src}
              alt={alt}
              width={130}
              height={100}
              placeholder="blur"
              blurDataURL={src}
            />
          )}

          <TextField
            fullWidth
            type="file"
            label="Passport"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              formik.handleChange(e);
              handleFileChange(e);
            }}
            name="passport"
            InputLabelProps={{ shrink: true }}
            value={formik.values.passport}
            error={formik.touched.passport && Boolean(formik.errors.passport)}
            helperText={formik.touched.passport && formik.errors.passport}
          />
          <TextField
            required
            fullWidth
            variant="outlined"
            label={"Username"}
            name="username"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />

            {/* <TextField
            required
            fullWidth
            variant="outlined"
            label={"Password"}
            name="password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
            value={currentYear+"00"+1}
            disabled
            // onChange={formik.handleChange}
            // error={formik.touched.password && Boolean(formik.errors.password)}
            // helperText={formik.touched.password && formik.errors.password}
          /> */}
          <TextField
            required
            fullWidth
            variant="outlined"
            label={"Password"}
            name="password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Box sx={{ marginLeft: "auto" }}>
            <LoadingButton
              loading={formik.isSubmitting}
              variant="outlined"
              type="submit"
              // disabled={ formik.touched && formik.errors}
            >
              Register
            </LoadingButton>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default RegistrationForm;
