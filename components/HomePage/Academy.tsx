import {
  Box,
  Card,
  CardContent,
  Stack,
  SvgIconTypeMap,
  Typography,
} from "@mui/material";
import React from "react";

import SchoolIcon from "@mui/icons-material/School";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface IAcademy {
  title: string;
  meta: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
}

const Academy: React.FC<IAcademy> = ({ title, meta, Icon }) => {
  return (
    <Card>
      <CardContent>
        <Stack direction="row" spacing={1}>
          <Icon />
          <Box>
            <Typography variant="caption">{title} </Typography>
            <Typography variant="body2">{meta} </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Academy;
