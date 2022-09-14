import { Box, styled } from '@mui/material'
import React from 'react';
import Banner from './Banner';
import Carousels from './Carousels';



const Component = styled(Box)`
padding: 0px 10px;
background:#F2F2F2;
`

const Home = () => {
    return (
        <Component>
            <Banner></Banner>
            <Carousels></Carousels>
        </Component>
    );
};

export default Home;