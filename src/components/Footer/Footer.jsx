import { Grid, IconButton, ThemeProvider,Box, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import { logoFont } from "./../../styles/Navbar";
import { FGridItem, MyFooter } from "../../styles/Footer";
import { blue, pink } from "@mui/material/colors";
import { Facebook, Instagram, Telegram, Twitter,LocalPhoneOutlined,EmailOutlined } from "@mui/icons-material";
const Footer = () => {
  return (
    <MyFooter>
      <Grid container spacing={2}>
        <ThemeProvider theme={logoFont} width={100}>
          <Grid item lg={6}>
            <FGridItem>
              <Typography
                variant="h4"
                color={"#FF8C32"}
                sx={{ fontWeight: "700" }}
              >
                Mobile
              </Typography>
              <Typography
                variant="h4"
                color={"white"}
                sx={{ fontWeight: "700" }}
              >
                Markaz
              </Typography>
            </FGridItem>
            <Box p={2}>
                <IconButton><Facebook sx={{color:"#fff"}} fontSize={"medium"} />
                </IconButton>
                <IconButton ><Telegram sx={{color:"#fff"}} fontSize={"medium"} /></IconButton>
                <IconButton > <Instagram  sx={{color:"#fff"}} fontSize={"medium"} /></IconButton>
                <IconButton ><Twitter  sx={{color:"#fff"}} fontSize={"medium"} /></IconButton>                           
            </Box>
            <Typography sx={{fontSize:"16px", fontWeight:"300", color:"#fff", maxWidth:"90%"}}>
               Buxoro viloyati, G'ijduvon tumani, Sharifjon savdo markazi ro'parasi. Mobile Markaz 
            </Typography>
            <Box mt={2}>
            <Box sx={{display:"flex",padding:"10px 0",color:"white", gap:"15px"}}>
              <LocalPhoneOutlined sx={{color:"#fff"}}/>
              <Typography sx={{fontSize: "15px", fontWeight:"500"}}>+998997397157</Typography>
            </Box>
            <Box sx={{display:"flex",padding:"10px 0",color:"white", gap:"15px"}}>
              <EmailOutlined sx={{color:"#fff"}}/>
              <Typography sx={{fontSize: "15px", fontWeight:"500"}}>jaoripovich@gmail.com</Typography>
            </Box>
            </Box>
          </Grid>
          <Grid item lg={3}>
            <Box>
              <Typography sx={{fontSize:"22px", fontWeight:"700",color:"#FF8C32" }}>Tezkor O'tish</Typography>
            </Box>
            <Box>
               <List sx={{color:"white", fontWeight:"600"}}>
                    <ListItem >
                       <ListItemText sx={{cursor:"pointer"}}>Smartfonlar</ListItemText>
                    </ListItem>
                    <ListItem >
                       <ListItemText sx={{cursor:"pointer"}}>Aksesuarlar</ListItemText>
                    </ListItem>
                    <ListItem >
                       <ListItemText sx={{cursor:"pointer"}}>Noutbuklar</ListItemText>
                    </ListItem>
                    <ListItem >
                       <ListItemText sx={{cursor:"pointer"}}>Kalonkalar</ListItemText>
                    </ListItem>
                    <ListItem >
                       <ListItemText sx={{cursor:"pointer"}}>Quloqchinlar</ListItemText>
                    </ListItem>
                    <ListItem >
                       <ListItemText sx={{cursor:"pointer"}}>Smart Soatlar</ListItemText>
                    </ListItem>
                    <ListItem >
                       <ListItemText sx={{cursor:"pointer"}}>Brendlar</ListItemText>
                    </ListItem>
                    <ListItem >
                       <ListItemText sx={{cursor:"pointer"}}>Boshqa texnikalar</ListItemText>
                    </ListItem>
               </List>
            </Box>
          </Grid>
          <Grid item lg={3}>
          <Box>
              <Typography sx={{fontSize:"22px", fontWeight:"700",color:"#FF8C32" }}>Mijozlarga Xizmat</Typography>
            </Box>
            <Box>
               <List sx={{color:"white", fontWeight:"600"}}>
                    <ListItem >
                       <ListItemText sx={{cursor:"pointer"}}>Yetkazib Berish Xizmati</ListItemText>
                    </ListItem>
                    <ListItem >
                       <ListItemText sx={{cursor:"pointer"}}>Chegirmalar</ListItemText>
                    </ListItem>
                    <ListItem >
                       <ListItemText sx={{cursor:"pointer"}}>Aksiyalar</ListItemText>
                    </ListItem>
                    <ListItem >
                       <ListItemText sx={{cursor:"pointer"}}>Kafolat Muddati</ListItemText>
                    </ListItem>
                    <ListItem >
                       <ListItemText sx={{cursor:"pointer"}}>Bo'lib To'lash</ListItemText>
                    </ListItem>
               </List>
            </Box>
          </Grid>
        </ThemeProvider>
      </Grid>
    </MyFooter>
  );
};

export default Footer;
