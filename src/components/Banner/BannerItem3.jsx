import React from "react";
import { Paper, Box, Typography, useMediaQuery } from "@mui/material";
import { BannerContainer3,BannerImage3,  } from "../../styles/Banner";
import { useTheme } from '@mui/material/styles';
const BannerItem3 = () => {
   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
  <Paper>
  <BannerContainer3 >
{matches 
     ? 
     (<Box sx={{width:"100%", display:"flex"}}>
        <BannerImage3 src="./aksesuarlar.png" alt=""/>
     </Box>)
     :
     (<Box sx={{width:"100%",height:"100%", display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
         <Box sx={{width:"200px"}}>
             <img style={{width:"100%",objectFit:"cover"}} src="./naushnik.png"/>
         </Box>
         <Box sx={{padding:"20px 0", fontSize:"34px", fontWeight:"800"}}>
            Aksesuarlar
         </Box>
     </Box>)}
  </BannerContainer3>
  </Paper>
  )
};

export default BannerItem3;
