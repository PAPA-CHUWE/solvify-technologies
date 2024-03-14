"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBriefcase,
  faEnvelope,
  faPrescription,
} from "@fortawesome/free-solid-svg-icons";
import { navVariants } from "./variants"; // Importing variants
import { Box, Typography } from "@mui/material";
import { Spacer } from "@nextui-org/react";

interface NavLinkProps {
  id: string;
  title: string;
  icon: any; // Adjust the type as needed
  isActive: boolean;
  handleClick: (id: string) => void;
}

const NavLinks = [
  {
    id: "home",
    title: "Home",
    icon: faHome,
  },
  {
    id: "products",
    title: "Products",
    icon: faPrescription,
  },
  {
    id: "services",
    title: "Services",
    icon: faBriefcase,
  },
  {
    id: "aboutus",
    title: "About Us",
    icon: faUser,
  },
  {
    id: "contactus",
    title: "Contact Us",
    icon: faEnvelope,
  },
];

const NavLink = ({ id, title, icon, isActive, handleClick }: NavLinkProps) => {
  return (
    <motion.li
      whileHover={{ scale: 1.1 }} // Scale up the button on hover
      whileTap={{ scale: 0.9 }}
      className="flex items-center space-x-3 cursor-pointer" // Moved class to motion.li
      onClick={() => handleClick(id)}
    >
      <FontAwesomeIcon icon={icon} className="w-[10px] h-[10px]" />
      <a href={`#${id}`} className={`relative inline-block group ${isActive ? 'text-[#BE8400]' : ''}`}>
        {title}
        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#BE8400] transition-all duration-300 w-0 group-hover:w-full"></span>
      </a>
    </motion.li>
  );
};

const Nav = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeLink, setActiveLink] = useState("home"); // Track active link

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (id: string) => {
    setActiveLink(id);
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="show"
      className={`flex items-center justify-between py-4 px-8 ${
        isSticky ? "fixed top-0 left-0 w-full bg-[#000453] shadow-md z-10" : ""
      }`}
    >
      <Box component="div" className="flex items-center">
        <Box component="div" className="mr-4 cursor-pointer">
          <motion.header
            whileHover={{ scale: 1.1 }} // Scale up the button on hover
            whileTap={{ scale: 0.9 }}
          >
            <Typography variant="h6" className="uppercase">
              Solvify Technologies
            </Typography>
          </motion.header>
        </Box>
        <Spacer x={96} />
        <ul className="flex items-center space-x-4 sm:hidden md:hidden lg:flex">
          {NavLinks.map((link) => (
            <NavLink
              key={link.id}
              id={link.id}
              title={link.title}
              icon={link.icon}
              isActive={activeLink === link.id} 
              handleClick={handleLinkClick} 
            />
          ))}
        </ul>
      </Box>
      <Box component="div">
        <motion.button
          whileHover={{ scale: 1.1 }} // Scale up the button on hover
          whileTap={{ scale: 0.9 }} // Scale down the button when tapped
          className="bg-[#000453] border hover:bg-[#063961] text-white font-semibold py-2 px-4 rounded-full"
        >
          Get Quote
        </motion.button>
      </Box>
    </motion.nav>
  );
};

export default Nav;
