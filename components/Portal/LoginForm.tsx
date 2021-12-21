import React, { useState } from "react";
import { EmailOutlined } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  FormControl,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from "@mui/icons-material/School";
import LockIcon from '@mui/icons-material/Lock';
import { useFormik } from "formik";
import validationSchema from "./validationSchema";
import { LoadingButton } from "@mui/lab";
import Link from "next/link";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      setIsSubmitting(true);
      //   dbAction(values).then(() => setIsSubmitting(false));
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Card>
      <CardContent>
        <Stack
          component="form"
          spacing={3}
          onSubmit={formik.handleSubmit}
          noValidate
        >
          <Box sx={{ fontSize: "50px", textAlign: "center" }}>
            <SchoolIcon
              fontSize="inherit"
              sx={{
                color: "rgb(253, 243, 74)",
                backgroundColor: "rgb(17, 65, 17)",
                padding: 1,
                borderRadius: "25vw",
              }}
            />
            <Typography
              variant="body2"
              component="h6"
              sx={{ textTransform: "capitalize", textAlign: "center" }}
            >
              portal login
            </Typography>
          </Box>

          <TextField
            required
            fullWidth
            name="username"
            label="Username"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? "text": "password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                 <IconButton onClick={() => setShowPassword(!showPassword)}>
               { showPassword?  <VisibilityOffIcon />: <VisibilityIcon />}
                 </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Typography
            component="a"
            variant="body2"
            href="/"
            rel="noreferrer noopener"
            target="_blank"
            sx={{color: "rgb(51, 122, 183)", textAlign: "center"}}
          >
            To vote for Best Tertiary Institution website/portal click here
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Link href="/portal/RecoverPassword">
              <a style={{color: "red", textTransform: "capitalize"}}>forgot password</a>
            </Link>
            <Typography variant="caption">
              First time here?&nbsp;
              <Link href="/portal/VerifyAccount">
                <a style={{color: "red"}}>Verify your account</a>
              </Link>
            </Typography>
          </Box>
          <LoadingButton
            variant="contained"
            fullWidth
            sx={{ mt: 2, py: 1, borderRadius: 0 }}
            type="submit"
            loading={isSubmitting}
            loadingIndicator={
              <CircularProgress
                color="inherit"
                size={16}
                sx={{ color: "#fff" }}
              />
            }
          >
            Login
          </LoadingButton>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
