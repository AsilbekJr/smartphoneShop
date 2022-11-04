
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';


export const MyFooter = styled(Box)(({theme}) => ({
    backgroundColor:"#333e48",
    padding:"3.5rem 5rem",
}))

export const FGridItem = styled(Box)(({theme}) => ({
    display:"flex",
     gap:"8px"
}))