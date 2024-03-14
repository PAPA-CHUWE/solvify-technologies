"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const AboutUs = () => {
  return (
    <Box className="w-full h-full flex-col justify-center items-center flex gap-5 " id="aboutus">
      <Typography variant="h4" component={"h6"}>
        About Us
      </Typography>
      <Box className="w-full flex-col  flex text-[#b28400]">
        <Box className="flex w-full justify-center items-center gap-10">
          <AnimatePresence>
            <motion.div
              className="flex  justify-center items-center w-[60vh] h-[20vh]  p-2"
              initial={{ x: -1000 }}
              animate={{ x: 0, y: [0, -20, 0], transition: { type: "spring", duration: 1, bounce: 0.5 } }}
              exit={{ x: -1000 }}
            >
              Company Overview: Solvify Investments specializes in AI and IT
              consultancy, empowering businesses with cutting-edge solutions to
              drive digital transformation and gain a competitive edge in
              today&apos;s fast-paced environment.
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            <motion.div
              className="flex  justify-center items-center w-[40vh] h-[20vh] p-2"
              initial={{ x: 1000 }}
              animate={{ x: 0, y: [0, -20, 0], transition: { type: "spring", duration: 1, bounce: 0.5 } }}
              exit={{ x: 1000 }}
            >
              Objectives: Provide transformative technology, leverage
              AI, blockchain, IoT, and nanotech for industry revolution, and
              deliver innovative consultancy and software solutions.
            </motion.div>
          </AnimatePresence>
        </Box>
        <Box className="flex w-full justify-center items-center p-2 gap-10">
          <AnimatePresence>
            <motion.div
              className="flex w-[60vh] h-[20vh]  justify-center items-center"
              initial={{ y: 1000 }}
              animate={{ y: [0, -20, 0], transition: { type: "spring", duration: 1, bounce: 0.5 } }}
              exit={{ y: 1000 }}
            >
              MISSION STATEMENT: “Passionately tap into the untapped prowess,
              bringing advanced technologies home, enhancing lives and empowering
              businesses.”
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            <motion.div
              className="flex w-[60vh] h-[20vh]   justify-center items-center p-2"
              initial={{ y: 1000 }}
              animate={{ y: [0, -20, 0], transition: { type: "spring", duration: 1, bounce: 0.5 } }}
              exit={{ y: 1000 }}
            >
              Vision Statement: We envision leading Africa to the forefront of the
              fourth industrial revolution, creating a pan-African billion-dollar
              investment in AI and becoming a key player in shaping the future of
              technology across diverse industries.
            </motion.div>
          </AnimatePresence>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
