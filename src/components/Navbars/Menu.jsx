import {
Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
  } from "@mui/material";
  import {
    Close, Smartphone,Laptop, Headset, Speaker, Headphones, ReadMore
  } from "@mui/icons-material";
  import { useContext, useState } from "react";
import { MyContext } from "../../Context/Context";
import { MyDrawer } from "../../styles/Drawer";
import { MyListItemText } from "../../styles/MyMenu";
  
 
  
  function App() {
    const [open, setOpen] = useContext(MyContext)

  
    const getList = () => (
      <div style={{ width: "100%", background:"black",color:"white",height:"100%", }}>
          
          <Close color={'white'} fontSize="large" sx={{margin:"3.5rem 2.5rem", cursor:"pointer"}} onClick={() => setOpen(false)}/>
          <ListItem button >
            <ListItemIcon> <Smartphone sx={{color:"white"}} fontSize="large"/></ListItemIcon>
            <MyListItemText primary={"Smartfon"} />
          </ListItem>
          <Divider
          orientation="horizontal"
        />
          <ListItem button >
            <ListItemIcon>
            <Laptop sx={{color:"white"}} fontSize="large"/>
            </ListItemIcon>
            <MyListItemText primary={"Noutbuk"} />
          </ListItem>
          <Divider orientation="horizontal" />
          <ListItem button >
            <ListItemIcon> <Headset sx={{color:"white"}} fontSize="large"/> </ListItemIcon>
            <MyListItemText primary={"Aksesuarlar"} />
          </ListItem>
           <Divider orientation="horizontal" />
          <ListItem button >
            <ListItemIcon><Speaker sx={{color:"white"}} fontSize="large"/></ListItemIcon>
            <MyListItemText primary={"Kalonkalar"} />
          </ListItem>
           <Divider orientation="horizontal" />
          <ListItem button >
            <ListItemIcon><Headphones sx={{color:"white"}} fontSize="large"/></ListItemIcon>
            <MyListItemText primary={"Quloqchinlar"} />
          </ListItem>
           <Divider orientation="horizontal" />
          <ListItem button >
            <ListItemIcon><ReadMore sx={{color:"white"}} fontSize="large"/></ListItemIcon>
            <MyListItemText primary={"Boshqa maxsulotlar"} />
          </ListItem>
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