import { configureStore } from "@reduxjs/toolkit";
import mySortedProducts from "./sortedProductSlice"

export const store = configureStore({
    reducer:{
        sortedProducts:mySortedProducts
    }
})