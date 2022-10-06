import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import PageTItle from './PageTItle';


const Heading = styled(Typography)(({ theme }) => ({

    margin: '2em 0px 1.5em 0px',
    textAlign: 'center',
    fontSize: '40px',
    fontWeight: 'bolder',
    fontFamily: 'Myriad Pro ',
    [theme.breakpoints.down('md')]: {
        margin: '1.5em 0px 1em 0px',
        fontSize: '30px',
        fontFamily: 'Myriad Pro Semibold',
    }
}));

const Admission = () => {
    const posterURL = 'https://i.ibb.co/BzV8rx0/Design-Final.png';
    const poster2URL = 'https://i.ibb.co/N3zL3QQ/Design-Final-2.png';
    return (
        <Box>
            <Heading>Admission is Going On!!!</Heading>
            <PageTItle title="Admission"></PageTItle>
            <img style={{ width: '49%', margin: '5px' }} src={posterURL} alt="" />
            <img style={{ width: '50%', margin: 'auto' }} src={poster2URL} alt="" />
        </Box>
    );
};

export default Admission;