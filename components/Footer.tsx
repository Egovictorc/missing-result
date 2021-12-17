import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box, Grid, Typography } from "@mui/material";
import { MessageOutlined } from "@mui/icons-material";
import Link from "next/link";

const contacts = [
  {
    label: "Federal University of Technology, Owerri, Imo State, Nigeria",
    Icon: <MessageOutlined />,
    link: "",
  },
  { label: "Futo Location on Map", Icon: <MessageOutlined />, link: "" },
  { label: "info@futo.edu.ng", Icon: <MessageOutlined />, link: "" },
];

const quickLinks = [
  { label: "TETFund", link: "/" },
  { label: "World Bank", link: "/" },
  { label: "ResearchGate", link: "/" },
  { label: "Federal Ministry of Education", link: "/" },
  { label: "Africa Union network of science", link: "/" },
  { label: "national universities commission", link: "/" },
];

const enquiries = [
  { label: "FAQ", link: "/" },
  { label: "careers", link: "/" },
  { label: "staff email", link: "/" },
  { label: "contact us", link: "/" },
  { label: "FUTO Portal", link: "/" },
  { label: "Give to FUTO", link: "/" },
  { label: "Achievements", link: "/" },
  { label: "join a local chapter", link: "/" },
];

const FooterTitle: React.FC<{ title: string }> = ({ title }) => (
  <Typography variant="h6" sx={{ textTransform: "capitalize" }} borderBottom={2} mb={2}>
    {title}{" "}
  </Typography>
);

const Footer: React.FC = () => {
  return (
    <Grid
      container
      component="footer"
      justifyContent="space-evenly"
      rowGap={3}
      sx={{ backgroundColor: "#c1d6b3", padding: 2 }}
    >
      {/* Contact Us section */}
      <Grid
        item
        xs={11}
        md={5}
        lg={3}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <FooterTitle title="contact us" />
        {contacts.map(({ label, Icon, link }) => (
          <Link href={link} key={label}>
            <a>
              {Icon} <Typography variant="caption">{label}</Typography>
            </a>
          </Link>
        ))}
      </Grid>

      {/* Quick Links section */}
      <Grid
        item
        xs={11}
        md={5}
        lg={3}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <FooterTitle title="quick links" />
        {quickLinks.map(({ label, link }) => (
          <Link href={link} key={label} passHref>
            <Typography
              variant="caption"
              component="a"
              sx={{ textTransform: "capitalize" }}
            >
              {label}
            </Typography>
          </Link>
        ))}
      </Grid>

      {/* Enquiries section */}
      <Grid
        item
        xs={11}
        md={5}
        lg={3}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <FooterTitle title="enquiries" />
        {enquiries.map(({ label, link }) => (
          <Link href={link} key={label} passHref>
            <Typography
              variant="caption"
              component="a"
              sx={{ textTransform: "capitalize" }}
            >
              {label}
            </Typography>
          </Link>
        ))}
      </Grid>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </Grid>
  );
};

export default Footer;
