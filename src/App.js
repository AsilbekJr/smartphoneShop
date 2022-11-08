import { Box } from "@mui/material";
import React from "react";
import Banner from "./components/Banner/Banner";
import BrandLink from "./components/BrandLink/BrandLink";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbars/Navbar";
import NewProducts from "./components/NewProduct/NewProducts";
import Payment from "./components/Payment/Payment";
import TypeInvide from "./components/TypeInvide/TypeInvide";
import TypeProduct from "./components/TypeProduct/TypeProduct";
import { MyContextProvider } from "./Context/Context";
import Smartphone from './components/Smartphone/Smartphone';

const App = () => {
  return (<>
  <MyContextProvider>
      <Navbar />
    <Box sx={{padding:"0 2rem"}}>
      <Banner />
      <BrandLink />
      <TypeInvide />
      <TypeProduct />
      <NewProducts />
      <Payment />
      <Contact />
    </Box>
      <Footer />
    <Smartphone />
  </MyContextProvider>
  </>
  );
};

export default App;
