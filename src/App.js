
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
import Tablet from './components/TypeProduct/Tablet';
import Glasses from './components/TypeProduct/Glasses';
import SmartWatch from './components/TypeProduct/SmartWatch';
import Gaming from './components/TypeProduct/Gaming';
import Flashlight from './components/TypeProduct/Flashlight';

const App = () => {
  const {  type } = useContext(MyContext);
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
            <Route path="tablet" element={<Tablet />} />
            <Route path="glasses" element={<Glasses />} />
            <Route path="smartwatch" element={<SmartWatch />} />
            <Route path="gaming" element={<Gaming />} />
            <Route path="flashlight" element={<Flashlight />} />
          </Routes>
      )}
      <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
