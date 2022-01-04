import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import RecoveryForm from "../../components/recoverPassword/RecoveryForm";

const RecoverPassword = () => {
  return (
    <Container maxWidth="sm" >
      <Card>
        <CardContent>
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <Image
              src="/images/futo_logo_only.png"
              width={100}
              height={100}
              alt="futo logo"
            />
            <Typography variant="h5">Recover your password</Typography>
            <Typography variant="body2">
            To recover your password, kindly supply your username
          </Typography>
          </Box>

        
          <RecoveryForm />
        </CardContent>
      </Card>
    </Container>
  );
};

export default RecoverPassword;
