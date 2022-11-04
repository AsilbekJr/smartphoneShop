import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { StyledPaper } from '../../styles/TypeIvnite';
import Image from "./image/kalonka2.png"
import Image2 from "./image/5g.jpg"
import Image3 from "./image/a03.jpg"
import { Typography } from '@mui/material';

const TypeInvide = () => {
    const [spacing, setSpacing] = React.useState(2);

    const handleChange = (event) => {
      setSpacing(Number(event.target.value));
    };

   
 
  return (
    <>
     
    <Grid  container spacing={3} justifyContent={"center"} sx={{padding:"3rem 0"}}>
       <Grid item xs={12} md={6} lg={4} >
         <StyledPaper
         elevation={4}
         hoverShadow = {`url(${Image})`}
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
             backgroundImage: ` url(${Image})`,
              backgroundSize: "cover",
              width:"100%",
              height:"400px",
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
          }}
         
         >   
          <Typography className='title' >Chegirmalar</Typography>
         </StyledPaper>
       </Grid>
       <Grid item xs={12} md={6} lg={4} >
         <StyledPaper
          hoverShadow = {`url(${Image2})`}
         elevation={4}
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              backgroundImage:`url(${Image2})`,backgroundSize: "cover",
              backgroundPosition:"center",
              width:"100%",
              height:"400px",
              display:"flex",
              alignItems:"center",
              justifyContent:"center"
          }}
         >   
         <Typography className='title' >5 g Smartfonlar</Typography>
         </StyledPaper>
       </Grid>
       <Grid item xs={12} md={6} lg={4} >
         <StyledPaper
          hoverShadow = {`url(${Image3})`}
         elevation={4}
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              backgroundImage:`url(${Image3})`,
              backgroundSize: "cover",
              backgroundPosition:"center",
              width:"100%",
              height:"400px",
              display:"flex",
              alignItems:"center",
              justifyContent:"center"
          }}
         >   
          <Typography className='title' >Hamyonbob Smartfonlar</Typography>
         </StyledPaper>
       </Grid>
    </Grid>
    </>
  );
};

export default TypeInvide;
