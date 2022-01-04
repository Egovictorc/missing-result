import { Alert, Container } from "@mui/material";
import Layout from "../../components/Layout";
import RegistrationForm from "../../components/portal/RegistrationForm";

const VerifyAccount = () => {
    return (
        <Layout>
         <Container maxWidth="lg">
         <Alert severity="info">
            You are required to select student type and then enter your JAMB reg number(Admission No. for JUPEB students) if you are a new student or Matric Number if you are a returning student 
            </Alert>

            <RegistrationForm />
         </Container>
            
        </Layout>
    )
}

export default VerifyAccount;
