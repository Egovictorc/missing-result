import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  IconButton,
  List,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Layout from "../../components/dashboard/Layout";
import PaymentIcon from "@mui/icons-material/Payment";
import { Visibility } from "@mui/icons-material";
import ItemCard from "../../components/dashboard/ItemCard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import Image from "next/image";
import Link from "next/link";

const student = {
  fullname: "Eze Hycienth Nnamdi",
  matricNo: 2011101111,
  dept: "Information Management Technology",
  level: 500,
};

const DashboardPage = () => {
  return (
    <Layout>
      <Container maxWidth="md" sx={{ my: 6 }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Dashboard
        </Typography>

        <ItemCard title="fees paid" count={5} Icon={PaymentIcon} />
        <ItemCard
          bg="red"
          title="courses registered"
          count={28}
          Icon={LibraryBooksIcon}
        />

        <Card sx={{ mb: 2 }}>
          <CardContent>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <Box
                sx={{
                  border: "1px solid #fff",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={"/images/img.jpg"}
                  height={70}
                  width={70}
                  alt={`user image`}
                  placeholder="blur"
                  blurDataURL={"/images/img.jpg"}
                />
              </Box>
            </IconButton>

            <List component="nav" aria-label="main mailbox folders">
              <ListItemText primary={student.fullname} />
              <Divider />
              <ListItemText primary={`${student.level} Level`} />
              <Divider />
              <ListItemText primary={student.dept} />
              <Divider />
              <ListItemText primary={student.matricNo} />
              <ListItemText primary={<Link href="/dashboard/requests" passHref>
                <Button variant="contained" component="a">view requests</Button>
              </Link>} />
            </List>
          </CardContent>
        </Card>

        <Card>
            <CardContent>
                <Typography variant="h5">Send us your Feedback</Typography>
                <Typography variant="body2">Having any difficulty using this platform</Typography>
                <Typography variant="body2">Do you have a suggestion?</Typography>
            </CardContent>
        </Card>
      </Container>
    </Layout>
  );
};

export default DashboardPage;
