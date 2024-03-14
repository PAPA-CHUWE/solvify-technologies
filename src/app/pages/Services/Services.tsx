"use client";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import Carousell from "@/app/utils/Carousell";
import "@/app/globals.css"

const Services = () => {
  return (
    <Box
      className="w-full min-h-[100vh] flex justify-center items-center p-24"
      id="services"
    >
      <motion.div
        initial={{ x: -400 }} // Initial position (off-screen to the left)
        animate={{ x: 0 }} // Final position (slide in from left to right)
        transition={{ duration: 0.9, ease: "easeInOut" }} // Animation duration
        className="w-[30vh] h-[50vh] p-3 justify-center flex border-e items-center rounded-e-3xl bg-[#000453]"
      >
        <Typography variant="h6" component={"h2"}>
          Our Services
        </Typography>
      </motion.div>
      <Box className="w-full h-full flex justify-center items-center">
      <Carousell/>
      </Box>
    </Box>
  );
};

export default Services;
