"use client";
import { Box, Typography, OutlinedInput, InputLabel } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import SendIcon from "@mui/icons-material/Send";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LaptopIcon from "@mui/icons-material/Laptop";

import {
  rainingVariants,
  slideInFromLeftVariant,
  slideInFromRightVariant,
  slideInFromTopVariant,
} from "@/app/utils/variants";

const ContactUs = () => {
  const text =
    "If you require any additional assistance or have further questions, please don't hesitate to contact us. At Solvify Technologies, we're committed to providing exceptional support and ensuring your satisfaction.";
  const words = text.split(" ");
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  };
  return (
    <Box className="w-full min-h-[100vh] flex justify-center p-24" id="contactus">
      <Box className="w-full 2xl:flex flex-col justify-center items-center h-full gap-10 md:items-center md:p-10 sm:items-center sm:p-10">
        <Box className="w-full items-center flex justify-center">
          <Typography variant="h6" component={"h2"}>
            Contact Us
          </Typography>
        </Box>
        <Box className="w-full 2xl:flex lg:flex 3xl:flex items-center justify-center p-5 gap-5">
          <Box className="w-[50%] h-full flex flex-col gap-10">
            <motion.div
              variants={slideInFromTopVariant}
              initial="hidden"
              animate="visible"
              className=" mx-auto mt-8"
            >
              <InputLabel
                htmlFor="address"
                className="flex text-[#BE8400] font-semibold mb-2 gap-4 justify-center items-center"
              >
                <HomeIcon />
                <Typography
                  variant="h6"
                  component={"h3"}
                  className="text-[#BE8400] font-semibold"
                >
                  1234 Elm Street Springfield, Anytown Country: Fictitiousland
                </Typography>
              </InputLabel>
            </motion.div>
            <motion.div
              variants={slideInFromLeftVariant}
              initial="hidden"
              animate="visible"
            >
              <InputLabel
                htmlFor="address"
                className="flex text-[#BE8400] font-semibold mb-2 gap-4 justify-center items-center"
              >
                <EmailIcon />
                <Typography
                  variant="h6"
                  component={"h3"}
                  className="text-[#BE8400] font-semibold"
                >
                  techsolutions@solvifytechnologies.systems
                </Typography>
              </InputLabel>
            </motion.div>
            <motion.div
              variants={slideInFromRightVariant}
              initial="hidden"
              animate="visible"
            >
              <InputLabel
                htmlFor="address"
                className="flex text-[#BE8400] font-semibold mb-2 gap-4 justify-center items-center"
              >
                <PhoneIcon />
                <Typography
                  variant="h6"
                  component={"h3"}
                  className="text-[#BE8400] font-semibold"
                >
                  +263 78 279 8854 / +263 78 134 3659
                </Typography>
              </InputLabel>
            </motion.div>
            <motion.div
              variants={slideInFromRightVariant}
              initial="hidden"
              animate="visible"
            >
              <InputLabel
                htmlFor="address"
                className="flex text-[#BE8400] font-semibold mb-2 gap-4 justify-center items-center"
              >
                <LaptopIcon />
                <Typography
                  variant="h6"
                  component={"h3"}
                  className="text-[#BE8400] font-semibold"
                >
                  www.solvifytechnologies.com
                </Typography>
              </InputLabel>
            </motion.div>
            <motion.div initial="initial" animate="animate" className=" text-[#BE8400] font-semibold mb-2 gap-4 justify-center items-center">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  variants={rainingVariants}
                  style={{ display: "inline-block", marginRight: "0.5rem" }}
                >
                  {word}{" "}
                </motion.span>
              ))}
            </motion.div>
          </Box>
          <Box className="w-[50%] h-full drop-shadow-2xl  rounded-3xl shadow-2xl shadow-indigo-50/95">
            <motion.form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto mt-8 p-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4">
                <InputLabel
                  htmlFor="name"
                  className="block text-[#BE8400]  font-semibold mb-2"
                >
                  Name
                </InputLabel>
                <OutlinedInput
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Your Name"
                  className="form-input bg-white w-full rounded-md"
                />
              </div>
              <div className="mb-4">
                <InputLabel
                  htmlFor="email"
                  className="block text-[#BE8400] font-semibold mb-2"
                >
                  Email
                </InputLabel>
                <OutlinedInput
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="form-input bg-white w-full rounded-md"
                />
              </div>
              <div className="mb-4">
                <InputLabel
                  htmlFor="message"
                  className="block text-[#BE8400]  font-semibold mb-2"
                >
                  Message
                </InputLabel>

                <OutlinedInput
                  id="message"
                  name="message"
                  rows="4"
                  className="form-textarea w-full rounded-md bg-white"
                  placeholder="Enter Message"
                  multiline
                />
              </div>
              <Button
                type="submit"
                className=" text-[#BE8400] border-[1] px-4 py-2 rounded-md hover:bg-[#fff] border transition-colors duration-300 flex gap-4 w-full"
                color="default"
                radius="md"
                endContent={<SendIcon />}
              >
                Send
              </Button>
            </motion.form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
