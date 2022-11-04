import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const BannerContainer = styled(Box)(({theme}) => ({
    display:"flex",
    width:"100%",
    height:"350px",
    backgroundColor: "#FAACA8",
backgroundImage: `linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)`,
borderRadius:"15px",
cursor:"pointer"



}))
export const BannerImageContainer = styled(Box)(({theme}) => ({
  width:"40%",
  heigth:"100%",
  display:"flex",
  justifyContent:"end",
  [theme.breakpoints.down('md')]:{
    width:"50%",
  },
  [theme.breakpoints.down('sm')]:{
    width:"100%",
    justifyContent:"center",
  }
}))
export const BannerImage = styled("img")(({theme}) => ({
maxWidth:"350px",
  height:"100%",
  objectFit:"contain",
  [theme.breakpoints.down('lg')]:{
    maxWidth:"300px",
    height:"auto",
    objectFit:"contain",
  },
  [theme.breakpoints.down('md')]:{
    maxWidth:"250px",
    height:"auto",
    objectFit:"contain",
  }
}))
export const BannerInfo = styled(Box)(({theme}) => ({
  width:"60%",
  [theme.breakpoints.down('md')]:{
    width:"50%",
  },
  [theme.breakpoints.down('sm')]:{
    width:"0%",
    display:"none",
  }
  
}))
export const BannerInfoTitle = styled(Box)(({theme}) => ({
  textAlign:"center", 
  padding:"20px 0",
  fontSize:"38px",
  fontWeight:"900",
  [theme.breakpoints.down('lg')]:{
    padding:"18px 10px",
  fontSize:"34px",
  fontWeight:"800",
  },
  [theme.breakpoints.down('md')]:{
    padding:"18px 10px",
  fontSize:"27px",
  fontWeight:"700",
  }
}))
export const BannerInfoText = styled(Typography)(({theme}) => ({
  fontWeight:"900", 
  fontSize:"16px",
  color:"#FF8C32",
  [theme.breakpoints.down('lg')]:{
  fontSize:"15px",
  fontWeight:"800",
  },
  [theme.breakpoints.down('md')]:{
  fontSize:"14px",
  fontWeight:"700",
  },
}))

 
///Item 2
export const BannerImageContainer2 = styled(Box)(({theme}) => ({
  width:"20%",
  heigth:"50%",
  display:"flex",
  justifyContent:"start",
  alignItems:"start",
}))



export const SaleInfo = styled(Box)(({theme}) => ({
  background: "#ffb347",
  background: `-webkit-linear-gradient(to right, #ffcc33, #ffb347)`, 
  background: `linear-gradient(to right, #ffcc33, #ffb347)`,
  [theme.breakpoints.down("md")]:{
    width:"100%",
  }
}))
export const SaleInfoText = styled(Box)(({theme}) => ({
  borderTopLeftRadius:"15px", 
  borderBottomLeftRadius:"15px",  
  fontSize:"55px",
  lineHeight:"40px",
  fontWeight:"700",
  width:"500px",
  height:"100%", 
  textAlign:"center",
  color:"black",
  [theme.breakpoints.down("md")]:{
    width:"100%",
  }
}))
export const BannerImage2 = styled("img")(({theme}) => ({
    maxWidth:"150px",
    objectFit:"contain",
  }))
  export const BannerInfo2 = styled(Box)(({theme}) => ({
    display:"flex",
    alignItems:"center",
    width:"80%",
    [theme.breakpoints.down("md")]:{
      display:"none",
      width:"0",
    }
  }))


  //item 3
  export const BannerContainer3 = styled(Box)(({theme}) => ({
    display:"flex",
    width:"100%",
    height:"350px",
    backgroundColor: "#A9FDD8",
borderRadius:"15px",
cursor:"pointer"



}))
export const BannerImageContainer3 = styled(Box)(({theme}) => ({
  width:"60%",
  heigth:"100%",
  display:"flex",
  justifyContent:"end",

}))
export const BannerImage3 = styled("img")(({theme}) => ({
minWidth:"100%",
  height:"100%",
  objectFit:"cover",
  borderRadius:"15px"
}))
export const BannerInfo3 = styled(Box)(({theme}) => ({
  width:"100%"
  
}))

export const BannerItemContainer = styled(Box)(({theme}) => ({
 
  width:"100%", 
  display:"flex",
  [theme.breakpoints.down('730px')]:{
    flexDirection: 'column'
  }
  
}))
