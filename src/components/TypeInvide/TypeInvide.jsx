import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { StyledPaper } from '../../styles/TypeIvnite';
import Image from "./image/kalonka2.png"
import Image2 from "./image/5g.jpg"
import Image3 from "./image/a03.jpg"
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const TypeInvide = () => {
    const [spacing, setSpacing] = React.useState(2);

    const handleChange = (event) => {
      setSpacing(Number(event.target.value));
    };

  function scrollToTop () {
     window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
   }
 
  return (
    <>
     
    <Grid  container spacing={3} justifyContent={"center"} sx={{padding:"3rem 0"}}>
       <Grid item xs={12} md={6} lg={4} >
        <Link to={'discount'} style={{textDecoration: "none"}}>
         <StyledPaper
         elevation={4}
         hoverShadow = {`url(${Image})`}
         onClick = {scrollToTop}
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
          </Link>
       </Grid>
       <Grid item xs={12} md={6} lg={4} >
        <Link to={'fiveG'} style={{textDecoration: "none"}} >
         <StyledPaper
          hoverShadow = {`url(${Image2})`}
          onClick = {scrollToTop}
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
            </Link>
       </Grid>
       <Grid item xs={12} md={6} lg={4} >
       <Link to={'budget'} style={{textDecoration: "none"}}>
         <StyledPaper
          hoverShadow = {`url(${Image3})`}
          onClick = {scrollToTop}
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
         </Link>
       </Grid>
    </Grid>
    </>
  );
};

export default TypeInvide;
