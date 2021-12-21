import React, { useState } from "react";
import {
  Backdrop,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
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
      <Container maxWidth="sm">
        <Card>
          <CardContent>
            <Stack spacing={2} sx={{ padding: 3 }}>
              <Box sx={{ textAlign: "center" }}>
                <InfoIcon sx={{ fontSize: "3rem" }} />
                <Typography
                  variant="h6"
                  sx={{ textTransform: "capitalize", textAlign: "center" }}
                >
                  important notice
                </Typography>
              </Box>

              <Typography variant="body2">
                Undergraduate First/Second Year Students are advised to login
                with their JAMB Numbers and change their passwords on login,
                confirm their School Fees, Course Registration(s) and Student
                Biodata, and passports. Only students that have registered their
                courses online will be allowed to sit for their examinations
              </Typography>

              <Box sx={{ textAlign: "right" }}>
                <Button
                  onClick={handleToggle}
                  sx={{ marginLeft: "auto", textAlign: "right" }}
                >
                  close
                </Button>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Backdrop>
  );
};

export default PortalBackDrop;
