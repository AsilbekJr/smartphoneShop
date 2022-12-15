import React, { useContext } from "react";
import {
  Box,
  Typography,
  ThemeProvider,
  TextField,
  IconButton,
  Badge,
} from "@mui/material";
import { logoFont,MyShoppingBasket, MainNavbar,NavbarContainer, theme,HamburgerMenu,SearchSection,SearchSectionMD,MyAccountCircle,LogoSec,SelectCurrensy, TextNav, MyDivider } from "./../../styles/Navbar";
import { Search, KeyboardArrowDown,Menu } from "@mui/icons-material";
import { useState } from "react";
import { Select } from "./../../styles/Navbar";
import { MyContext } from "../../Context/Context";
import { Link } from "react-router-dom";
const MyMainNavbar = () => {
  const [currency, setCurrency] = useState("UZS");
  const handleCurrency = (e) => {
    setCurrency(e.target.value);
  };
  // const {forOpen} = useContext(MyContext);
  const {open, setOpen, setType,setCurrentPage} = useContext(MyContext);


  

  return (
    <> 
      <MainNavbar>
        <NavbarContainer >
          <HamburgerMenu onClick={() => setOpen(!open)}>
             <Menu fontSize="large"/>
          </HamburgerMenu>
          <ThemeProvider theme={logoFont}>
            <Link style={{textDecoration:"none"}} to={'/'}>
            <LogoSec onClick={() => { setOpen(false); setType("");setCurrentPage(1) }}> 
            <Box  color={"#FF8C32"}>
              Mobile
            </Box>
            <Box color={"white"}>  
              Markaz
            </Box>
            </LogoSec>       
            </Link>
          </ThemeProvider>
          <ThemeProvider theme={theme}>
            <SearchSection>
              <TextField
                id="outlined-search"
                type="search"
                placeholder="Search"
              ></TextField>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Search fontSize="large" />
              </Box>
            </SearchSection>
          </ThemeProvider>
          <SelectCurrensy>
            <Select onChange={handleCurrency} value={currency}>
              <option value="UZS">UZS</option>
              <option value="USD">USD</option>
              <option value="RUS">RUS</option>
              <KeyboardArrowDown sx={{ color: "white" }} />
            </Select>
          </SelectCurrensy>
          <Box display={"flex"} alignItems={"center"}>
            <MyAccountCircle fontSize="large"/>
            <TextNav
              variant="h6"
            
            >
              Sing In
            </TextNav>
            <IconButton>
              <MyDivider ></MyDivider>
              <Badge badgeContent={4} color="success">
                <MyShoppingBasket fontSize="large" sx={{ color: "white" }} />
              </Badge>
            </IconButton>
            <TextNav display={"flex"} alignItems={"center"}>0 {currency}</TextNav>
          </Box>
        </NavbarContainer>
        <ThemeProvider theme={theme}>
            <SearchSectionMD>
              <TextField
                id="outlined-search"
                type="search"
                placeholder="Search"
              ></TextField>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Search fontSize="large" />
              </Box>
            </SearchSectionMD>
          </ThemeProvider>
      </MainNavbar>
    </>
  );
};

export default MyMainNavbar;
