import { Box, createTheme,Tab, Typography} from "@mui/material"
import { styled } from "@mui/system"
import Switch from '@mui/material/Switch';
import { AccountCircle,ShoppingBasket } from "@mui/icons-material";
import { Link } from 'react-router-dom';
export const MyTopNavbar = styled(Box)(({theme}) => ({
    display:"flex",
    position:"static",
    padding:"0px 5rem",
    background:"#333e48",
    justifyContent:"space-between",
    alignItems:"center",
    [theme.breakpoints.down('md')]:{
       display:"none"
    }
}))
export const DarkLightModed = styled(Box) `
display:flex;
font-weight:900;
font-size:8px
`

export const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 52,
    height: 24,
    padding: 5,
    paddingLeft:7,
    paddingRight:7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#000',
      width: 22,
      height: 22,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));
  export const TopContact = styled(Box)(({theme}) => ({
    display:"flex"
  }))

export const TopContactItem = styled(Box)(({theme}) => ({
    display:"flex", 
    alignItems: "center",
    cursor:"pointer",
    padding:" 0 1rem"
}));
export const HamburgerMenu = styled(Box)(({theme}) => ({
  display:"none",
  cursor:"pointer",
  zIndex:"999",
  [theme.breakpoints.down('md')]:{
    display:"block",
    padding:"0 15px"
  }
}))


export const MainNavbar = styled(Box)(({theme}) => ({
background:"#000",
width:"100%",
padding:"20px 20px",
[theme.breakpoints.down('md')]:{
  padding:"30px",
}
}));

export const  NavbarContainer = styled(Box)(({theme}) => ({
  display:"flex",
  width:"100%",
 alignItems:"center",
 justifyContent:"space-between",
 [theme.breakpoints.down('md')]:{
}  
}))

export const  LogoSec = styled(Box)(({theme}) => ({
  fontSize:"3rem",
  display:"flex",
 alignItems:"center",
 gap:"10px",
 cursor:"pointer",
 [theme.breakpoints.down('lg')]:{
   flexDirection: "column",
   lineHeight:"16px",
   border:".5px solid #FF8C32",
   padding:"10px",
   borderRadius:"10px",
   fontSize:"2rem"
}  
}))
 
export const logoFont = createTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'cursive',
    ].join(','),
  },});

  export const theme = createTheme({
    components: {
      // Inputs
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            background:"transparent",
            width:"100%",
            borderRadius:"5px",
            height:"38px",
            color:"white",
            fontSize:"1.2rem",
            fontWeight:"200",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&.Mui-focused": {
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }
          },
        }
      }
    }
  });
export const SearchSection = styled(Box)(({theme}) => ({
  width: "500px",
  heigth: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "#222",
  marginLeft: "5rem",
  borderRadius: "6px",
  padding: "0 5px",
  [theme.breakpoints.down('lg')]:{
    marginLeft: "3rem",
  },
  [theme.breakpoints.down('md')]:{
   display:"none"
  }
}))
export const SearchSectionMD = styled(Box)(({theme}) => ({
  width: "100%",
  heigth: "30px",
  display: "none",
  background: "#222",
  borderRadius: "6px",
  padding: "0 5px",
  [theme.breakpoints.down('md')]:{
   display:"flex",
   alignItems: "center",
   marginTop: "1rem",
  justifyContent: "space-between",
  }
}))
  export const Select = styled("select")(({theme}) => ({
    width:"80px",
    height:"40px",
    outline:"none",
    border:"1px solid #fff",
    color:"#fff",
    background:"#000",
    marginLeft:"1rem",
    padding:"0 5px",
    lineHeight:"2rem",
    margin:"0 1rem",
    display:"flex",
    justifyContent:"center"
  }));
  export const SelectCurrensy = styled(Box)(({theme}) => ({
    [theme.breakpoints.down('lg')]:{
     display:"none"
    }
  }));

  
export const MyCustomTab = styled(Tab)(({theme}) => ({
".MuiTab-textColorPrimary":{
  color:"#fff"
},
display:"flex",
alignItems:"center",
".Mui-selected":{
  color:"#009900 !important",
},
".MuiTab-root":{
  fontWeight:"700",
  letterSpacing: "0.7px",
  textTransform:"capitalize",
  fontSize:"15px",
},
}))
export const HomePage = styled(Link)(({theme}) => ({
 
  color:"#fff",
  display:"flex",
  alignItems:"center",
    color:"#92999e",
   " &:hover":{
     color:"#92999e"
    },
    fontWeight:"700",
    textTransform:"capitalize",
    fontSize:"13px",
    textDecoration:"none"
  }))
  

export const MyAccountCircle = styled(AccountCircle)(({theme}) => ({
  display:"none",
  [theme.breakpoints.down('lg')]:{
    display:"block",
    margin:"0 1rem"
  },
  [theme.breakpoints.down('md')]:{
   fontSize:"1.5rem"
  }
}))
export const MyShoppingBasket = styled(ShoppingBasket)(({theme}) => ({
  [theme.breakpoints.down('md')]:{
   fontSize:"1.5rem"
  }
}))

export const TextNav = styled(Typography)(({theme}) => ({
  display:"block",
  fontWeight: "700",
  fontSize: "15px",
  cursor: "pointer",
  padding: "0 0 0  10px",
  [theme.breakpoints.down('lg')]:{
    display:"none"
  }
}))
export const MyDivider = styled(Box)(({theme}) => ({
  display:"block",
  width: "2px",
  height: "15px",
  background: "white",
  margin: "0 15px",
  [theme.breakpoints.down('lg')]:{
    display:"none"
  }
}))