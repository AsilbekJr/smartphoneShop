import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id:1, budget:false, type:"smartphone",brand:"samsung", name:"Samsung A12", img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667749929/Mobile%20Markaz/a12_1_aqe7bg.webp", price:"2 000 000", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:2, budget:false, type:"laptop",brand:"acer", name:"Noutbuk Acer N4500 4GB/128GB", img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667806022/Mobile%20Markaz/A1NX.A9JEK.004_1_10875919_supersize_w8vskw.jpg", price:"3 730 000", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:3, budget:false, type:"aksesuar", name:"Redmi", img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667806242/Mobile%20Markaz/Haec6d1da5da44d93bee139d9789728e8D_bje6se.png", price:"10 000 - 50 000", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:4, budget:false, type:"smartphone",internet:"5G", name:"Pocco X4", img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667806443/Mobile%20Markaz/pocco_x4_5g_lamvmm.jpg", price:"3 330 000", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:5, budget:true,  type:"smartphone", name:"Samsung A03", img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667806748/Mobile%20Markaz/0001996_samsung-galaxy-a03-4gb64gb-blue-4g_600_a4s5se.png", price:"1 550 000", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:6, type:"smartphone", name:"Samsung A12", img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667749929/Mobile%20Markaz/a12_1_aqe7bg.webp", price:"2 000 000", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:7, type:"smartphone", name:"Samsung A12", img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667749929/Mobile%20Markaz/a12_1_aqe7bg.webp", price:"2 000 000", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:8, type:"smartphone", name:"Samsung A12", img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667749929/Mobile%20Markaz/a12_1_aqe7bg.webp", price:"2 000 000", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:9, type:"smartphone", name:"Samsung A12", img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667749929/Mobile%20Markaz/a12_1_aqe7bg.webp", price:"2 000 000", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:10, type:"smartphone", name:"Samsung A12", img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667749929/Mobile%20Markaz/a12_1_aqe7bg.webp", price:"2 000 000", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:11, type:"smartphone", name:"Samsung A123", img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667749929/Mobile%20Markaz/a12_1_aqe7bg.webp", price:"2 000 000", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:12, type:"smartphone", name:"Samsung A12", img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667749929/Mobile%20Markaz/a12_1_aqe7bg.webp", price:"2 000 000", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:13, type:"smartphone", name:"Samsung A12", img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667749929/Mobile%20Markaz/a12_1_aqe7bg.webp", price:"2 000 000", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:14, type:"smartphone", name:"Samsung A12", img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667749929/Mobile%20Markaz/a12_1_aqe7bg.webp", price:"2 000 000", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:15, type:"smartphone", name:"Samsung A12", img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667749929/Mobile%20Markaz/a12_1_aqe7bg.webp", price:"2 000 000", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:16, type:"smartphone", name:"Samsung A12", img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667749929/Mobile%20Markaz/a12_1_aqe7bg.webp", price:"2 000 000", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:17, type:"smartphone", name:"Samsung A12", img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667749929/Mobile%20Markaz/a12_1_aqe7bg.webp", price:"2 000 000", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:18, type:"smartphone", name:"Samsung A12", img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667749929/Mobile%20Markaz/a12_1_aqe7bg.webp", price:"2 000 000", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:19, type:"smartphone", name:"Samsung A12", img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667749929/Mobile%20Markaz/a12_1_aqe7bg.webp", price:"2 000 000", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:20, type:"smartphone", name:"Samsung A12", img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667749929/Mobile%20Markaz/a12_1_aqe7bg.webp", price:"2 000 000", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:21, type:"smartphone", name:"Samsung A12", img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667749929/Mobile%20Markaz/a12_1_aqe7bg.webp", price:"2 000 000", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:22, type:"smartphone", name:"Samsung A12", img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667749929/Mobile%20Markaz/a12_1_aqe7bg.webp", price:"2 000 000", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:23, type:"smartphone", name:"Samsung A124", img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667749929/Mobile%20Markaz/a12_1_aqe7bg.webp", price:"2 000 000", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:24, type:"smartphone", name:"Samsung A12", img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667749929/Mobile%20Markaz/a12_1_aqe7bg.webp", price:"2 000 000", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:25, type:"smartphone", name:"Samsung A12", img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667749929/Mobile%20Markaz/a12_1_aqe7bg.webp", price:"2 000 000", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:1, type:"smartphone", name:"Samsung A12", img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667749929/Mobile%20Markaz/a12_1_aqe7bg.webp", price:"2 000 000", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:1, type:"smartphone", name:"Samsung A12", img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667749929/Mobile%20Markaz/a12_1_aqe7bg.webp", price:"2 000 000", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:1, type:"smartphone", name:"Samsung A12", img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667749929/Mobile%20Markaz/a12_1_aqe7bg.webp", price:"2 000 000", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:1, type:"smartphone", name:"Samsung A12", img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667749929/Mobile%20Markaz/a12_1_aqe7bg.webp", price:"2 000 000", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:1, type:"smartphone", name:"Samsung A12", img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667749929/Mobile%20Markaz/a12_1_aqe7bg.webp", price:"2 000 000", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:1, type:"smartphone", name:"Samsung A12", img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667749929/Mobile%20Markaz/a12_1_aqe7bg.webp", price:"2 000 000", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:1, type:"smartphone", name:"Samsung A12", img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667749929/Mobile%20Markaz/a12_1_aqe7bg.webp", price:"2 000 000", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:1, type:"smartphone", name:"Samsung A12", img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667749929/Mobile%20Markaz/a12_1_aqe7bg.webp", price:"2 000 000", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:1, type:"smartphone", name:"Samsung A12", img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667749929/Mobile%20Markaz/a12_1_aqe7bg.webp", price:"2 000 000", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:1, type:"smartphone", name:"Samsung A12", img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667749929/Mobile%20Markaz/a12_1_aqe7bg.webp", price:"2 000 000", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
]

export const allProductSlice = createSlice({
    name:"allProducts",
    initialState,
    reducers:{

    }
})





export const SelectorAllProduct = (state) => state.allProducts;
export default allProductSlice.reducer;