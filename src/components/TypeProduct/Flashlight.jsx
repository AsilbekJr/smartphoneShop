import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import Pagination from '@mui/material/Pagination';
import { Box, Grid } from '@mui/material';
import { SectionTitle } from "../../styles/main";
import { SelectorAllSortedProduct } from "../../redux/sortedProductSlice";
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
import { MyContext } from "../../Context/Context";
import { Link } from "react-router-dom";

const Flashlight = () => {
  const allProducts = useSelector(SelectorAllSortedProduct);
  const [productPerPage] = useState(15);
  const {currentPage, setCurrentPage} = useContext(MyContext);
  



  
  /* Get current product */
  
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;

  
  
  
  const sortedProducts = [];
  allProducts.forEach(product => {
    if(product.type === "Chiroqlar"){
      sortedProducts.push(product)
    }
  })


const currentProduct = sortedProducts.slice(
  indexOfFirstProduct,
  indexOfLastProduct
);

  
  const totalProduct = sortedProducts.length;
  const pageNumber = [];
  
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
    pageNumber.push(i);
  }

  return (

    <Box>
        <SectionTitle sx={{display:"flex", justifyContent:"center"}}>Yoritgichlar</SectionTitle>
        <Grid container spacing={2}>
      {currentProduct.map((product) => 
             
         (<Grid item xs={12} sm={6} md={3} lg={2.4} sx={{display:"flex", justifyContent:"center"}}>
            <ProductCart elevation={4} key={product.id}>
              <Link to={`/flashlight/${product.id}`}>
              <ProductImageContainer>
                <ProductImage src={product.img} alt={product.name}/>
              </ProductImageContainer>
              </Link>
              <ProductTitle>
                <ProductName>
                 {product.name}
                </ProductName>
                {product.newPrice ? 
               <>
               <ProductPrice  sx={{ fontSize:"1rem", textDecoration:"line-through", color:"crimson"}}>
                {product.price} so'm
                </ProductPrice>   
               <ProductPrice>{product.newPrice} so'm</ProductPrice>
               </> : 
                <ProductPrice>{product.price} so'm</ProductPrice>
                }
               
                 
                <ProductButton
                  sx={{
                    width: "100%",
                    margin: "1.5rem 0",
                    backgroundColor: "#000",
                  }}
                  variant="contained"
                  endIcon={<ShoppingCart />}
                >
                  Add to cart
                </ProductButton>
              </ProductTitle>
            </ProductCart>
        </Grid>)
)}
        </Grid>
           {sortedProducts.length > 12 &&   <Pagination count={pageNumber.length} page={currentPage} onChange={handleChange} />}
    </Box>
  );
};

 export default Flashlight;