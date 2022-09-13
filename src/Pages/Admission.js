import { Box } from '@mui/material';
import React from 'react';

const Admission = () => {
    const posterURL = 'https://i.ibb.co/BzV8rx0/Design-Final.png';
    const poster2URL = 'https://i.ibb.co/N3zL3QQ/Design-Final-2.png';
    return (
        <Box>
            <img style={{ width: '49%', margin: '5px' }} src={posterURL} alt="" />
            <img style={{ width: '50%', margin: 'auto' }} src={poster2URL} alt="" />
        </Box>
    );
};

export default Admission;