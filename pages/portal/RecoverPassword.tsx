import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import RecoveryForm from "../../components/RecoverPassword/RecoveryForm";

const RecoverPassword = () => {
  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Box sx={{ textAlign: "center" }}>
            <Image
              src="/images/futo_logo_only.png"
              width={100}
              height={100}
              alt="futo logo"
            />
            <Typography variant="h5">Recover your password</Typography>
          </Box>

          <Typography variant="body2" sx={{mb: 2}}>
            To recover your password, kindly supply your username
          </Typography>
          <RecoveryForm />
        </CardContent>
      </Card>
    </Container>
  );
};

export default RecoverPassword;
