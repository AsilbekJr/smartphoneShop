import { AppBar,useMediaQuery } from "@mui/material";
import BottomNavbar from "./BottomNavbar";
import MyMainNavbar from "./MainNavbar";
import App from "./Menu";
import TopNavbar from "./TopNavbar";
import { useTheme } from '@mui/material/styles';
import { MyContext } from "../../Context/Context";
import { useContext } from "react";
const Navbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const {setOpen} = useContext(MyContext)
  return (
    <>
      <AppBar position="static">
        <TopNavbar />
        <MyMainNavbar />
        <BottomNavbar sx={{background: "white"}}/>
      </AppBar>
      <App /> 
     {!matches &&  setOpen(false) }
    </>
  );
};

export default Navbar;
