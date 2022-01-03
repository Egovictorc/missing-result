import { LoadingButton } from "@mui/lab";
import {
  Box,
  CircularProgress,
  TextField,
  Alert,
  AlertTitle,
  Collapse,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";

import VerificationSchema from "./verificationSchema";

const initialValues = {
  username: "",
};

const RecoveryForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formik = useFormik({
    initialValues,
    validationSchema: VerificationSchema,
    onSubmit: (values) => {
      setIsSubmitting(true);
      setTimeout(() => setIsSubmitting(false), 3000);
      console.log("values ", values);
    },
  });
  return (
    <>
      <Collapse in={isSubmitting}>
        <Alert severity="error" onClose={() => {}}>
          <AlertTitle>Error</AlertTitle>
          No student found with the username —{" "}
          <strong>{formik.values.username}</strong>
        </Alert>
      </Collapse>
      <form onSubmit={formik.handleSubmit} noValidate>
        <TextField
          name="username"
          fullWidth
          label="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
          required
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />
        <Box sx={{ width: "100%", textAlign: "right" }}>
          <LoadingButton
            variant="contained"
            sx={{
              mt: 2,
              py: 1,
              borderRadius: 0,
              textTransform: "capitalize",
            }}
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
            Submit
          </LoadingButton>
        </Box>
      </form>
    </>
  );
};

export default RecoveryForm;
