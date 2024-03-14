"use client";
import React, { useState } from "react";
import { Carousel } from "antd";
import Image from "next/image";
import { Box, Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";

interface ImageData {
  url: string;
  title: string;
  description: string;
}

interface ProductCardProps {
  images: ImageData[];
}

const ProductCard = ({ images }: ProductCardProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <Box className="w-[100vh] h-[80vh] items-center  flex-col relative">
      <Carousel
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
      </Carousel>
    </Box>
  );
};

export default ProductCard;
