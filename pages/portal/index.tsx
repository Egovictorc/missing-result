import { Button, Container, Typography } from "@mui/material";
import React from "react";
import CustomBackDrop from "../../components/CustomBackDrop";
import Layout from "../../components/Layout";

import PortalBackdrop from "../../components/Portal/PortalBackDrop";

const PortalPage = () => {
  return (
    <Layout>
      <Container maxWidth={"xl"}>
        <PortalBackdrop />
       
      </Container>
    </Layout>
  );
};

export default PortalPage;
