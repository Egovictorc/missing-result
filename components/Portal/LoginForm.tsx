import React, { useState } from "react";
import { useRouter } from "next/router";
import { EmailOutlined } from "@mui/icons-material";
import {
  Alert,
  AlertTitle,
  Box,
  Card,
  CardContent,
  CircularProgress,
  Collapse,
  FormControl,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import LockIcon from "@mui/icons-material/Lock";
import { useFormik } from "formik";
import validationSchema from "./validationSchema";
import { LoadingButton } from "@mui/lab";
import Link from "next/link";
import StudentService from "../../services/StudentService";

import {CALLBACK_URL} from "../constants"
import UnknownError from "../../types/error"

import { signIn } from "next-auth/react";

const LoginForm = () => {
  const [error, setError] = useState({ statusText: "", message: "" });
  const router = useRouter();
  // console.log("router ", router)
  const formik = useFormik({
    initialValues: {
      matricno: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values: { matricno: string; password: string }) => {
      setIsSubmitting(true);
      
      // alert(JSON.stringify(values, null, 2));
      console.log("values ", values);

      try {
        const status = await signIn("credentials", {
          ...values,
          callbackUrl: CALLBACK_URL,
        });
      } catch (err: any) {
        // console.log("error name ", err.name);
        let error: UnknownError = err;
        if (error.response) {
          const { data, statusText } = error.response;
          // console.log("response ", error.response );
          setError({ message: data.message, statusText });
        }
      }
      setIsSubmitting(false);
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Card>
      <CardContent>
        <Collapse in={error.message !== ""}>
          <Alert
            severity="error"
            onClose={() => setError({ statusText: "", message: "" })}
          >
            <AlertTitle> {error.statusText} </AlertTitle>
            {error.message}{" "}
          </Alert>
        </Collapse>
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
            name="matricno"
            label="Username"
            value={formik.values.matricno}
            onChange={formik.handleChange}
            error={formik.touched.matricno && Boolean(formik.errors.matricno)}
            helperText={formik.touched.matricno && formik.errors.matricno}
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
            type={showPassword ? "text" : "password"}
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
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
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
            sx={{ color: "rgb(51, 122, 183)", textAlign: "center" }}
          >
            To vote for Best Tertiary Institution website/portal click here
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Link href="/portal/RecoverPassword">
              <a style={{ color: "red", textTransform: "capitalize" }}>
                forgot password
              </a>
            </Link>
            <Typography variant="caption">
              First time here?&nbsp;
              <Link href="/portal/VerifyAccount">
                <a style={{ color: "red" }}>Verify your account</a>
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
