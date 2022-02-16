import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import React, { useState } from "react";
import verificationSchema from "./verificationSchema";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";


const initialValues = {
  matricNo: "",
  studentType: "new student",
};

const VerificationForm = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formik = useFormik({
    initialValues,
    validationSchema: verificationSchema,
    onSubmit: (values) => {
      if(values.studentType === "new student") {
        router.push("/portal/Register")
      }
      setIsSubmitting(true);
      setTimeout(() => setIsSubmitting(false), 3000);
      console.log("values ", values);
    },
  });
  return (
    <Card title="Verify your account" sx={{ my: 3, maxWidth: "800px", mx: "auto" }}>
      <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     R
        //   </Avatar>
        // }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Verify Your Account"
        // subheader="September 14, 2016"
      />
      <CardContent>
        <form onSubmit={formik.handleSubmit} noValidate>
          <FormControl component="fieldset">
            <FormLabel component="legend">Student Type</FormLabel>
            <RadioGroup row aria-label="student type"
                name="studentType"
                value={formik.values.studentType}
                onChange={formik.handleChange}>
              {[
                { value: "new student", label: "New Student" },
                { value: "returning student", label: "Returning Student" },
                { value: "JUPEB student", label: "JUPEB Student" },
              ].map(({ value, label }) => (
                <FormControlLabel
                  value={value}
                  control={<Radio />}
                  label={label}
                  key={label}
                />
              ))}
            </RadioGroup>
          </FormControl>
          <TextField
            name="matricNo"
            fullWidth
            label="Matric No"
            value={formik.values.matricNo}
            onChange={formik.handleChange}
            required
            error={formik.touched.matricNo && Boolean(formik.errors.matricNo)}
            helperText={formik.touched.matricNo && formik.errors.matricNo}
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
              Verify
            </LoadingButton>
          </Box>
        </form>
      </CardContent>
      <CardActions disableSpacing>
        <Link href="/portal" passHref>
          <Typography component="a" variant="button">
            login
          </Typography>
        </Link>
      </CardActions>
    </Card>
  );
};

export default VerificationForm;
