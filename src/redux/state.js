import { configureStore } from "@reduxjs/toolkit";
import myProductSlice  from './newProductSlice';
import myAllProductsSlice from "./allProductSlice"

export const store = configureStore({
    reducer:{
        newProducts:myProductSlice,
        allProducts:myAllProductsSlice
    }
})