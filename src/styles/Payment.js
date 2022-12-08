
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PaymentContainer = styled(Box)(() => ({
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginTop:"6rem"
}));


export const PaymentImage = styled('img')(({theme}) => ({
    maxWidth:"700px",
    objectFit:"contain",
    cursor:"pointer",
    '-webkitBoxShadow': `4px 4px 25px 0px rgba(34, 60, 80, 0.2)`,
   '-mozBoxShadow': `4px 4px 25px 0px rgba(34, 60, 80, 0.2)`,
    boxShadow: `4px 4px 25px 0px rgba(34, 60, 80, 0.2)`,
    border:".7px solid #f4f4f4",
    borderRadius:"10px",
    ':hover':{
        '-webkitBoxShadow': `0px 4px 25px -11px rgba(34, 60, 80, 0.2)`,
        '-mozBoxShadow': `0px 4px 25px -11px rgba(34, 60, 80, 0.2)`,
         boxShadow: `0px 4px 25px -11px rgba(34, 60, 80, 0.2)`,
    },
    [theme.breakpoints.down("lg")]:{
        maxWidth:"600px",
    },
    [theme.breakpoints.down("md")]:{
        maxWidth:"500px",
    },
    [theme.breakpoints.down("sm")]:{
        maxWidth:"350px",
    },
}))
