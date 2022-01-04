import { Alert, Container } from "@mui/material";
import Layout from "../../components/Layout";
import RegistrationForm from "../../components/portal/RegistrationForm";

const VerifyAccount = () => {
  return (
    <Layout>
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Alert severity="info">
          You are required to provide accurate and valid student information.
          Confirm informations entered before submission
        </Alert>

        <RegistrationForm />
      </Container>
    </Layout>
  );
};

export default VerifyAccount;
