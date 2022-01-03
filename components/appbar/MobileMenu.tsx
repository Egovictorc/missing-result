import React from "react";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";

import tabCollection from "./navLinks";
import { Drawer } from "@mui/material";

// const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const MobileMenu:React.FC<{
    isOpen: boolean,
    toggleDrawer: (event: React.KeyboardEvent | React.MouseEvent) => void,
    window?: () => Window

}> = ({isOpen, toggleDrawer, window}) => {

    const container =
    window !== undefined ? () => window().document.body : undefined;


    return (
    <Drawer anchor={"left"} open={isOpen} onClose={toggleDrawer}
    container={container}
    variant="temporary"
    ModalProps={{
        keepMounted: true,
        // Better open performance on mobile.
      }}
      sx={{
        display: { xs: "block" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: "90%",
          mt: "0",
        },
      }}
    >
      {tabCollection.map(({ label, value }) => (
        <Typography textAlign="center" key={label}>{label}</Typography>
      ))}
    </Drawer>
  );
};

export default MobileMenu;
