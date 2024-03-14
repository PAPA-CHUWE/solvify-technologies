import ProductsList from '@/app/components/ProductList'
import { Box, Typography } from '@mui/material'
import React from 'react'
import "@/app/globals.css"

const Products = () => {
  return (
    <Box className="w-full h-[full] p-24 flex justify-center flex-col items-center" id="products">
        <Typography variant='h3' component={'h2'} >
            Our Products
        </Typography>
        <ProductsList/>
    </Box>
  )
}

export default Products
