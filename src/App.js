import React, { useContext } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbars/Navbar";
import { Feed } from "./components/Feed";
import SortedProducts from './components/SortedProducts/SortedProducts';
import { MyContext } from "./Context/Context";

const App = () => {
    const {open, setOpen, type, setType} = useContext(MyContext);
  return (<>
      <Navbar />
      {
        type !== "" ?
        <SortedProducts/>
        : <Feed />

      }
      <Footer />
  </>
  );
};

export default App;
