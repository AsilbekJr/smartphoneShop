
import { ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';

export const MyListItemText = styled(ListItemText)(({theme}) => ({
    ".MuiListItemText-primary":{
        fontSize:"20px",
        textTransform: "uppercase"
    }
}))