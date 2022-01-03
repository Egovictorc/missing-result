import React, { useState } from "react";
import { AccountCircle } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Collapse,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

// import MenuIcon from "@mui/icons-material/Menu";
import MoreVert from "@mui/icons-material/MoreVert";
import Link from "next/link";
import Image from "next/image";

const DashboardAppBar = () => {
  const [showCard, setshowCard] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const username = "eze hyaciant nnamdi";
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Link href="/">
            <Image
              src={"/images/futo_logo_white.png"}
              height={80}
              width={300}
              alt="futo logo"
            />
          </Link>
        </Box>
        {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MoreVert />
        </IconButton> */}
        {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Photos
        </Typography> */}
        <Box>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            {/* <AccountCircle /> */}
            <Box sx={{border: "1px solid #fff", borderRadius: "50%", overflow: "hidden"}}>
              <Image
                src={"/images/img.jpg"}
                height={50}
                width={50}
                alt={`${username} image`}
                placeholder="blur"
                blurDataURL={"/images/img.jpg"}
              />
            </Box>
          </IconButton>

          <Box sx={{ display: { xs: "none", sm: "inline-block" } }}>
            <span> {username}</span>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <span>Logout</span> &nbsp;
            <span>Help/Support</span>
          </Box>
        </Box>

        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { sm: "none" } }}
          onClick={handleMenu}
        >
          <MoreVert />
        </IconButton>

        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Stack direction="row" alignItems="center">
              <Avatar
                sx={{
                  width: 24,
                  height: 24,
                  bgcolor: "info.main",
                  p: 3,
                  mr: 1,
                  fontSize: "1.6rem",
                }}
              >
                <span>{username && username.substr(0, 1).toUpperCase()} </span>
              </Avatar>
              <span> {username}</span>
            </Stack>
          </MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
          <MenuItem onClick={handleClose}>Help/Support</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardAppBar;
