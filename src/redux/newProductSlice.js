import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {
        id:1, productName:"Samsung S22 ultra", price:"11 700 000",img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667667816/Mobile%20Markaz/Samsung-S22-Ultra_Burgundy_1200x1200_pgbuqe.webp", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:2, productName:"Redmi Note 11 Pro", price:"3 140 000",img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667667725/Mobile%20Markaz/redmi_Not_11_pro_w1faxd.jpg", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:3, productName:"Huawei Band 6", price:"500 000",img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667667663/Mobile%20Markaz/smart-braslet-huawei-band-6-black-_ldxban.avif", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:4, productName:"ASUS 543M", price:"2 700 000",img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667667653/Mobile%20Markaz/ASUS_djg1rx.jpg", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:5, productName:"Klaviatura va sichqoncha", price:"150 000",img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667668189/Mobile%20Markaz/Keyboart_Gembird_KBS-UM-106_rlmeh0.jpg", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:6, productName:"Mikrafon BY-PM 700", price:"1 200 000",img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667671910/Mobile%20Markaz/boya_by_pm700_usb_windowsa_mac_compatible_microphone_1591327_daoiif.jpg", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:7, productName:"Quloqchin JEDEL GH-220", price:"190 000",img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667672251/Mobile%20Markaz/GH-220_ocdu6f.gif", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
    {
        id:8, productName:"Smart soat GS8 ultra", price:"399 000",img:"https://res.cloudinary.com/dkmi1dgqv/image/upload/v1667672672/Mobile%20Markaz/nGKLUGAW3AhnjCDaxSNQDcK6INC2forq1zRrBVn0_uqewya.jpg", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sunt magnam explicabo rerum saepe distinctio. Dolorem voluptatem beatae totam? At nesciunt deleniti blanditiis harum consequatur? Velit architecto atque dolore expedita."
    },
]

export const newProductSlice = createSlice({
    name:"newProducts",
    initialState,
    reducers:{

    }
})




export const selectorAllNewProduct = (state) => state.newProducts;
export default newProductSlice.reducer;