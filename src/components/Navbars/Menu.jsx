import {
Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
  } from "@mui/material";
  import {
    Close, Smartphone,Laptop, Headset, Speaker, Headphones, ReadMore,Home, Book, BookSharp
  } from "@mui/icons-material";
  import { useContext, useState } from "react";
import { MyContext } from "../../Context/Context";
import { MyDrawer } from "../../styles/Drawer";
import { MyListItemText } from "../../styles/MyMenu";
import { Link } from "react-router-dom";
  
 
  
  function App() {
    const {open, setOpen, setType,setCurrentPage} = useContext(MyContext)
  
    const getList = () => (
      <div style={{ width: "100%", background:"black",color:"white",height:"100%", }}>
          
          <Close color={'white'} fontSize="large" sx={{margin:"3.5rem 2.5rem", cursor:"pointer"}} onClick={() => setOpen(false)}/>
          <Link style={{textDecoration:"none",color:"white"}} to={'/'}>
          <ListItem  onClick={() => { setOpen(false); setType("") }}>
            <ListItemIcon> <Home sx={{color:"white"}} fontSize="large"/></ListItemIcon>
            <MyListItemText primary={"Bosh sahifa"} />
          </ListItem>
           </Link>
          <Divider
          orientation="horizontal"
        />
        <Link style={{textDecoration:"none",color:"white"}} to={'Smartfonlar'}>
          <ListItem  onClick={() => { setOpen(false); setType("Smartfonlar") }}>
            <ListItemIcon> <Smartphone sx={{color:"white"}} fontSize="large"/></ListItemIcon>
            <MyListItemText primary={"Smartfon"} />
          </ListItem>
        </Link>
          <Divider
          orientation="horizontal"
        />
        <Link style={{textDecoration:"none",color:"white"}} to={'Noutbuklar'}>
          <ListItem  onClick={() => { setOpen(false); setType("Noutbuklar"); setCurrentPage(1) }}>
            <ListItemIcon>
            <Laptop sx={{color:"white"}} fontSize="large"/>
            </ListItemIcon>
            <MyListItemText primary={"Noutbuk"} />
          </ListItem>
        </Link>
          <Divider orientation="horizontal" />
          <Link style={{textDecoration:"none",color:"white"}} to={'Aksessuarlar'}>

          <ListItem  onClick={() => { setOpen(false); setType("Aksessuarlar"); setCurrentPage(1) }}>
            <ListItemIcon> <Headset sx={{color:"white"}} fontSize="large"/> </ListItemIcon>
            <MyListItemText primary={"Aksesuarlar"} />
          </ListItem>
          </Link>
           <Divider orientation="horizontal" />
           <Link style={{textDecoration:"none",color:"white"}} to={'Kalonkalar'}>
          <ListItem  onClick={() => { setOpen(false); setType("Kalonkalar"); setCurrentPage(1) }}>
            <ListItemIcon><Speaker sx={{color:"white"}} fontSize="large"/></ListItemIcon>
            <MyListItemText primary={"Kalonkalar"} />
          </ListItem>
           </Link>
           <Divider orientation="horizontal" />

           <Link style={{textDecoration:"none",color:"white"}} to={'Quloqchinlar'}>
          <ListItem  onClick={() => { setOpen(false); setType("Quloqchinlar"); setCurrentPage(1) }}>
            <ListItemIcon><Headphones sx={{color:"white"}} fontSize="large"/></ListItemIcon>
            <MyListItemText primary={"Quloqchinlar"} />
          </ListItem>
           </Link>
           <Divider orientation="horizontal" />

           <Link style={{textDecoration:"none",color:"white"}} to={'Kitoblar'}>
          <ListItem  onClick={() => { setOpen(false); setType("Kitoblar"); setCurrentPage(1) }}>
            <ListItemIcon><BookSharp sx={{color:"white"}} fontSize="large"/></ListItemIcon>
            <MyListItemText primary={"Kitoblar"} />
          </ListItem>
           </Link>
          <Divider orientation="horizontal" />
      </div>
    );
    return (
      <div>
        <MyDrawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
          {getList()}
        </MyDrawer>
      </div>
    );
  }
  
  export default App;