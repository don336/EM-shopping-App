import { Toolbar, Typography, Box, Stack } from "@mui/material";
import { AppBar } from "./Reusable.styles";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{
        display: "flex",
        justifyContent: "space-between"
      }}>
        <Typography variant="body1" noWrap component="div">
          &copy;2020 Lesmo. All rights reserved.
        </Typography>
        <Stack direction="row" spacing={2}>
            <Facebook/>
            <Instagram/>
            <Twitter/>
            <LinkedIn/>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
