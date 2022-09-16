import { Box, styled } from '@mui/material';
import React from 'react';
import PageTItle from './PageTItle';

const Image = styled('img')({

    height: '20vh',
    width: '50vw',
    display: 'flex',
    margin: '0 auto'
})

const Notice = () => {

    return (
        <Box>
            <PageTItle title="Notice Board"></PageTItle>
            <Image src="https://i.ibb.co/fk64Y3k/coming-soon.jpg" alt="" />
        </Box>
    );
};

export default Notice;