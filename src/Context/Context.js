import React,{useState,createContext} from 'react'



export const MyContext = createContext();

export const MyContextProvider = (props) => {
    const [open,setOpen] = useState(false);
    const [type, setType] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

  return(
      <MyContext.Provider value={{ open, setOpen, type, setType,currentPage, setCurrentPage}}>
        {props.children}
      </MyContext.Provider>
  )
}
 
