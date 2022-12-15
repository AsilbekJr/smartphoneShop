import {  Box, Grid, useMediaQuery,  } from "@mui/material";
import React, { useContext, useState } from "react";
import {  MenuRouting } from "../../styles/Navbar";
import { useTheme } from '@mui/material/styles';
import { MyContext } from "../../Context/Context";
const BotttomNavbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  
  
  //  const { ...forType} = useContext(MyContext);

   const {setType,type, setCurrentPage} = useContext(MyContext);
  return (

    matches &&   (<Box sx={{ background: "#333e48" }}>  
        <Grid container spacing={3} sx={{display:"flex", justifyContent:"center", alignItems:"center", height:"80px"}}>
          <Grid item >    
              <MenuRouting onClick={() => {setType(""); setCurrentPage(1);}} to="/">Bosh sahifa</MenuRouting>
          </Grid>
          <Grid item >
            <MenuRouting onClick={() => {setType("Smartfonlar"); setCurrentPage(1);} }to="Smartfonlar" >Smartfonlar</MenuRouting>
          </Grid>
          <Grid item>
            <MenuRouting onClick={() => { setType("Noutbuklar"); setCurrentPage(1); } }to="Noutbuklar">Noutbuklar</MenuRouting>
          </Grid>
          <Grid item>
            <MenuRouting onClick={() => {setType("Aksessuarlar"); setCurrentPage(1);} }to="Aksessuarlar">Aksesuarlar</MenuRouting>
          </Grid>
          <Grid item>
            <MenuRouting onClick={() => {setType("Kalonkalar"); setCurrentPage(1);} }to="Kalonkalar">Kalonkalar</MenuRouting>
          </Grid>
          <Grid item>
            <MenuRouting onClick={() => {setType("Quloqchinlar"); setCurrentPage(1); } }to="Quloqchinlar" >Quloqchinlar</MenuRouting>
          </Grid>
          <Grid item>
            <MenuRouting onClick={() => {setType("Kitoblar"); setCurrentPage(1);} }to="Kitoblar" >Kitoblar</MenuRouting>
          </Grid>
        </Grid>
    </Box>)
  );
};

export default BotttomNavbar;
