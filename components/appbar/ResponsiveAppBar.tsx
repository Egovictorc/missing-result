import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Container from "@mui/material/Container";

import Link from "next/link";
import Image from "next/image";
import CustomTab from "./CustomTab";
import MobileMenu from "./MobileMenu";
import { IconButton } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';


type Anchor = "top" | "left" | "bottom" | "right";

const ResponsiveAppBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setIsOpen(isOpen => !isOpen);
    };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#c1d6b3" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO
          </Typography> */}

          <Box sx={{ flexGrow: 1 }}>
            <Link href="/">
              <a>
                <Image
                  src={"/images/Futo-main-logo.webp"}
                  width={220}
                  height={40}
                  alt="Futo logo"
                  blurDataURL={"/images/Futo-main-logo.webp"}
                />
              </a>
            </Link>
          </Box>

          {/* mobile menu toggler */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              // onClick={handleClick}
              onClick={toggleDrawer}
            >
              <MoreVertIcon />
            </IconButton>
          </Box>

          {/* <MobileMenu isOpen={true} toggleDrawer={toggleDrawer} /> */}
          <MobileMenu isOpen={isOpen} toggleDrawer={toggleDrawer} />

          <Box
            sx={{
              display: {
                xs: "none",
                md: "block",
                borderBottom: 3,
                borderColor: "red",
              },
            }}
          >
            <CustomTab />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
