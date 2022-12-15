
import React, { useContext } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbars/Navbar";
import { Feed } from "./components/Feed";
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
import ProductInfo from './components/ProductInfo';
import Smartphones from './components/Products/Smartphones';
import Books from './components/Products/Books';
import Earphones from './components/Products/Earphones';
import Laptops from './components/Products/Laptops';
import Accessories from './components/Products/Accessories';
import Speakers from './components/Products/Speakers';

const App = () => {
  const { type } = useContext(MyContext);
  return (
    <>
      <BrowserRouter>
      <Navbar />
     <Routes>
    
            <Route path="/" element={<Feed />} />
            <Route path="Smartfonlar" element={<Smartphones/>}/>
            <Route path="Kitoblar" element={<Books/>}/>
            <Route path="Quloqchinlar" element={<Earphones/>}/>
            <Route path="Noutbuklar" element={<Laptops/>}/>
            <Route path="Aksessuarlar" element={<Accessories/>}/>
            <Route path="Kalonkalar" element={<Speakers/>}/>
            <Route path={`${type}/:id`} element={<ProductInfo/>}/>
            

            <Route path="discount" element={<Discount />} />
            <Route path="discount/:id" element={<ProductInfo />} />

            <Route path="fiveG" element={<FiveG />} />
            <Route path="fiveG/:id" element={<ProductInfo />} />

            <Route path="budget" element={<Budget />} />
            <Route path="budget/:id" element={<ProductInfo />} />

            <Route path="tablet" element={<Tablet />} />
            <Route path="tablet/:id" element={<ProductInfo />} />

            <Route path="glasses" element={<Glasses />} />
            <Route path="glasses/:id" element={<ProductInfo />} />
            
            <Route path="smartwatch" element={<SmartWatch />} />
            <Route path="smartwatch/:id" element={<ProductInfo />} />

            <Route path="gaming" element={<Gaming />} />
            <Route path="gaming/:id" element={<ProductInfo />} />

            <Route path="flashlight" element={<Flashlight />} />
            <Route path="flashlight/:id" element={<ProductInfo />} />
           
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
