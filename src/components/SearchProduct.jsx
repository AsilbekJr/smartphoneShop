import React, { useContext, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Box, Grid } from '@mui/material';
import { SectionTitle } from "../styles/main";
import {
    ProductButton,
    ProductCart,
    ProductImage,
    ProductImageContainer,
    ProductPrice,
    ProductTitle,
    ProductName
  } from "../styles/main";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { SelectorAllSortedProduct } from "../redux/sortedProductSlice";
import { MyContext } from '../Context/Context';
import { addToCart } from "../redux/cartSlice";

const SearchProduct = () => {
  const allProducts = useSelector(SelectorAllSortedProduct);

  const {searchProduct} = useContext(MyContext)

const dispatch = useDispatch()
  return (
    <Box>
        <Grid container spacing={2}>
      {allProducts.filter(pro => (
        pro.name.toLowerCase().includes(searchProduct.toLowerCase())
      )).map((product) => 
             
         (<Grid item xs={12} sm={6} md={3} lg={2.4} sx={{display:"flex", justifyContent:"center"}}>
            <ProductCart elevation={4} key={product.id}>
              <Link to={`/Quloqchinlar/${product.id}`}>
              <ProductImageContainer>
                <ProductImage src={product.img} />
              </ProductImageContainer>
              </Link>
              <ProductTitle>
                <ProductName>
                 {product.name}
                </ProductName>
                {product.newPrice ? <ProductPrice  sx={{ fontSize:"1rem", textDecoration:"line-through", color:"crimson"}}>{product.price} so'm</ProductPrice> : <ProductPrice >{product.price} so'm</ProductPrice>}
                <ProductPrice>{product.newPrice} so'm</ProductPrice>
                <ProductButton
                  sx={{
                    width: "100%",
                    margin: "1.5rem 0",
                    backgroundColor: "#000",
                  }}
                  variant="contained"
                  endIcon={<ShoppingCart />}
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add to cart
                </ProductButton>
              </ProductTitle>
            </ProductCart>
        </Grid>)
)}
        </Grid>
    </Box>
  );
};




export default SearchProduct;