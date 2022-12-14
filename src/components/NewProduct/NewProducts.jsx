import React, { useRef } from "react";
import Slider from "react-slick";
import { SectionTitle } from "../../styles/main";
import {
  ArrowButton,
  ArrowButtonContainer,
  ProductButton,
  ProductCart,
  ProductImage,
  ProductImageContainer,
  ProductPrice,
  ProductTitle,
  ProductName
} from "../../styles/main";
import {
  ShoppingCart,
  ArrowForwardIos,
  ArrowBackIosNew,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { SelectorAllSortedProduct } from "../../redux/sortedProductSlice";
import { addToCart } from "../../redux/cartSlice";

const NewProducts = () => {
  const allProducts = useSelector(SelectorAllSortedProduct);
  const sortedProducts = [];

  allProducts.forEach(product => {
    if(product.proType){
      sortedProducts.push(product)
    }
  })
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

 
  const slider = useRef(null);

const dispatch = useDispatch();



  return (
    <>
     
      <SectionTitle>Yangi Texnikalar</SectionTitle>
      <ArrowButtonContainer>
      <ArrowButton onClick={() => slider?.current?.slickPrev()}>
        <ArrowBackIosNew />
      </ArrowButton>
      <ArrowButton onClick={() => slider?.current?.slickNext()}>
        <ArrowForwardIos />
      </ArrowButton>
      </ArrowButtonContainer>
      <div>
        <Slider ref={slider} {...settings}>
          {sortedProducts.map((item) => (
            <ProductCart elevation={4} key={item.id}>
              <ProductImageContainer>
                <ProductImage src={item.img} />
              </ProductImageContainer>
              <ProductTitle>
                <ProductName>
                 {item.productName}
                </ProductName>
                <ProductPrice>{item.price} so'm</ProductPrice>
                <ProductButton
                  sx={{
                    width: "100%",
                    margin: "1rem 0",
                  }}
                  variant="contained"
                  endIcon={<ShoppingCart />}
                  onClick={() => dispatch(addToCart(item))}
                >
                  Add to cart
                </ProductButton>
              </ProductTitle>
            </ProductCart>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default NewProducts;
