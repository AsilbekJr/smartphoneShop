import { Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TypeProContainer = styled(Box)(({theme}) => ({
    width:"100%",
    height:"auto",
    paddingBottom:"2rem"
}));


export const TypeProImage = styled("img")(({theme}) => ({
    width:"90px",
}))

export const TypeProPaper = styled(Paper)(() => ({
    height:"230px",
    display:"flex", 
    flexDirection:"column", 
    alignItems:"center", 
    paddingTop:"2rem",
    backgroundColor:"rgb(243, 243, 243)",
    borderRadius:"5px",
    border:"2px solid transparent",
    cursor:"pointer",
    transition:"all .3s",
    ":hover":{
        border:"2px solid #ccc",
        backgroundColor:"rgb(242,242,242)"
    }
}));

export const TypeProPaperText = styled(Typography)(() => ({
    fontSize:"1.8rem",
    fontWeight:"500",
    paddingTop:"2rem",
    color:"rgb(60,60,60)"

}))