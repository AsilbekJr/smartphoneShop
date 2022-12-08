import React from "react";
import { Paper, Box, Typography, List, ListItem, useMediaQuery } from "@mui/material";
import { BannerContainer, BannerImageContainer,BannerImage, BannerInfo,BannerItemContainer,BannerInfoText,BannerInfoTitle } from "../../styles/Banner";
import { useTheme } from '@mui/material/styles';

const BannerItem1 = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
  <Paper>
  <BannerContainer >
     <BannerItemContainer>
       <BannerImageContainer  >
        <BannerImage src="https://res.cloudinary.com/dkmi1dgqv/image/upload/v1669219517/Mobile%20Markaz/nz-galaxy-s22-ultra-s908-sm-s908ezwdxnz-530779348_pmy8yc.webp" alt="Samsung Galaxy S22 ultra"/>
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
