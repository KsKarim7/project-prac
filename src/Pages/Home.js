import { Box, styled } from '@mui/material'
import React from 'react';
import Banner from './Banner';
import Carousels from './Carousels';
import Maps from './Maps';
import PageTItle from './PageTItle';



const Component = styled(Box)`
padding: 0px 10px;
background:#F2F2F2;
`

const Home = () => {
    return (
        <Component>
            <PageTItle title='Home'></PageTItle>
            <Banner></Banner>
            <Carousels></Carousels>
            <Maps></Maps>
        </Component>
    );
};

export default Home;