import React from "react";
import { Paper, Button, Box, Typography, List, ListItem } from "@mui/material";
import { BannerContainer, BannerImageContainer2,BannerImage2, BannerInfo2,SaleInfo,SaleInfoText } from "../../styles/Banner";
const BannerItem2 = () => {
  return (
  <Paper >
  <BannerContainer sx={{
 background:"#333e48"
}}>
     <Box sx={{width:"100%", display:"flex"}}>
      <SaleInfo>
        <SaleInfoText> 
         <BannerImageContainer2  >
         <BannerImage2 src="./sale.png" alt=""/>
         </BannerImageContainer2> 
  Smartfonlar  <div style={{fontSize:"35px"}}>uchun "qaynoq" chegirmalar!!!</div>  
        </SaleInfoText>
      </SaleInfo>
        <BannerInfo2>
           <Box sx={{width:"100%", display:"flex", alignItems:"center", justifyContent:"center"}}>
              <img style={{width:"80%", height:"80%"}} src="./salePhone.png"/>
           </Box>          
        </BannerInfo2>
     </Box>
  </BannerContainer>
  </Paper>
  )
};

export default BannerItem2;
