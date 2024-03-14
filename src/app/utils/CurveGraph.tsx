"use client"
import { motion } from "framer-motion";

const CurveGraph = () => {
  return (
    <div className="flex justify-center mt-8 hover:rotate-90">
      <svg viewBox="0 0 400 200" className="w-[50vh] h-auto">
        <motion.path
          fill="transparent"
          stroke="yellow"
          strokeWidth="10"
          d="M0,100 C100,200 300,0 400,100"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
      </svg>
    </div>
  );
};

export default CurveGraph;
