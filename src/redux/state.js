import { configureStore } from "@reduxjs/toolkit";
import myProductSlice  from './newProductSlice';
import mySortedProducts from "./sortedProductSlice"

export const store = configureStore({
    reducer:{
        newProducts:myProductSlice,
        sortedProducts:mySortedProducts
    }
})