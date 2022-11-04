import React from "react";
import { Paper, Box, Typography, List, ListItem, useMediaQuery } from "@mui/material";
import { BannerContainer, BannerImageContainer,BannerImage, BannerInfo,BannerItemContainer,BannerInfoText,BannerInfoTitle } from "../../styles/Banner";
import { useTheme } from '@mui/material/styles';

const BannerItem1 = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
  <Paper sx={{borderRadius:"15px"}}>
  <BannerContainer >
     <BannerItemContainer>
       <BannerImageContainer  >
        <BannerImage src="./22ultra.png" alt=""/>
        </BannerImageContainer> 
        <BannerInfo>
           <BannerInfoTitle>
                Samsung Galaxy S22 Ultra
           </BannerInfoTitle>
           <Box >
             <List>
                 <ListItem><BannerInfoText  >Kuchli selfi kamera: 50MP</BannerInfoText></ListItem> 
                 <ListItem><BannerInfoText>Display: 6.8-inch, Quad HD+</BannerInfoText> </ListItem> 
                 <ListItem><BannerInfoText> Tezkor 5G internet </BannerInfoText> </ListItem> 
             </List>
           </Box>
           <Typography textAlign={"center"} sx={{fontSize:"12px",marginTop:"4rem", color:"gray", fontWeight:"600"}}>Biz sizga faqat sifatlisini taqdim qilamiz!</Typography>
        </BannerInfo>
     </BannerItemContainer>
  </BannerContainer>
  </Paper>
  )
};

export default BannerItem1;
