"use client";

import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import "@/app/globals.css";

const FooterImpl = () => {
  return (
    <div className="w-full h-full">
      <footer className="text-gray-800 w-4/5 mx-auto inter md:pt-24 ">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col justify-between">
          <div className="flex-grow flex flex-wrap -mb-10 md:mt-0 mt-10 md:text-left text-center  drop-shadow-2xl shadow-2xl hover:shadow-blue-50/90 rounded-3xl w-[100vh]">
            <div className="lg:w-1/4 md:w-1/2  px-4">
              <h2 className="font-medium text-[#BE8400] text-base mb-3">
                About
              </h2>
              <nav className="list-none mb-10 flex flex-col text-sm space-y-3 font-normal">
                <li>
                  <a className=" hover:text-rose-50/100 cursor-pointer text-sky-500/100">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a className=" hover:text-rose-50/100 cursor-pointer text-sky-500/100">
                    Our Vision
                  </a>
                </li>
                <li>
                  <a className=" hover:text-rose-50/100 cursor-pointer text-sky-500/100">
                    Our Drive
                  </a>
                </li>
                <li>
                  <a className=" hover:text-rose-50/100 cursor-pointer text-sky-500/100">
                    Our Goals
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="font-medium text-[#BE8400] text-base mb-3">
                Company
              </h2>
              <nav className="list-none mb-10 flex flex-col text-sm space-y-3 font-normal">
                <li>
                  <a className=" hover:text-rose-50/100 cursor-pointer text-sky-500/100">
                    Company News
                  </a>
                </li>
                <li>
                  <a className=" hover:text-rose-50/100 cursor-pointer text-sky-500/100">
                    Meet the Team
                  </a>
                </li>
                <li>
                  <a className=" hover:text-rose-50/100 cursor-pointer text-sky-500/100">
                    Press Releases
                  </a>
                </li>
                <li>
                  <a className=" hover:text-rose-50/100 cursor-pointer text-sky-500/100">
                    Roadmap
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="font-medium text-[#BE8400] text-base mb-3">
                Services
              </h2>
              <nav className="list-none mb-10 flex flex-col text-sm space-y-3 font-normal">
                <li>
                  <a className=" hover:text-rose-50/100 cursor-pointer text-sky-500/100">
                    Robotic Process Automation
                  </a>
                </li>
                <li>
                  <a className=" hover:text-rose-50/100 cursor-pointer text-sky-500/100">
                  AI software development and automation
                  </a>
                </li>
                <li>
                  <a className=" hover:text-rose-50/100 cursor-pointer text-sky-500/100">
                  AI infrastructure setup and consulting
                  </a>
                </li>
                <li>
                  <a className=" hover:text-rose-50/100 cursor-pointer text-sky-500/100">
                  Mobile Application Design
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="font-medium text-[#BE8400] text-base mb-3">
                Contact
              </h2>
              <nav className="list-none mb-10 flex flex-col text-sm space-y-3 font-normal">
                <li>
                  <a className=" hover:text-rose-50/100 cursor-pointer text-sky-500/100">
                    Phone
                  </a>
                </li>
                <li>
                  <a className=" hover:text-rose-50/100 cursor-pointer text-sky-500/100">
                    Physical Adresss
                  </a>
                </li>
                <li>
                  <a className=" hover:text-rose-50/100 cursor-pointer text-sky-500/100">
                    Company Email
                  </a>
                </li>
                
              </nav>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-full mx-auto py-2 md:mt-12 text-sm">
        <hr className="h-px bg-gray-500 opacity-30 border-0 mb-4" />
        <div className="flex items-center mx-auto text-gray-600 container justify-center md:justify-between py-2 w-full">
          <div className="flex gap-4 w-full">
            <div className="flex gap-2 w-full">
              <Button
                className="text-[#be8400] hover:text-sky-500/100"
                endContent={<FacebookIcon />}
              />
              <Button
                className="text-[#be8400] hover:text-sky-500/100"
                endContent={<LinkedInIcon />}
              />
              <Button
                className="text-[#be8400] hover:text-sky-500/100"
                endContent={<WhatsAppIcon />}
              />
              <Button
                className="text-[#be8400] hover:text-sky-500/100"
                endContent={<InstagramIcon />}
              />
              <Button
                className="text-[#be8400] hover:text-sky-500/100"
                endContent={<FacebookIcon />}
              />
            </div>
            <motion.span
              className=" p-2 w-[200vh] justify-center  text-sky-500/100 font-sans"
              variants={waveAnimation}
              animate="wave"
            >
              © Copyright 2024, All Rights Reserved-SOLVIFY TECHNOLOGIES
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterImpl;

const waveAnimation = {
  wave: {
    color: "linear-gradient(to right, gold, blue, yellow)",
    backgroundSize: "300% 100%",
    animation: "waveAnimation 5.5s linear infinite",
  },
};
