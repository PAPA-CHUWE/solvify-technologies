"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

interface TypewriterTextProps {
  text: string;
  loop: boolean;
  delay: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, loop, delay }) => {
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;

    if (index < text.length) {
      timeout = setTimeout(() => {
        setIndex(index + 1);
      }, 100); 
    } else if (loop) {
      timeout = setTimeout(() => {
        setIndex(0);
        setTypedText("");
      }, delay); 
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [text, index, loop, delay]);

  useEffect(() => {
    if (index <= text.length) {
      setTypedText(text.slice(0, index));
    }
  }, [text, index]);

  return <span className="text-[#b28400]">{typedText}</span>;
};

const HeroContent = () => {
  return (
    <Box
      className="relative w-full h-screen overflow-hidden items-center flex justify-center bg-fixed"
      id="home"
    >
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{ x: 100 }}
        transition={{ delay: 1 }}
      />
      <motion.header
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 uppercase text-[35px] px-10 font-extrabold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          color: "linear-gradient(to right, #000453, #BE8400)",
        }}
      >
        <TypewriterText text="Solvify Technologies" loop={true} delay={3000} />
      </motion.header>
      <motion.p
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 mt-10 uppercase text-[30px] font-semibold px-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          color: "linear-gradient(to left, #000453, #BE8400)",
        }}
      >
        Unleashing Potential,{" "}
        <strong>
          <TypewriterText text="Transforming" loop={true} delay={3000} />
        </strong>{" "}
        tomorrow
      </motion.p>
    </Box>
  );
};

export default HeroContent;
