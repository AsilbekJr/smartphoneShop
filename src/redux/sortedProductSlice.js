import { createSlice } from "@reduxjs/toolkit";
import { allProductsData } from "../db";

const initialState = [...allProductsData]





export const sortedProductSlice = createSlice({
    name:"sortedProducts",
    initialState,
    reducers:{
         
       }
})





export const SelectorAllSortedProduct = (state) => state.sortedProducts;
export default sortedProductSlice.reducer;