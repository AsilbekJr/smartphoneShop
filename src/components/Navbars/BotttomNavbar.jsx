import {  Box, Grid, useMediaQuery,  } from "@mui/material";
import React, { useContext, useState } from "react";
import { MyCustomTab } from "../../styles/Navbar";
import { useTheme } from '@mui/material/styles';
import { MyContext } from "../../Context/Context";
const BotttomNavbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  
  
  //  const { ...forType} = useContext(MyContext);
   const {setType, setCurrentPage} = useContext(MyContext);
  return (

    matches &&   (<Box sx={{ background: "#333e48" }}>  
        <Grid container spacing={3} sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <Grid item >
            <MyCustomTab onClick={() => setType("")}  label="Bosh sahifa" />
          </Grid>
          <Grid item >
            <MyCustomTab onClick={() => setType("Smartfonlar") }  label="Smartfonlar" />
          </Grid>
          <Grid item>
            <MyCustomTab onClick={() => { setType("Noutbuklar"); setCurrentPage(1); } } label="Noutbuklar" />
          </Grid>
          <Grid item>
            <MyCustomTab onClick={() => {setType("Aksessuarlar"); setCurrentPage(1);} } label="Aksesuarlar" />
          </Grid>
          <Grid item>
            <MyCustomTab onClick={() => {setType("Kalonkalar"); setCurrentPage(1);} } label="Kalonkalar" color={"danger"}/>
          </Grid>
          <Grid item>
            <MyCustomTab onClick={() => {setType("Quloqchinlar"); setCurrentPage(1); } } label="Quloqchinlar" />
          </Grid>
          <Grid item>
            <MyCustomTab onClick={() => {setType("Kitoblar"); setCurrentPage(1);} } label="Kitoblar" />
          </Grid>
        </Grid>
    </Box>)
  );
};

export default BotttomNavbar;
