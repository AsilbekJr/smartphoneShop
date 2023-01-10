import { Add, Delete, PlusOne, Remove } from "@mui/icons-material";
import { Box,Typography,IconButton,Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem,icreaceItem,dereaceItem, getCartTotal } from "../redux/cartSlice";
import {
  CartContainer,
  CartFirstItem,
  CartFirstSection,
  CartSecondSection,
} from "../styles/Cart";

const Cart = () => {
 let {cart,totalPrice,totalQuantity} = useSelector((state) => state.cart)    ;
 const dispatch = useDispatch();
 useEffect(() => {
   dispatch(getCartTotal())
 },[cart])
  return (
    <CartContainer>
      <CartFirstSection>
        
       {
        cart.length > 0 ?

        cart.slice(0).reverse().map((item) => (
            <CartFirstItem>
            <img src={item.img} alt={item.name} 
            style={{width:"150px"}}
            />
           
                <Typography variant="h4" sx={{width:"250px"}}>{item.name}</Typography>
            
            <Box display={"block"}>
                <IconButton>
                    <Remove sx={{color:"red"}} onClick={() => dispatch(dereaceItem(item))}/>
                </IconButton>
                {item.quantity}
                <IconButton>
                    <Add color={"success"} onClick={() => dispatch(icreaceItem(item))}/>
                </IconButton>
            </Box>
            <Box sx={{display:"flex", flexDirection:"column", justifyCOntent:"space-around"}}>
              <Typography variant="h4"> 
                  {item.price}
                </Typography>  
                <IconButton sx={{marginTop:"auto"}}>
                    <Delete sx={{color:"red"}} onClick={() => dispatch(removeItem(item))}/>
                </IconButton>
                
            </Box>
        </CartFirstItem>
        ))
        : 
        <Box>
          <Typography variant="h4" textAlign={"center"}> Savatcha hozircha bo'sh ( </Typography>
          <Link to="/" style={{color:"#444"}}> Xarid qilishni boshlash </Link>
        </Box>
        
       }
      </CartFirstSection>
      <CartSecondSection>
         <h3>Jami : {totalPrice}</h3>
         <Button  size="medium" variant="contained">
          Xarid qilish
        </Button>
      </CartSecondSection>
    </CartContainer>
  );
};

export default Cart;
