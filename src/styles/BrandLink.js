import {  List,ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MyBrandList = styled(List)(({ theme }) => ({
  backgroundColor: "#edede9",
  borderRadius: 2,
  padding: 1,
  width: "100%",
  display: "flex",
  [theme.breakpoints.down("md")]:{
    flexDirection: "column"
  }
}));
export const MyBrandListText = styled(ListItemText)(({ theme }) => ({
    width:"100%",
    display:"flex", 
    justifyContent:"center", 
    alignItems:"center",
    ".MuiListItemText-primary":{
        fontSize:"12px",
        fontWeight:"600",
        textTransform: "uppercase",
        [theme.breakpoints.down("md")]:{
            fontSize:"16px",
          }
    },
    
}));
