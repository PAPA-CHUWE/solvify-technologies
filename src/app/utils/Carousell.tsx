"use client";
import React, { useState } from "react";
import { Carousel as AntCarousel } from "antd";
import { Box, Typography, Divider } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import "@/app/globals.css";

interface ImageData {
  url: string;
  title: string;
  description: string;
}

export default function MyCarousel() {
  // Data for carousel items
  const images: ImageData[] = [
    {
      url: "/assets/mobileApss.jpeg",
      title: "AI software development and automation",
      description:
        "Integrating AI technologies with day-to-day business, automate business tasks, enhance decision making, and deliver superior user experiences.",
    },
    {
      url: "/assets/mobileApss.jpeg",
      title: "AI infrastructure setup and consulting",
      description:
        "Offering robust AI infrastructure tailored to the needs of each business. Establishing scalable and efficient AI ecosystems that can handle large volumes of data, complex computations and real time processing.",
    },
    // Add other carousel items here
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <Box className="w-[100vh] rounded-3xl h-full drop-shadow-lg border-opacity-0 shadow-2xl bg-blend-multiply shadow-sky-200/95">
      <AntCarousel
        effect="fade"
        autoplay
        autoplaySpeed={4000}
        infinite
        edgeFriction={5}
        easing="in"
        touchMove
        arrows
        swipeToSlide
        fade
        centerMode
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-[30rem] relative"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={image.url}
              alt={image.title}
              layout="fill"
              objectFit="cover"
              className="p-3 rounded-3xl hover:scale-105 hover:blur-sm"
            />
            {hoveredIndex === index && (
              <motion.div
                className="absolute inset-0 bg-[#000000] bg-opacity-50 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                style={{ zIndex: 10 }}
              >
                <div className="flex flex-col items-center justify-center w-full h-full gap-5 p-3 font-semibold">
                  <Typography variant="h6" component={'h6'} className="text-[#f4f2f0]">{image.title}</Typography>
                  <Divider className="text-white" variant="middle" component="li"/>
                  <Typography component={'desc'} className="text-[#f5f4f1] p-5 text-lg">{image.description}</Typography>
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </AntCarousel>
    </Box>
  );
}
