import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faWhatsapp, faFacebook, faTwitter, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Box, styled, Typography } from '@mui/material';

const Content = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    background-color:#008000
`
const Head = styled(Typography)`
    font-size: 1.8rem;
    font-weight: 400;
    text-transform: capitalize;
    margin: 15px 0px 5px 0px;
`
const Para = styled(Typography)`

font-size: 26px;
`

const Foot = styled('footer')`
margin-top: 80px;
margin-bottom: 0%;
padding: 0%;
box-sizing: border-box;
color:white;
`
const List = styled('ul')`
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: 18px;
`
const Bottom = styled(Box)`
text-align: center;
    padding-bottom: 10px;
    background-color: #b22222;
`

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <Foot className='bg-dark text '>
            <Content className="content">
                <Head>PROFESSOR ROWSHAN AHMED SCHOOL AND COLLEGE(PRASC)</Head>
                <Para>Simply Exceptional</Para>
                <List className="socials">
                    <li><a href="https://www.facebook.com/Professor-Rowshan-Ahmed-School-College-103117429199646" target="_blank"> <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> </a></li>
                    <li><a href="#"> <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon> </a></li>
                    <li><a href="#"> <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> </a></li>
                    <li><a href="#"> <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon> </a></li>
                </List>
            </Content>
            <Bottom className="foot">
                <small>copyright  ©yourTechGuy.ks.com </small>
                <small>All right reserved {year} </small>
            </Bottom>
        </Foot>
    );
};

export default Footer;