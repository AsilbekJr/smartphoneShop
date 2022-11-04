import { Email, Facebook, Instagram, LocationOn, Phone, Telegram, Twitter } from '@mui/icons-material'
import { Box, Grid, IconButton, Typography } from '@mui/material'
import React from 'react';
import { pink,blue } from '@mui/material/colors';
import { SectionTitle } from '../../styles/main'
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Contact = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <Box sx={{margin:"2rem 0", width:"100%", display:"flex", flexDirection:"column", alignItems:"center"}} >
        <SectionTitle >
            Biz bilan bog'lanish
        </SectionTitle>
    <Grid container spacing={2} >
        <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box sx={{width:"100%", padding:"0 20px"}}>
            <Box sx={{fontSize:"18px", fontWeight:"800"}}>Biz siz uchun doim shu yerdamiz!</Box>
            <Typography variant="p" sx={{fontWeight: "500", color:"rgb(65,65,65)", padding:"2rem 0"}}>
                Maxsulotlarimiz va xizmatlarimiz haqida ko'proq ma'lumot olmoqchi bo'lsangiz biz bilan bog'lanishingiz mumkin.
            </Typography>
            <Box sx={{padding:"1rem 0", display:"flex"}}>
                <LocationOn sx={{margin:"0 16px 0 0", color:pink[500]}} />
                <Typography sx={{display:"flex", alignItems:"center",fontWeight: "400", color:"rgb(65,65,65)"}} variant="p" ><Typography sx={{fontWeight:"bold",fontSize:"1.1rem"}}>Manzil:</Typography> G'ijduvon tumani, Mobile Markaz </Typography>
            </Box>
            <Box sx={{padding:"1rem 0", display:"flex"}}>
                <Phone sx={{margin:"0 16px 0 0", color:pink[500]}}/>
                <Typography sx={{display:"flex", alignItems:"center",fontWeight: "400", color:"rgb(65,65,65)"}} variant="p" ><Typography sx={{fontWeight:"bold",fontSize:"1.1rem"}}>Telefon:</Typography>+998997397157 </Typography>
            </Box>
            <Box sx={{padding:"1rem 0", display:"flex"}}>
                <Email sx={{margin:"0 16px 0 0", color:pink[500]}}/>
                <Typography sx={{display:"flex", alignItems:"center",fontWeight: "400", color:"rgb(65,65,65)"}} variant="p" ><Typography sx={{fontWeight:"bold",fontSize:"1.1rem"}}>Email:</Typography>jaoripovich@gmail.com </Typography>
            </Box>
            <Box>
                <Typography sx={{fontSize:"18px", fontWeight:"800",padding:"12px 0 0 0"}}>Follow us</Typography>
                <IconButton><Facebook sx={{color:blue[900]}} fontSize={"small"} />
                </IconButton>
                <IconButton ><Telegram color={"primary"} fontSize={"small"} /></IconButton>
                <IconButton > <Instagram  sx={{color:pink[500]}} fontSize={"small"} /></IconButton>
                <IconButton ><Twitter  color={"primary"} fontSize={"small"} /></IconButton>    
            </Box>
            </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} >
        <Box sx={{width:"100%", padding:"0 20px"}}>
        <div class="mapouter">
            {matches 
            ?
            (<iframe matches  style={{width:"400px", height:"350px"}} id="gmap_canvas" src="https://maps.google.com/maps?q=40.095755321098885,%2064.68149154597413&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>)
            :
            (<iframe matches  style={{width:"450px", height:"400px"}} id="gmap_canvas" src="https://maps.google.com/maps?q=40.095755321098885,%2064.68149154597413&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>)}
            </div>
        </Box>
        </Grid>
    </Grid>
    </Box>
  )
}

export default Contact