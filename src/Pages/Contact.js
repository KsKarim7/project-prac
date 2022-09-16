import emailjs from '@emailjs/browser';
import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import { useRef } from 'react';
import PageTItle from './PageTItle';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const ContactForm = styled(Box)`
// width: 100%;
// margin-top: 20px;
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

const Contact = () => {

    // const style = {
    //     backgroundImage: `url(${bg})`,
    //     backgroundPosition: 'center',
    //     backgroundRepeat: 'no-repeat',
    //     // width: '100vw',
    //     // height: '100vh'
    // };

    const half = {
        width: '49%',
        marginLeft: '2%',
        float: 'left',
        clear: 'none',

        // &:first-child {
        //     margin-left: 0,
        // }
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
        color: '#3a3737',
        fontSize: '12px',
        letterSpacing: '3px',
        textDecoration: 'none',
        padding: '8px 10px',
        border: '1px solid #3a3737',
        borderRadius: '4px',
        background: '0 0',
        textTransform: 'uppercase',
        float: 'right',
        textAlign: 'center',
        marginRight: '10px',
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
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }
    return (
        <>
            <PageTItle title="Contact Us"></PageTItle>
            <ContactForm className="contact-form">
                <form ref={refForm} onSubmit={sendEmail}>
                    <UList>
                        <List className="half" style={half}>
                            <input placeholder="Name" type="text" style={input} name="name" required />
                        </List>
                        <List className="half" style={half}>
                            <input
                                placeholder="Email" type="email" style={input} name="email"
                                required
                            />
                        </List>
                        <List>
                            <input
                                placeholder="Subject"
                                type="text"
                                name="subject"
                                required
                            />
                        </List>
                        <List>
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

            <Box>
                <MapContainer center={[23.693703805702985, 90.44518757901422]} zoom={13} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[23.693703805702985, 90.44518757901422]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </Box>
        </>
    );
};

export default Contact;