import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faWhatsapp, faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Box, styled, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';





const Content = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    backgroundColor: '#008000',
    [theme.breakpoints.down('md')]: {
        padding: '0 10px',
    }
}));

const Head = styled(Typography)(({ theme }) => ({
    // margin: '1 0px 0px 0px',
    // textAlign: 'center',
    fontSize: '1.8rem',
    fontWeight: 'bolder',
    fontFamily: 'Myriad Pro',
    margin: '15px 0px 5px 0px',
    [theme.breakpoints.down('md')]: {
        margin: '15px 0px 5px 0px',
        fontSize: '1.2rem',
        fontFamily: 'Myriad Pro',
    }
}));


const Address = styled(Typography)(({ theme }) => ({
    fontSize: '22px',
    fontFamily: 'Myriad Pro Semibold',
    paddingLeft: '5px',
    [theme.breakpoints.down('md')]: {
        fontSize: '15px',
        fontFamily: 'Myriad Pro Semibold',
        lineHeight: '18px',
        paddingLeft: '5px',
    }
}));

const SubHeader = styled(Typography)(({ theme }) => ({
    fontSize: '25px',
    fontFamily: 'Myriad Pro Semibold',
    padding: '20px 0 0 0',
    [theme.breakpoints.down('md')]: {
        fontSize: '20px',
        padding: '20px 0 0 0',
        fontFamily: 'Myriad Pro Semibold',
    }
}));

const Foot = styled('footer')(({ theme }) => ({
    marginTop: '80px',
    marginBottom: '0%',
    padding: '0 %',
    boxSizing: 'borderBox',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
        marginTop: '30px',
    }
}))



const List = styled('ul')(({ theme }) => ({
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'row',
    gap: '38px',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
        gap: '18px',
    }
}))
const Social = styled('a')(({ theme }) => ({
    color: 'lightgrey',
    fontSize: '25px',
    [theme.breakpoints.down('sm')]: {

    }
}))
const BottonFoot = styled('small')(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        display: 'inline-block'
    }
}))

const Bottom = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    paddingBottom: '10px',
    backgroundColor: '#b22222',
    fontSize: '20px',
    [theme.breakpoints.down('md')]: {
        fontSize: '16px'
    }
}));

const SubTitle = styled(Typography)(({ theme }) => ({
    paddingLeft: '10px',
    fontFamily: 'Myriad Pro Semibold',
    [theme.breakpoints.down('lg')]: {
        paddingLeft: '5px',
        fontSize: '13px',
        fontFamily: 'Myriad Pro Semibold',
    }

}));

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <Foot>
            <Content>
                <Head>PROFESSOR ROWSHAN AHMED SCHOOL & COLLEGE (PRASC)</Head>
                <Box style={{ display: 'flex' }}>
                    <LocationOnIcon />
                    <Address> Shyampur(beside bot-tola bridge), No.5 ward,Kodomtoli Thana, Dhaka-1204</Address>

                </Box>
                <Box style={{ display: 'flex' }}>
                    <CallIcon />
                    <SubTitle style={{ lineHeight: '30px' }}> Give Us a Call at: +8801611-625614, +8801682825253</SubTitle>
                </Box>
                <Box style={{ display: 'flex' }}>
                    <EmailIcon />
                    <SubTitle> prof.rowshanahmedschool@gmail.com</SubTitle>
                </Box>
                <SubHeader>Connect with our social links:</SubHeader>
                <List>
                    <li><Social href="https://www.facebook.com/Professor-Rowshan-Ahmed-School-College-103117429199646" target="_blank"> <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> </Social></li>
                    <li><Social href="#"> <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon> </Social></li>
                    <li><Social href="#"> <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> </Social></li>
                    <li><Social href="#"> <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon> </Social></li>
                </List>
            </Content>
            <Bottom>
                <BottonFoot>copyright© prof.rowshanahmedschool@gmail.com </BottonFoot>
                <small> | All right reserved {year} </small>
                <small>| Developed By Ks</small>
            </Bottom>
        </Foot>
    );
};

export default Footer;