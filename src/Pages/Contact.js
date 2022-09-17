import emailjs from '@emailjs/browser';
import { Box, Button, Card, CardContent, styled, Typography } from '@mui/material';
import React from 'react';
import { useRef } from 'react';
import PageTItle from './PageTItle';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { grid } from '@mui/system';


const ContactForm = styled(Box)`
// width: 100%;
// margin: auto;
`

const UList = styled('ul')({
    // padding: 0,
    // margin: 0,
})
const TextArea = styled('textarea')({
    width: '100%',
    border: 0,
    background: '#4a4949',
    height: '50px',
    fontSize: '16px',
    color: '#fff',
    padding: '20px',
    boxSizing: 'border-box',
    minHeight: '150px',
})
const List = styled('li')({
    padding: 0,
    margin: 0,
    listStyle: 'none',
    marginBottom: '10px',
    // opacity: 0,
    overflow: 'hidden',
    display: 'block',
    clear: 'both',
    position: 'relative',
    animation: 'fadeInUp 2s 2s',
    animationFillMode: 'forwards',
})

const Heading = styled(Typography)(({ theme }) => ({

    margin: '2em 0px 1em 0px',
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
const SubHeading = styled(Typography)(({ theme }) => ({
    fontSize: '35px',
    fontWeight: 'bolder',
    fontFamily: 'Myriad Pro ',
    margin: '50px 0 30px 60px',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        fontSize: '20px',
        fontFamily: 'Myriad Pro',
        margin: '50px 0 30px 60px',
        textAlign: 'center',
    }
}));
const Section = styled(Box)(({ theme }) => ({
    maxWidth: '50%',
    margin: 'auto',
    boxShadow: '30px 20px 20px 30px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
    [theme.breakpoints.down('md')]: {
        fontSize: '20px',
        fontFamily: 'Myriad Pro',
        margin: '60px 0 30px 60px',
    }
}));
const CardBox = styled(Box)(({ theme }) => ({
    maxWidth: '80%',
    margin: 'auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '50px',

    [theme.breakpoints.down('md')]: {
        maxWidth: '80%',
        margin: 'auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '50px',
    }
}));

const Topic = styled(Typography)`
font-weight:bold;
font-size:20px
`


const Contact = () => {
    const half = {
        width: '50%',
        marginLeft: '1%',
        float: 'left',
        clear: 'none',
        borderRadius: '10px'
    }
    const textArea = {
        width: '70%',
        marginLeft: '1%',
        float: 'left',
        clear: 'none',
        borderRadius: '10px'
    }
    const input = {
        width: '100%',
        border: 0,
        background: '#3b3a3a',
        height: '50px',
        fontSize: '18px',
        color: '#fff',
        padding: '0 20px',
        boxSizing: 'border-box',
    }
    const button = {
        color: 'white',
        fontSize: '18px',
        letterSpacing: '5px',
        textDecoration: 'none',
        padding: '10px 12px',
        border: '1px solid #3a3737',
        borderRadius: '4px',
        background: '0 0',
        textTransform: 'uppercase',
        marginLeft: '15px',
        textAlign: 'center',
        marginRight: '10px',
        backgroundColor: 'grey',
    }

    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_d741v8b',
                'template_dvaqrvs',
                refForm.current,
                'G5XqUiyP1QhUrEB9Y'
            )
            .then(
                () => {
                    toast.success('Message successfully sent!')
                    // window.location.reload(false)
                },
                () => {
                    toast.failed('Failed to send the message, please try again')
                }
            )
    }



    return (
        <>
            <PageTItle title="Contact Us"></PageTItle>
            <Heading>Contact Us</Heading>
            <SubHeading>Let us know your queries and  suggestions</SubHeading>
            <Section >
                <Card>
                    <CardContent>
                        <ContactForm className="contact-form">
                            <form ref={refForm} onSubmit={sendEmail}>
                                <UList>
                                    <List className="half" style={half}>
                                        <input placeholder="Name" type="text" style={input} name="name" required />
                                    </List>
                                    <List className="half" style={half}>
                                        <input
                                            placeholder="Email"
                                            type="email"
                                            style={input}
                                            name="email"
                                            required
                                        />
                                    </List>
                                    <List style={half} >
                                        <input
                                            placeholder="Subject"
                                            type="text"
                                            name="subject"
                                            style={input}
                                            required
                                        />
                                    </List>
                                    <List style={textArea}>
                                        <TextArea
                                            placeholder="Your Message"
                                            name="message"
                                            required
                                        ></TextArea>
                                    </List>
                                    <List>
                                        <input type="submit" className="flat-button" style={button} value="SEND" />
                                    </List>
                                </UList>
                            </form>
                        </ContactForm>

                    </CardContent>
                </Card>
            </Section>

            <SubHeading><LocationOnIcon style={{ fontSize: '30px' }} /> Contact</SubHeading>

            <CardBox>
                <Card style={{ boxShadow: '30px 20px 20px 30px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)', }}>
                    <CardContent>
                        <ContactForm>
                            <Box style={{ textAlign: 'center' }}>
                                <Topic>Address</Topic>
                                <Typography>Shyampur(beside bot-tola bridge), No.5 ward,Kodomtoli Thana, Dhaka-1204</Typography>
                            </Box>
                        </ContactForm>
                    </CardContent>
                </Card>

                <Card style={{ boxShadow: '30px 20px 20px 30px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)', }}>
                    <CardContent>
                        <ContactForm>
                            <Box style={{ textAlign: 'center' }}>
                                <Topic>Email</Topic>
                                <Typography>prof.rowshanahmedschool@gmail.com</Typography>
                            </Box>
                        </ContactForm>
                    </CardContent>
                </Card>

                <Card style={{ boxShadow: '30px 20px 20px 30px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)', }}>
                    <CardContent>
                        <ContactForm>
                            <Box style={{ textAlign: 'center' }}>
                                <Topic>Phone</Topic>
                                <Typography>+8801611-625614, +8801682825253</Typography>
                            </Box>
                        </ContactForm>
                    </CardContent>
                </Card>
            </CardBox>

            <Box style={{ marginTop: '80px' }}>
                <MapContainer center={[23.693703805702985, 90.44518757901422]} zoom={13} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[23.693703805702985, 90.44518757901422]}>
                        <Popup>
                            Shyampur(beside bot-tola bridge), No.5 ward,Kodomtoli Thana, Dhaka-1204
                        </Popup>
                    </Marker>
                </MapContainer>
            </Box>
            <ToastContainer />
        </>
    );
};

export default Contact;