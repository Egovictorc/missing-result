import { Button, Container, Typography } from "@mui/material";
import React from "react";
import CustomBackDrop from "../../components/CustomBackDrop";
import Layout from "../../components/Layout";
import LoginForm from "../../components/portal/LoginForm";

import PortalBackdrop from "../../components/portal/PortalBackdrop";
import ParticlesBg from "particles-bg";
import { isBrowser } from "../../components/util";


const SigninPage = () => {
  return (
    <Layout>
      <Container maxWidth={"xs"} component="main" sx={{marginY: 10}}>
        <PortalBackdrop />
        <LoginForm />
{/* 
        {
          isBrowser() && <ParticlesBg type="color" bg={true} num={4} />
        } */}
        {/* <ParticlesBg type="color" bg={true} num={4} /> */}
      </Container>
    </Layout>
  );
};

export default SigninPage;
