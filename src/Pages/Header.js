import React from 'react';
import { Typography, AppBar, Toolbar, styled, Tabs, Tab, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import DrawerNavbar from './DrawerNavbar';

const NavBar = styled(AppBar)`
background-image:linear-gradient(to left, #b22222 11%, #008000 70%)
`

// const Title = styled(Typography)(({theme})=>({
//     padding-left:12px,
//     font-size:25px,
//     font-family:Myriad Pro Semibold,

// }))

const Title = styled(Typography)(({ theme }) => ({
    paddingLeft: '12px',
    fontSize: '25px',
    fontFamily: 'Myriad Pro Semibold',
    [theme.breakpoints.down('lg')]: {
        paddingLeft: '8px',
        fontSize: '16px',
        fontFamily: 'Myriad Pro Semibold',
    }

}));

const Pages = ["Home", "Notice Board", "Admission", "Contact Us"]

const Header = () => {
    const [value, setValue] = useState();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))

    const logoURL = 'https://i.ibb.co/kyBg7Yc/prasc.png';
    return (
        <>
            <NavBar>
                <Toolbar>
                    <img src={logoURL} alt="logo" style={{ width: 95 }} />

                    {
                        isMatch ? (
                            <>
                                <Title>Professor Rowshan Ahmed School and College</Title>
                                <DrawerNavbar style={{ paddingLeft: '40px' }}></DrawerNavbar>
                            </>
                        ) : (
                            <>
                                <Title>Professor Rowshan Ahmed School and College</Title>
                                <Tabs sx={{ marginLeft: 'auto' }} value={value} onChange={(e, value) => setValue(value)} textColor="white" indicatorColor="primary"
                                >
                                    {
                                        Pages.map((page, index) => (
                                            <Tab key={index} label={page}></Tab>
                                        ))
                                    }
                                    {/* <Tab label='Home' />
                                    <Tab label='Notice Board' />
                                    <Tab label='Admission' />
                                    <Tab label='Contact Us' /> */}

                                </Tabs>
                            </>

                        )
                    }
                </Toolbar>

            </NavBar>
        </>
    );
};

export default Header;