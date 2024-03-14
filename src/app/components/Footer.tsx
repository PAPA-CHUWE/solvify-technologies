import { Box } from "@mui/material";
import React from "react";
import FooterImpl from "../utils/FooterImpl";

const Footer = () => {
  return (
    <Box className="w-full h-full flex justify-center" id="Footer">
      <FooterImpl />
    </Box>
  );
};

export default Footer;
