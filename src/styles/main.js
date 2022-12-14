import { Box, Button, Paper, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';



export const SectionTitle = styled(Box)(({theme}) => ({
    padding:"30px 0",
    display:"inline",
    fontSize: "50px",
    background: `-webkit-linear-gradient(#ff529e, #3bff8a)`,
     backgroundClip: 'text',
    textFillColor: 'transparent',
    textTransform:"uppercase",
    [theme.breakpoints.down('md')]:{
      fontSize:"2.2rem"
    }

}))

export const ProductCart = styled(Paper)(({theme}) => ({
  maxHeight: "450px",
  width: "300px",
  margin: "1rem"
}));

export const ProductImageContainer = styled(Box)(({theme}) => ({
  position: "relative",
  width: "100%",
  height: "200px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  overflow: "hidden",
  
}));
export const ProductImage = styled("img")(() => ({
  width: "80%",
  maxHeight: "180px",
  objectFit: "contain",
  transition: "transform .3s",

  ":hover": {
    transform: "scale(1.1)",
  },
}));
export const ProductTitle = styled(Box)(() => ({
  display:"flex",
  flexDirection:"column",
  alignItems:"baseline" ,
  width: "100%",
  padding: "1rem",
}));
export const ProductPrice = styled(Typography)(() => ({
  fontSize: "17px",
  color: "color:rgb(75, 75, 75)",
  lineHeight:"20px"
}));

export const ProductButton = styled(Button)(() => ({
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


export const ProductName = styled(Typography)(({theme}) => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: "1rem",
  height:"60px",
  fontSize:"1.2rem",
  lineHeight:"22px",
  color:"gray",
  fontWeight:"700",
  [theme.breakpoints.down('md')]:{
    fontSize:"1.7rem"
  }
}))
