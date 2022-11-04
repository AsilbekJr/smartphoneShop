import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { TypeProContainer, TypeProImage, TypeProPaper, TypeProPaperText } from '../TypeProduct'

const TypeProduct = () => {
  return (
    <TypeProContainer>
        <Grid container spacing={4} >
            <Grid item xs={12} sm={12} md={3} lg={2.4} >
                <TypeProPaper elevation={0} sx={{}}>
                    <TypeProImage  src="./ProType/smartphone.png"/>
                    <TypeProPaperText >Smartfonlar</TypeProPaperText>
                </TypeProPaper>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2.4} >
                <TypeProPaper elevation={0} sx={{height:"230px"}}>
                    <TypeProImage  src="./ProType/tablet.png"/>
                    <TypeProPaperText >Planshetlar</TypeProPaperText>
                </TypeProPaper>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2.4} >
                <TypeProPaper elevation={0} sx={{height:"230px"}}>
                    <TypeProImage  src="./ProType/smartwatch.png"/>
                    <TypeProPaperText >Smart soatlar</TypeProPaperText>
                </TypeProPaper>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2.4} >
                <TypeProPaper elevation={0} sx={{height:"230px"}}>
                    <TypeProImage  src="./ProType/game.png"/>
                    <TypeProPaperText >O'yin pristavkalari</TypeProPaperText>
                </TypeProPaper>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2.4} >
                <TypeProPaper elevation={0} sx={{height:"230px"}}>
                    <TypeProImage  src="./ProType/laptop.png"/>
                    <TypeProPaperText >Noutbuklar</TypeProPaperText>
                </TypeProPaper>
            </Grid>
        </Grid>
    </TypeProContainer>
  )
}

export default TypeProduct