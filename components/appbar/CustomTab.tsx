import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import Tabs from "@mui/material/Tabs";

const tabCollection = [
  { label: "Home", value: "home" },
  { label: "administration", value: "administration" },
  { label: "admissions", value: "admissions" },
  { label: "academic", value: "academic" },
  { label: "units", value: "units" },
  { label: "centers", value: "centers" },
];
const CustomTab: React.FC = () => {
  const [value, setValue] = React.useState("home");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
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
