import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart:[],
    totalQuantity:0,
    totalPrice:0
}

 const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
       addToCart:(state, action) => {
      let findSomeIndex = state.cart.findIndex((item) => item.id === action.payload.id);
         if(findSomeIndex >=0){
         state.cart[findSomeIndex].quantity +=1;
       }
       else{
        state.cart.push(action.payload)
       }
       },
       removeItem:(state, action) => {
         state.cart = state.cart.filter((item) => item.id !== action.payload.id)
       },
       icreaceItem:(state,action) => {
         state.cart = state.cart.map((item) => {
            if(item.id === action.payload.id){
            return {...item, quantity: item.quantity + 1 }
            }
            return item
         })
       },
       dereaceItem:(state,action) => {
         state.cart = state.cart.map((item) => {
            if(item.id === action.payload.id){
            return {...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
            }
            return item
         })
       },
       getCartTotal:(state) => {
         let {totalQuantity, totalPrice} = state.cart.reduce(
            (cartTotal, cartItem) => {
               const {price , quantity} = cartItem;
               let joined = price.split(" ").join("");

            let itemTotal = +joined * quantity;
            cartTotal.totalQuantity += quantity;
            cartTotal.totalPrice += itemTotal;
            return cartTotal
            },
            {
               totalPrice:0,
               totalQuantity:0
            }

         );
         state.totalPrice = parseInt(totalPrice.toFixed(2));
         state.totalQuantity = totalQuantity;
       }
    }
})

export const  { addToCart,removeItem,icreaceItem,dereaceItem,getCartTotal } = cartSlice.actions;
export default cartSlice.reducer