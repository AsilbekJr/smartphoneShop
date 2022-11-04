import {  Box, Grid, useMediaQuery,  } from "@mui/material";
import React from "react";
import { MyCustomTab } from "../../styles/Navbar";
import { useTheme } from '@mui/material/styles';

const BotttomNavbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (

    matches &&   (<Box sx={{ background: "#333e48" }}>  
        <Grid container spacing={3} sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <Grid item >
            <MyCustomTab label="Smartfonlar" />
          </Grid>
          <Grid item>
            <MyCustomTab label="Noutbuklar" />
          </Grid>
          <Grid item>
            <MyCustomTab label="Aksesuarlar" />
          </Grid>
          <Grid item>
            <MyCustomTab label="Kalonkalar" color={"danger"}/>
          </Grid>
          <Grid item>
            <MyCustomTab label="Quloqchinlar" />
          </Grid>
          <Grid item>
            <MyCustomTab label="Boshqa maxsulotlar" />
          </Grid>
        </Grid>
    </Box>)
  );
};

export default BotttomNavbar;
