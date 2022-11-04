import { Box, Button, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const NewProductCart = styled(Paper)(() => ({
  maxHeight: "450px",
  maxWidth: "300px",
  margin: "1rem",
}));

export const NewProductImageContainer = styled(Box)(() => ({
  position: "relative",
  width: "100%",
  height: "250px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  overflow: "hidden",
}));
export const NewProductImage = styled("img")(() => ({
  position: "absolute",
  width: "100%",
  maxHeight: "200px",
  objectFit: "contain",
  transition: "transform .3s",

  ":hover": {
    transform: "scale(1.1)",
  },
}));
export const NewProductTitle = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  padding: "1rem",
}));
export const NewProductPrice = styled(Typography)(() => ({
  fontSize: "17px",
  color: "color:rgb(75, 75, 75)",
}));

export const NewProductButton = styled(Button)(() => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: "1rem",
  backgroundColor: "#000 !important",
  fontSize: "15px",
  border: "1px solid transparent !important",
  ":hover": {
    backgroundColor: "#fff !important",
    border: "1px solid #000 !important",
    color: "#000 !important",
  },
}));

export const ArrowButton = styled(Button)(() => ({
  color: "#8aff26",
  width: "60px",
  height: "40px",
  border: "1px solid #8aff26",
  borderRadius: "0",
  margin:'.3rem'
}));
export const ArrowButtonContainer = styled(Box)(() => ({
    width:"100%", 
    display:"flex", 
    justifyContent:"end"
}));

