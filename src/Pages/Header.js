import React from 'react';
import { Typography, AppBar, Toolbar, styled, Tabs, Tab } from '@mui/material';
import { useState } from 'react';

const NavBar = styled(Toolbar)`
background-image:linear-gradient(to left, #b22222 11%, #008000 70%)
`

const Title = styled(Typography)`
padding-left:12px;
font-size:25px;
font-family:Myriad Pro Semibold
`

const Header = () => {
    const [value, setValue] = useState();

    const logoURL = 'https://i.ibb.co/kyBg7Yc/prasc.png';
    return (
        <>
            <AppBar>
                <NavBar>
                    <img src={logoURL} alt="logo" style={{ width: 95 }} />
                    <Title>Professor Rowshan Ahmed School and College</Title>
                    <Tabs sx={{ marginLeft: 'auto' }} value={value} onChange={(e, value) => setValue(value)} textColor="white" indicatorColor="primary">
                        <Tab label='Home' />
                        <Tab label='Notice Board' />
                        <Tab label='Admission' />
                        <Tab label='Contact Us' />

                    </Tabs>
                </NavBar>
            </AppBar>
        </>
    );
};

export default Header;