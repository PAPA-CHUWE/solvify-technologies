import React from "react";
import ProductCard from "../utils/ProductCard";
import { Box } from "@mui/material";

const productList = [
  {
    title: "Data visualization applications",
    description:
      "Our data visualization applications help businesses understand their data better and make informed decisions.",
    imageUrl: "/assets/mobileApss.jpeg",
  },
  {
    title: "Customizable reconciliation robots",
    description:
      "Our reconciliation robots automate the reconciliation process and can be tailored to suit your business needs.",
    imageUrl: "/assets/rpa-concept-with-blue-bright-light.jpg",
  },
  {
    title: "Data storage facilities",
    description:
      "We provide secure and scalable data storage facilities to ensure your data is always accessible and protected.",
    imageUrl:
      "/assets/data-center-operation-with-highperformance-networking-gear.jpg",
  },
  {
    title: "Robotic Process Automation (RPA) Solutions",
    description:
      "Our RPA solutions automate repetitive tasks and workflows, increasing efficiency and reducing errors. We offer customizable bots tailored to your specific business needs, allowing you to streamline operations and focus on strategic initiatives.",
    imageUrl: "/assets/programming-background-with-html.jpg",
  },
  {
    title: "Generic models",
    description:
      "Our generic models offer flexible solutions for various business processes, allowing for easy customization and integration.",
    imageUrl:
      "/assets/ai-technology-brain-background-digital-transformation-concept.jpg",
  },
  {
    title: "Mobile App",
    description:
      "Our mobile app provides convenient solutions for various tasks, offering seamless user experience and integration.",
    imageUrl: "/assets/Kerfin7-NEA-2219.jpg",
  },
  {
    title: "Predictive Analytics Platform",
    description:
      "Our predictive analytics platform utilizes machine learning algorithms to forecast trends and make data-driven decisions.",
    imageUrl: "/assets/analysis-innovation-opportunities-strengths-strategic (1).jpg",
  },
  {
    title: "Image Recognition System",
    description:
      "Our image recognition system identifies objects and patterns in images, enhancing automation and security.",
    imageUrl: "/assets/facial-recognition-collage-concept.jpg",
  },
  {
    title: "Personalized Recommendation Engine",
    description:
      "Our recommendation engine analyzes user behavior to offer personalized suggestions, enhancing user engagement and satisfaction.",
    imageUrl: "/assets/ENGINE.jpg",
  },
  {
    title: "Fraud Detection System",
    description:
      "Our fraud detection system uses AI/ML algorithms to detect and prevent fraudulent activities, safeguarding financial transactions.",
    imageUrl: "/assets/FRAUD.jpg",
  },
];

const ProductList = () => {
  const images = productList.map((product) => ({
    url: product.imageUrl,
    title: product.title,
    description:product.description
  }));

  return (
    <Box className="w-full h-full justify-center flex">
      <ProductCard images={images} />
    </Box>
  );
};

export default ProductList;
