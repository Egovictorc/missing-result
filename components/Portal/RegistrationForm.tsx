import React, {
  ChangeEvent,
  ChangeEventHandler,
  useState,
  useEffect,
} from "react";
import Image from "next/image";

import {
  Button,
  Card,
  Typography,
  Container,
  RadioGroup,
  Radio,
  FormControlLabel,
  TextField,
  InputAdornment,
  Stack,
  MenuItem,
  CardActions,
  CardContent,
  Alert,
  Input,
  FormControl,
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
import departments from "/data/departments.json"

const RegistrationForm = () => {
  const [{ alt, src }, setImg] = useState({
    src: "",
    alt: "Upload an Image",
  });
  const [file, setFile] = useState<File>();

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      dept: "",
      username: "",
      clientEmail: "",
      clientPhone: "",
      price: 3,
      currency: "NGN",
      passport: "",
    },
    validationSchema: registrationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      // setIsSubmitting(true);
      // send email to
      const formData = new FormData();
      if (file) {
        formData.append("file", file);
        formData.append("email", values.email);
        formData.append("clientEmail", values.clientEmail);
        formData.append("price", values.price.toString());
        formData.append("currency", values.currency);
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
                  <ShoppingCartOutlined />
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
                  <ShoppingCartOutlined />
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
          label="Country"
          variant="outlined"
          name="country"

          value={formik.values.dept}
          onChange={formik.handleChange}
          error={formik.touched.dept && Boolean(formik.errors.dept)}
          helperText={formik.touched.dept && formik.errors.dept}
        >
          {departments.data.map(({ name }) => (
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
            error={
              formik.touched.passport && Boolean(formik.errors.passport)
            }
            helperText={
              formik.touched.passport && formik.errors.passport
            }
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
                  <ShoppingCartOutlined />
                </InputAdornment>
              ),
            }}
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.email)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <LoadingButton
            loading={formik.isSubmitting}
            variant="outlined"
            type="submit"
            // disabled={ formik.touched && formik.errors}
          >
        Register
          </LoadingButton>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default RegistrationForm;
