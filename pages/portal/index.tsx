import { Button, Container, Typography } from "@mui/material";
import React from "react";
import CustomBackDrop from "../../components/CustomBackDrop";
import Layout from "../../components/Layout";
import LoginForm from "../../components/portal/LoginForm";

import PortalBackdrop from "../../components/portal/PortalBackdrop";

const PortalPage = () => {
  return (
    <Layout>
      <Container maxWidth={"xs"} component="main" sx={{marginY: 10}}>
        <PortalBackdrop />
        <LoginForm />
      </Container>
    </Layout>
  );
};

export default PortalPage;
