"use client"
import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion"; 
import HeroSection from "./components/HeroSection";
import HeroContent from "./components/HeroContent";
import Products from "./pages/Products/Products";
import Services from "./pages/Services/Services";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Footer from "./components/Footer";
import StatsSection from "./utils/StatsSection";


const LazyMotionBox = motion(Box);

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".scroll-animation");

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          section.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <LazyMotionBox className="w-full h-full scroll-me-32 scroll-smooth">
      <HeroSection />
      <HeroContent />
      <LazyMotionBox className="scroll-animation">
        <Products />
      </LazyMotionBox>
      <LazyMotionBox className="scroll-animation">
        <Services />
      </LazyMotionBox>
      <LazyMotionBox className="scroll-animation">
        <AboutUs />
      </LazyMotionBox>
      <LazyMotionBox className="scroll-animation">
        <ContactUs />
      </LazyMotionBox>
      <LazyMotionBox className="scroll-animation">
        <StatsSection />
      </LazyMotionBox>
      {/* <LazyMotionBox className="scroll-animation">
        <FancyTestimonialsSlider testimonials={testimonialsData} />
      </LazyMotionBox> */}
      <LazyMotionBox className="scroll-animation">
        <Footer />
      </LazyMotionBox>
    </LazyMotionBox>
  );
};

export default Home;
