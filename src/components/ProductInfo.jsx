import React from 'react'
import { Box } from '@mui/material';
import {MainInfoContainer,LeftSide,RightSide,Image, InfoListItem, InfoTitle } from '../styles/ProductInfo';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SelectorAllSortedProduct } from '../redux/sortedProductSlice';

const myStyleRow = {
  display: "flex",
  marginBottom: "12px",
  alignItems: "stretch",
}

const ProductInfo = () => {
  const allProducts = useSelector(SelectorAllSortedProduct);
  let { id } = useParams();
  const sortedProducts = [];

    allProducts.forEach(product => {
      if(product.id == id ){
        sortedProducts.push(product)
      }
    })

  
  return (

    <Box sx={{padding:"2rem", position:"relative"}}>
      {
        sortedProducts.map((product) => (
          <>
          <InfoTitle variant="h3" fontWeight={"800"}>{product.name}</InfoTitle>
          <MainInfoContainer container spacing={2} display={"flex"} justify="center" >
              <LeftSide item sm={12} md={6} lg={6} >
                <Image src={product.img}/>
              </LeftSide>
              <RightSide item sm={12} md={6} lg={6}>
                <h3>Xususiyatlari</h3>
              <List>
                  <ListItem sx={myStyleRow}>
                       <InfoListItem >
                      <p style={{zIndex:2,backgroundColor:"#fff",}}>Prossesor</p> 
                      </InfoListItem>
  
                    <Box>{product.protsessor}</Box>
                     
                  </ListItem>
  
                  <ListItem sx={myStyleRow}>
                       <InfoListItem >
                      <p style={{zIndex:2,backgroundColor:"#fff",}}>Displey diagonali</p> 
                      </InfoListItem>
                    <Box>{product.displeyDiogonal}</Box>               
                  </ListItem>
  
                  <ListItem sx={myStyleRow}>
                       <InfoListItem >
                      <p style={{zIndex:2,backgroundColor:"#fff",}}>Ekran turi</p> 
                      </InfoListItem>
  
                    <Box>{product.typeDisplay}</Box>
                  </ListItem>
  
                  <ListItem sx={myStyleRow}>
                       <InfoListItem >
                      <p style={{zIndex:2,backgroundColor:"#fff"}}>Umumiy saqlash xajmi</p> 
                      </InfoListItem>
                    <Box>{product.fullMemory}</Box>
                  </ListItem>
  
                  <ListItem sx={myStyleRow}>
                       <InfoListItem >
                      <p style={{zIndex:2,backgroundColor:"#fff"}}>Kesh-xotira</p> 
                      </InfoListItem>
                    <Box>{product.keshMemory}</Box>
                  </ListItem>
  
                  <ListItem sx={myStyleRow}>
                       <InfoListItem >
                      <p style={{zIndex:2,backgroundColor:"#fff"}}>Xotira turi</p> 
                      </InfoListItem>
                    <Box>{product.typeMemory}</Box>
                  </ListItem> 
                  <ListItem sx={myStyleRow}>
                       <InfoListItem >
                      <p style={{zIndex:2,backgroundColor:"#fff"}}>Operativ xotira</p> 
                      </InfoListItem>
                    <Box>{product.operativeMemory}</Box>
                  </ListItem> 
                  <ListItem sx={myStyleRow}>
                       <InfoListItem >
                      <p style={{zIndex:2,backgroundColor:"#fff"}}>Rangi</p> 
                      </InfoListItem>
                    <Box>{product.color}</Box>
                  </ListItem>  
              </List>
              </RightSide>
          </MainInfoContainer>

      </>
        ))
      }
      
    </Box>
  )
}

export default ProductInfo