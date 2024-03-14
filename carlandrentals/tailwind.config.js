/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container:{
      padding:{
        DEFAULT: '15PX',
      }
    },
    screens:{
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px"
    },
    extend: {
      colors:{
        primary:"#be8400",
      secondary: "#FFFACD",
      accent:{
        DEFAULT: '#ffc107' ,
        hover: '#fdd835',
      },
      body:"#000453"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
