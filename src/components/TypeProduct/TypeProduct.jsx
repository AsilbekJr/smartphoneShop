import { Grid } from '@mui/material'
import React, { useContext } from 'react'
import { TypeProContainer, TypeProImage, TypeProPaper, TypeProPaperText } from '../TypeProduct'
import { Link } from 'react-router-dom';
import { MyContext } from './../../Context/Context';
const TypeProduct = () => {
    const { setCurrentPage} = useContext(MyContext);
    function scrollToTop () {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        setCurrentPage(1);
      }
  return (
    <TypeProContainer>
        <Grid container spacing={4} > 
            <Grid item xs={12} sm={6} md={3} lg={2.4} >
        <Link to="tablet" style={{ textDecoration:"none"}}>
                <TypeProPaper elevation={0} sx={{height:"230px"}} onClick = {scrollToTop}>
                    <TypeProImage  src="./ProType/tablet.png"/>
                    <TypeProPaperText >Planshetlar</TypeProPaperText>
                </TypeProPaper>
        </Link> 
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={2.4} >
            <Link to="glasses" style={{ textDecoration:"none"}}>
                <TypeProPaper elevation={0} sx={{}} onClick = {scrollToTop}>
                    <TypeProImage  src="./ProType/sunglasses2.png"/>
                    <TypeProPaperText >Ko'zoynaklar</TypeProPaperText>
                </TypeProPaper>
            </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2.4} >
            <Link to="smartwatch" style={{ textDecoration:"none"}}>
                <TypeProPaper elevation={0} sx={{height:"230px"}} onClick = {scrollToTop}>
                    <TypeProImage  src="./ProType/smartwatch.png"/>
                    <TypeProPaperText >Smart soatlar</TypeProPaperText>
                </TypeProPaper>
            </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2.4} >
            <Link to="gaming" style={{ textDecoration:"none"}}> 
                <TypeProPaper elevation={0} sx={{height:"230px"}} onClick = {scrollToTop}>
                    <TypeProImage  src="./ProType/game.png"/>
                    <TypeProPaperText >O'yin pristavkalari</TypeProPaperText>
                </TypeProPaper>
            </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2.4} >
            <Link to="flashlight" style={{ textDecoration:"none"}}>

                <TypeProPaper elevation={0} sx={{height:"230px"}} onClick = {scrollToTop}>
                    <TypeProImage  src="./ProType/flashlight2.png"/>
                    <TypeProPaperText >Chiroqlar</TypeProPaperText>
                </TypeProPaper>
            </Link>
            </Grid>
        </Grid>
    </TypeProContainer>
  )
}

export default TypeProduct