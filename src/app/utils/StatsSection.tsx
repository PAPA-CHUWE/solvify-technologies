"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import TextRating from "./TextRating ";
import CurveGraph from "./CurveGraph";
import { Box } from "@mui/material";

const StatsSection = () => {
  const [value, setValue] = useState(0);
  const controls = useAnimation();

  // Animation for numbers increasing
  useEffect(() => {
    controls.start({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    });
  }, [controls]);

  // Animation for graph curve showing growth
  useEffect(() => {
    controls.start({
      width: "100%",
      transition: {
        duration: 2,
      },
    });
  }, [controls]);

  const stats = [
    {
      data: "2K",
      title: "Customers",
    },
    {
      data: "25+",
      title: "Projects",
    },
    {
      data: "2+",
      title: "Countries",
    },
    // {
    //   data: "30M+",
    //   title: "Total revenue",
    // },
  ];

  return (
    <section className="py-14">
      <div className="items-start justify-between max-w-screen-xl px-4 mx-auto text-gray-600 gap-x-12 lg:flex md:px-8">
        <div className="flex-col sm:hidden lg:block lg:max-w-xl">
          <video
            autoPlay
            autoFocus
            loop
            muted
            className="shadow-xl rounded-2xl drop-shadow-sm shadow-slate-600/75"
            width="870"
            height="auto"
          >
            <source src="/assets/video (2160p)_6.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Box>
            <CurveGraph />
          </Box>
        </div>

        <div className="gap-12 mt-6 sm:mt-0 md:flex lg:block">
          <div className="max-w-2xl">
            <h3 className="text-[#a3c03c] text-3xl font-semibold sm:text-4xl">
              Solvify Technologies: Your Partner in AI/ML Solutions
            </h3>
            <p className="max-w-xl mt-3">
              At Solvify Technologies, we are dedicated to leveraging
              cutting-edge AI/ML technologies to empower businesses and
              organizations across industries. Our mission is simple yet
              profound: we strive to make our customers not just satisfied, but
              truly delighted with our solutions.
            </p>
          </div>

          <div className="flex-none mt-6 md:mt-0 lg:mt-6">
            <ul className="inline-grid grid-cols-2 gap-y-8 gap-x-14">
              {stats.map((item, idx) => (
                <motion.li
                  key={idx}
                  className=""
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={controls}
                >
                  <h4 className="text-4xl font-semibold text-indigo-600">
                    {item.data}
                  </h4>
                  <p className="mt-3 font-medium">{item.title}</p>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center mt-4 ">
        <TextRating  />
      </div>
        </div>
      </div>
      
    </section>
  );
};

export default StatsSection;
