import { Box } from "@mui/material";
import React from "react";
import Banner from './Banner/Banner';
import BrandLink from './BrandLink/BrandLink';
import Contact from "./Contact/Contact";
import NewProducts from "./NewProduct/NewProducts";
import Payment from "./Payment/Payment";
import TypeInvide from "./TypeInvide/TypeInvide";
import TypeProduct from "./TypeProduct/TypeProduct";

export const Feed = () => {
  return (
    <Box sx={{ padding: "0 2rem" }}>
      <Banner />
      <BrandLink />
      <TypeInvide />
      <TypeProduct />
      <NewProducts />
      <Payment />
      <Contact />
    </Box>
  );
};
