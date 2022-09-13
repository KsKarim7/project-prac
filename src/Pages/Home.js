import { Box, styled } from '@mui/material'
import React from 'react';
import Banner from './Banner';

const Component = styled(Box)`
padding: 10px 10px;
background:#F2F2F2;
`

const Home = () => {
    return (
        <>
            <Box style={{}}>
                <Banner></Banner>
            </Box>
        </>
    );
};

export default Home;