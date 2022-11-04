import { Box, IconButton, Typography } from "@mui/material";
import React, { useRef } from "react";
import Slider from "react-slick";
import { SectionTitle } from "../../styles/main";
import {
  ArrowButton,
  ArrowButtonContainer,
  NewProductButton,
  NewProductCart,
  NewProductImage,
  NewProductImageContainer,
  NewProductPrice,
  NewProductTitle,
} from "../../styles/NewProductStyle";
import {
  ShoppingCart,
  ArrowForwardIos,
  ArrowBackIosNew,
} from "@mui/icons-material";

const NewProducts = () => {
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

  const arr = [
    "https://assets.asaxiy.uz/product/items/desktop/e9cbc8ed06c0840f6ecbbd9ea8f040032021102115184518692PNgSYbrr1G.jpg.webp",
    "https://mobilefactbd.com/wp-content/uploads/2021/11/Xiaomi-Redmi-Note-12.jpg",
    "https://freepngimg.com/thumb/headphones/16-black-headphones-png-image.png",
    "https://www.lenovo.com/medias/lenovo-laptops-ideapad-5i-15-series.png?context=bWFzdGVyfHJvb3R8NzczNTR8aW1hZ2UvcG5nfGgzMi9oY2QvMTQxOTE2MTUxMTUyOTQucG5nfDYzZjVhMTBmM2Q1OTlhZGI2NzIyYTQ0NTc5OTE5ZmJjNWRjNzVlNDIyYzM3M2UzZmUyMWIwZGE5MzBkOTA3ZjY",
    "https://m.media-amazon.com/images/I/71x+m2-yb7L._SX522_.jpg",
  ];
  const slider = useRef(null);
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
          {arr.map((item) => (
            <NewProductCart elevation={4} key={item.length}>
              <NewProductImageContainer>
                <NewProductImage src={item} />
              </NewProductImageContainer>
              <NewProductTitle>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "1rem",
                  }}
                  variant="h4"
                >
                  iPhone 13
                </Typography>
                <NewProductPrice>9 000 000 so'm</NewProductPrice>
                <NewProductButton
                  sx={{
                    width: "100%",
                    margin: "1rem 0",
                    backgroundColor: "#000",
                  }}
                  variant="contained"
                  endIcon={<ShoppingCart />}
                >
                  Add to cart
                </NewProductButton>
              </NewProductTitle>
            </NewProductCart>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default NewProducts;
