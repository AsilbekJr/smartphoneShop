import React,{useState,createContext} from 'react'



export const MyContext = createContext();

export const MyContextProvider = (props) => {
    const [ open,setOpen ] = useState(false)
  return(
      <MyContext.Provider value={[open,setOpen]}>
        {props.children}
      </MyContext.Provider>
  )
}
 