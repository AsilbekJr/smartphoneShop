
import React  from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbars/Navbar";
import { Feed } from "./components/Feed";
import { BrowserRouter, Route, Routes, useSearchParams } from "react-router-dom";
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
import SearchProduct from "./components/SearchProduct";
import { useContext } from "react";
import { MyContext } from "./Context/Context";
import Cart from "./components/Cart";

const App = () => {
 const {searchProduct} = useContext(MyContext)
 
  return (
    
      <div>
      <Navbar/>

          <Routes>           
            <Route path="/" element={searchProduct ? <SearchProduct /> : <Feed />} />
            <Route path="Smartfonlar" element={searchProduct ? <SearchProduct /> :<Smartphones/>}/>
            <Route path={`Smartfonlar/:id`} element={searchProduct ? <SearchProduct /> :<ProductInfo/>}/>
            <Route path="Kitoblar" element={searchProduct ? <SearchProduct /> :<Books/>}/>
            <Route path={`Kitoblar/:id`} element={searchProduct ? <SearchProduct /> :<ProductInfo/>}/>
            <Route path="Quloqchinlar" element={searchProduct ? <SearchProduct /> :<Earphones/>}/>
            <Route path={'Quloqchinlar/:id'} element={searchProduct ? <SearchProduct /> :<ProductInfo/>}/>
            <Route path="Noutbuklar" element={searchProduct ? <SearchProduct /> :<Laptops/>}/>
            <Route path={'Noutbuklar/:id'} element={searchProduct ? <SearchProduct /> :<ProductInfo/>}/>
            <Route path="Aksessuarlar" element={searchProduct ? <SearchProduct /> :<Accessories/>}/>
            <Route path={'Aksessuarlar/:id'} element={searchProduct ? <SearchProduct /> :<ProductInfo/>}/>
            <Route path="Kalonkalar" element={searchProduct ? <SearchProduct /> :<Speakers/>}/>
            <Route path={'Kalonkalar/:id'} element={searchProduct ? <SearchProduct /> :<ProductInfo/>}/>
            

            <Route path="discount" element={searchProduct ? <SearchProduct /> :<Discount />} />
            <Route path="discount/:id" element={searchProduct ? <SearchProduct /> :<ProductInfo />} />

            <Route path="fiveG" element={searchProduct ? <SearchProduct /> :<FiveG />} />
            <Route path="fiveG/:id" element={searchProduct ? <SearchProduct /> :<ProductInfo />} />

            <Route path="budget" element={searchProduct ? <SearchProduct /> :<Budget />} />
            <Route path="budget/:id" element={searchProduct ? <SearchProduct /> :<ProductInfo />} />

            <Route path="tablet" element={searchProduct ? <SearchProduct /> :<Tablet />} />
            <Route path="tablet/:id" element={searchProduct ? <SearchProduct /> :<ProductInfo />} />

            <Route path="glasses" element={searchProduct ? <SearchProduct /> :<Glasses />} />
            <Route path="glasses/:id" element={searchProduct ? <SearchProduct /> :<ProductInfo />} />
            
            <Route path="smartwatch" element={searchProduct ? <SearchProduct /> :<SmartWatch />} />
            <Route path="smartwatch/:id" element={searchProduct ? <SearchProduct /> :<ProductInfo />} />

            <Route path="gaming" element={searchProduct ? <SearchProduct /> :<Gaming />} />
            <Route path="gaming/:id" element={searchProduct ? <SearchProduct /> :<ProductInfo />} />

            <Route path="flashlight" element={searchProduct ? <SearchProduct /> :<Flashlight />} />
            <Route path="flashlight/:id" element={searchProduct ? <SearchProduct /> :<ProductInfo />} />

            <Route path="cart" element={<Cart />}/>
            
           
        </Routes>
      
     <Footer />
      </div>
  );
};

export default App;
