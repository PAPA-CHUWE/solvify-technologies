"use client"
import * as React from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const labels: { [index: string]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Client-Satisfaction',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const TextRating = () => {
  const value = 3.5;

  return (
    <Box
      sx={{
        width: 250,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Rating
        className='w-full'
          name="text-feedback"
          value={value}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
      </motion.div>
      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
    </Box>
  );
};

export default TextRating;
