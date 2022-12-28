
import { styled } from '@mui/material/styles';
import { Grid, Box, Typography } from '@mui/material';

export const MainInfoContainer = styled(Grid)(({theme}) => ({
    padding:"1rem 2rem",
    alignContent:"center"
}))
export const LeftSide = styled(Grid)(({theme}) => ({
    display:"flex",
    justifyContent:"center",
    width:"100%",
    alignItems:"top"
}))
export const Image = styled("img")(({theme}) => ({
    width:"80%",
    maxHeight:"380px",
    objectFit:"contain",
    [theme.breakpoints.down("sm")]:{
        maxHeight:"250px",
    }
}))
export const RightSide = styled(Grid)(({theme}) => ({
 marginTop:"2rem"
}))
export const InfoListItem = styled(Box)(({theme}) => ({
    "&::before":{
        content:"''",
        borderBottom: "1px dashed #999",
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        height: "20px",
        paddingRight:"10px",
        position: "absolute",
        top: "-5px",
        width: "98%",
        zIndex: "1",
       
      },
    fontFeatureSettings: `"pnum" on,"lnum" on`,
    alignItems: "baseline",
    color: "#999",
    display: "flex",
    flex: "1",
    flex: "0 0 60%",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "20px",
    paddingRight: "20px",
    position: "relative",
    textAlign: "start",
  
}))

export const InfoTitle = styled(Typography)(({theme}) => ({
    padding:"2rem 0 0 5rem",
    [theme.breakpoints.down("sm")]:{
        padding:"1rem 0 0 2rem",
        fontSize:"2rem"
        
    }
}))