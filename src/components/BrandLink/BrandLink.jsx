import {
  Divider,
  Box,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import {useTheme} from "@mui/material/styles"
import React from "react";
import { MyBrandList, MyBrandListText } from "../../styles/BrandLink";

const BrandLink = () => {
  const [tab, setTab] = React.useState(2);

  const listStyle = {
    display:"flex",
    justifyContent:"center",
    color: "black",
    fontWeight: "900",
    letterSpacing: "0.7px",
    "&.Mui-selected": {
      color: "#009900 !important",
    },
  };


  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down('md'));



  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      < MyBrandList
       
        value={tab}
        onChange={(e, v) => setTab(v)}
        centered
        indicatorColor="white"
      >
        <ListItem sx={listStyle}>
          <ListItemButton sx={{}}>
            <MyBrandListText primary="SAMSUNG" />
          </ListItemButton>
        </ListItem>
        {matches ?  <Divider
          orientation="horizontal"
        /> :  <Divider
        orientation="vertical"
        style={{ height: 30, alignSelf: "center" }}
      />}
        <ListItem sx={listStyle}>
          <ListItemButton>
            <MyBrandListText primary="REDMI" />
          </ListItemButton>
        </ListItem>
       {matches ?  <Divider
          orientation="horizontal"
        /> :  <Divider
        orientation="vertical"
        style={{ height: 30, alignSelf: "center" }}
      />}
        <ListItem sx={listStyle}>
          <ListItemButton>
            <MyBrandListText primary="APPLE" />
          </ListItemButton>
        </ListItem>
       {matches ?  <Divider
          orientation="horizontal"
        /> :  <Divider
        orientation="vertical"
        style={{ height: 30, alignSelf: "center" }}
      />}
        <ListItem sx={listStyle}>
          <ListItemButton>
            <MyBrandListText primary="Boshqa texnikalar" />
          </ListItemButton>
        </ListItem>
       {matches ?  <Divider
          orientation="horizontal"
        /> :  <Divider
        orientation="vertical"
        style={{ height: 30, alignSelf: "center" }}
      />}
        <ListItem sx={listStyle}>
          <ListItemButton>
            <MyBrandListText primary="Ko'p sotiladiganlar" />
          </ListItemButton>
        </ListItem>
       {matches ?  <Divider
          orientation="horizontal"
        /> :  <Divider
        orientation="vertical"
        style={{ height: 30, alignSelf: "center" }}
      />}
        <ListItem sx={listStyle}>
          <ListItemButton>
            <MyBrandListText primary=" Komputer va jihozlari" />
          </ListItemButton>
        </ListItem>
      </MyBrandList>
    </Box>
  );
};

export default BrandLink;
