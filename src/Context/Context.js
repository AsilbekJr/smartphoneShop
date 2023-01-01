import React,{useState,createContext} from 'react'
import { useSearchParams } from 'react-router-dom';



export const MyContext = createContext();

export const MyContextProvider = (props) => {
    const [open,setOpen] = useState(false);
    const [type, setType] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [searchProduct, setSearchProduct] = useState(null);

const value = { open, setOpen, type, setType,currentPage, setCurrentPage,searchProduct, setSearchProduct }
  return(
      <MyContext.Provider value={value}>
        {props.children}
      </MyContext.Provider>
  )
}
 
