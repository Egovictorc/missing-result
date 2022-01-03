import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import Tabs from "@mui/material/Tabs";
import tabCollection from "./navLinks"

const CustomTab: React.FC = () => {
  const [value, setValue] = React.useState(tabCollection[0].value);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    // setValue(newValue);
    console.log("new val ", newValue)
  };
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      textColor="secondary"
      indicatorColor="secondary"
      aria-label="secondary tabs"
    >
      {tabCollection.map(({ label, value }) => (
        <Tab
          value={value}
          label={label}
          key={label}
          sx={{textTransform: "capitalize"}}
        />
      ))}
    </Tabs>
  );
};

export default CustomTab;
