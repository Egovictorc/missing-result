import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const quickLinks = [
  { label: "transcript", link: "/" },
  { label: "Staff E-mail", link: "/" },
  { label: "Students E-mail", link: "/" },
  { label: "info@futo.edu.ng", link: "/" },
  { label: "FUTO Portal", link: "/portal" },
  { label: "E-Learning", link: "/" },
];

const socialMedia = [
    {link: "/", Icon: FacebookOutlinedIcon},
    {link: "/", Icon: MailOutlineSharpIcon},
    {link: "/", Icon: TwitterIcon},
    {link: "/", Icon: InstagramIcon},
    {link: "/", Icon: LinkedInIcon},
]

const Topbar = () => {
  return (
    <Stack direction="row" justifyContent="space-between" p={1}>
      <Box>
          {quickLinks.map(({label, link}) =>(
              <Link href={link} passHref key={label}>
                  <Typography component="a" variant="caption" sx={{textTransform: "capitalize", paddingX: 1}}>
                      {label}
                  </Typography>
              </Link> 
          ))}
      </Box>

      <Box>
          {
              socialMedia.map(({link, Icon}, index) => (
                  <Link href={link} key={index} passHref>
                      <Typography component="a" sx={{px: 1}}>
                          <Icon style={{fontSize: "1.2rem"}} />
                      </Typography>
                  </Link>
              ))
          }
      </Box>
    </Stack>
  );
};

export default Topbar;
