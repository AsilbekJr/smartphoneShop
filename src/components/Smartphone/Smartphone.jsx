import React, { useState } from "react";
import { useSelector } from "react-redux";
import { SelectorAllProduct } from "../../redux/allProductSlice";
import Pagination from '@mui/material/Pagination';
import { Box, Grid } from '@mui/material';
import { SectionTitle } from "../../styles/main";
import {
    ProductButton,
    ProductCart,
    ProductImage,
    ProductImageContainer,
    ProductPrice,
    ProductTitle,
    ProductName
  } from "../../styles/main";
import { ShoppingCart } from "@mui/icons-material";
const Smartphone = () => {
  const allProduct = useSelector(SelectorAllProduct);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(10);
  
  
  const isSmartphone = (product) =>{
    return product.type === "smartphone"
};
const smartphoneProducts = []
allProduct.forEach((item) => {
    if(item.type === "smartphone"){
        smartphoneProducts.push(item)
    }
})

  
  /* Get current product */
  
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProduct = smartphoneProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );


  const totalProduct = smartphoneProducts.length;
  const pageNumber = [];
  
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
    pageNumber.push(i);
  }

  return (

    <Box>
        <SectionTitle sx={{display:"flex", justifyContent:"center"}}>Smartfonlar</SectionTitle>
        <Grid container spacing={2}>
      {currentProduct.map((product) => (

        <Grid item xs={12} sm={12} md={4} lg={3}>
            <ProductCart elevation={4} key={product.id}>
              <ProductImageContainer>
                <ProductImage src={product.img} />
              </ProductImageContainer>
              <ProductTitle>
                <ProductName>
                 {product.name}
                </ProductName>
                <ProductPrice>{product.price} so'm</ProductPrice>
                <ProductButton
                  sx={{
                    width: "100%",
                    margin: "1rem 0",
                    backgroundColor: "#000",
                  }}
                  variant="contained"
                  endIcon={<ShoppingCart />}
                >
                  Add to cart
                </ProductButton>
              </ProductTitle>
            </ProductCart>
        </Grid>
      ))}
        </Grid>
      <Pagination count={pageNumber.length} page={currentPage} onChange={handleChange} />
    </Box>
  );
};




export default Smartphone;