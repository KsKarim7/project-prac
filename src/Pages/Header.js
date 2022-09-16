import React from 'react';
import { Typography, AppBar, Toolbar, styled, Tabs, Tab, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import DrawerNavbar from './DrawerNavbar';
import { Box } from '@mui/system';
import CallIcon from '@mui/icons-material/Call';
import { Link, useNavigate } from 'react-router-dom';


const NavBar = styled(AppBar)`
background-image:linear-gradient(to left, #b22222 11%, #008000 70%)
`

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

const SubHeader = styled(Box)(({ theme }) => ({
    backgroundImage: 'linear-gradient(to right, #b22222 11%, #008000 70%)',
    // [theme.breakpoints.down('lg')]: {
    //     display: 'block',
    //     margin: 'auto'

    // }

}));
const BottomHeader = styled(Box)(({ theme }) => ({
    backgroundImage: 'linear-gradient(to right, #b22222 11%, #008000 70%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    [theme.breakpoints.down('lg')]: {
        display: 'block',
        // alignItems: 'center',
        // justifyContent: 'space-around',
        // margin: 'auto',
        margin: '0px 20px ',
        textAlign: 'center'

    }

}));
const SubTitle = styled(Typography)(({ theme }) => ({
    paddingLeft: '10px',
    [theme.breakpoints.down('lg')]: {
        paddingLeft: '5px',
        fontSize: '13px',
        lineHeight: '18px'
    }

}));
const CallIco = styled(CallIcon)(({ theme }) => ({
    [theme.breakpoints.down('lg')]: {
        paddingLeft: '5px',
        fontSize: '15px',
    }

}));

const Header = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))

    const navigateToAdmission = () => {
        navigate('/admission')
    }
    const navigateToHome = () => {
        navigate('/')
    }

    const navigateToNoticeBoard = () => {
        navigate('/notice')
    }
    const navigateToContact = () => {
        navigate('/contact')
    }
    const navigateToGoverningBody = () => {
        navigate('/governingBody')
    }

    const logoURL = 'https://i.ibb.co/kyBg7Yc/prasc.png';
    return (
        <>
            <NavBar>
                <SubHeader>
                    <BottomHeader>
                        <Box style={{ display: 'flex' }}>
                            <CallIco />
                            <SubTitle> Give Us a Call at: +8801611-625614, +8801682825253</SubTitle>
                        </Box>
                        <SubTitle>prof.rowshanahmedschool@gmail.com</SubTitle>
                    </BottomHeader>
                </SubHeader>
                <Toolbar>
                    <img onClick={navigateToHome} src={logoURL} alt="logo" style={{ width: 95 }} />

                    {
                        isMatch ? (
                            <>
                                <Title onClick={navigateToHome}>PROFESSOR ROWSHAN AHMED SCHOOL AND COLLEGE</Title>
                                <DrawerNavbar style={{ paddingLeft: '40px' }}></DrawerNavbar>
                            </>
                        ) : (
                            <>
                                <Title onClick={navigateToHome}>PROFESSOR ROWSHAN AHMED SCHOOL AND COLLEGE</Title>
                                <Tabs sx={{ marginLeft: 'auto' }} value={value} onChange={(e, value) => setValue(value)} textColor="white" indicatorColor="primary"
                                >
                                    <Tab onClick={navigateToHome} label='Home' />
                                    <Tab onClick={navigateToNoticeBoard} label='Notice Board' />
                                    <Tab onClick={navigateToAdmission} label='Admission' />
                                    <Tab onClick={navigateToContact} label='Contact Us' />
                                    <Tab onClick={navigateToGoverningBody} label='Governing Body' />

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