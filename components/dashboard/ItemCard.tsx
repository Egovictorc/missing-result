import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  IconButton,
  Stack,
  SvgIconTypeMap,
  Typography,
} from "@mui/material";
import React from "react";
import PaymentIcon from "@mui/icons-material/Payment";
import { Visibility } from "@mui/icons-material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import Image from "next/image";

const ItemCard: React.FC<{
  title: string;
  count: number;
  bg?: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
}> = ({ title, count, Icon, bg = "green" }) => {
  return (
    <Card sx={{mb: 2}}>
      <CardContent sx={{ backgroundColor: bg, color: "#fff"}}>
        <Stack direction="row" justifyContent="space-between">
          <IconButton sx={{ color: "#fff" }}>
            <Icon />
          </IconButton>

          <Box sx={{ textAlign: "right" }}>
            <Typography sx={{ fontSize: "2rem" }}>{count} </Typography>
            <Typography sx={{ textTransform: "capitalize" }}>
              {title}{" "}
            </Typography>
          </Box>
        </Stack>
        <Divider sx={{ background: "#fff" }} />

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography>View Details</Typography>

          <IconButton sx={{ color: "#fff" }}>
            <Visibility />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
