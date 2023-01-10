
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const CartContainer = styled(Box)(({theme}) => ({
display:"flex",
width:"100%",
padding:"10px",
gap:"20px",
minHeight:"50vh",
margin:"1.4rem"
}));


export const CartFirstSection = styled(Box)(({theme}) => ({
    width:"65%",
   
   
}))


export const CartFirstItem = styled(Box)(({theme}) => ({
    width:"100%",
    display:"flex",
    justifyContent:"space-between",
    padding:"15px",
    border:"1px solid #ccc",
    borderRadius:"20px",
}))


export const CartSecondSection = styled(Box)(({theme}) => ({
    width:"35%",
    height:"300px",
   
    padding:"15px",
    border:"1px solid #ccc",
    borderRadius:"30px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around"
}))