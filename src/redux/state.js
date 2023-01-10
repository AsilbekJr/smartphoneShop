import { configureStore } from "@reduxjs/toolkit";
import  cartReducer  from "./cartSlice";
import mySortedProducts from "./sortedProductSlice"

export const store = configureStore({
    reducer:{
        sortedProducts:mySortedProducts,
        cart: cartReducer,
    }
})