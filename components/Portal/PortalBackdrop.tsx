import React, { useState } from "react";
import {
  Backdrop,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import CustomBackDrop from "../CustomBackDrop";

const PortalBackDrop = () => {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={handleClose}
    >
      <Container maxWidth="sm"  sx={{backgroundColor: "#9a9a9a"}}>
        <Card>
          <CardContent>
              <InfoIcon />
            <Typography variant="h6" sx={{textTransform: "capitalize"}}>important notice</Typography>

            <Typography variant="body2">
              Undergraduate First/Second Year Students are advised to login with
              their JAMB Numbers and change their passwords on login, confirm
              their School Fees, Course Registration(s) and Student Biodata, and
              passports. Only students that have registered their courses online
              will be allowed to sit for their examinations
            </Typography>
            <Button>close</Button>
          </CardContent>
        </Card>
      </Container>
    </Backdrop>
  );
};

export default PortalBackDrop;
