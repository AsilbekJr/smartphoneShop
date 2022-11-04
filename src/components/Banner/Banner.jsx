
import {ArrowForward,ArrowBack} from '@mui/icons-material';
import { Box } from '@mui/material';

import React from 'react';
import Carousel from 'react-material-ui-carousel'
import BannerItem1 from './BannerItem1';
import BannerItem2 from './BannerItem2';
import BannerItem3 from './BannerItem3';

function Banner(props)
{
    return (
        <Box sx={{padding:"15px 0 0 0 "}}>
        <Carousel
        NextIcon={<ArrowForward/>}
        PrevIcon={<ArrowBack/>}
        sx={{ }}
        animation="slide"
        duration="600"
        interval="8000"
        indicators={false}
        >
           <BannerItem1 />
           <BannerItem2 />
           <BannerItem3 />
        </Carousel>
            </Box>
    )
}


export default Banner