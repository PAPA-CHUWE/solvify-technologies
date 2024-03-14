// LazyLoadComponent.js
"use client"
// LazyLoadComponent.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';

interface LazyLoadComponentProps {
  children: React.ReactNode;
}

const LazyLoadComponent = ({ children }: LazyLoadComponentProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    const targetElement = document.getElementById('lazy-load-trigger');

    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, []);

  return (
    <Box>
      <div id="lazy-load-trigger" />
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {children}
        </motion.div>
      )}
    </Box>
  );
};

export default LazyLoadComponent;
