import React, { useContext } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbars/Navbar";
import { Feed } from "./components/Feed";
import SortedProducts from "./components/SortedProducts/SortedProducts";
import { MyContext } from "./Context/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Discount from "./components/Discount/Discount";
import FiveG from './components/fiveG/fiveG';
import Budget from "./components/Budget/Budget";

const App = () => {
  const { open, setOpen, type, setType } = useContext(MyContext);
  return (
    <>
      <BrowserRouter>
      <Navbar />

      {type !== "" ? (
        <SortedProducts />
      ) : (
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="discount" element={<Discount />} />
            <Route path="fiveG" element={<FiveG />} />
            <Route path="budget" element={<Budget />} />
          </Routes>
      )}
      <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
