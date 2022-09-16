import { styled, Typography, Box } from '@mui/material';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Maps = () => {

    const MapSection = styled(Box)(({ theme }) => ({
        // display: 'flex',
        // margin: '20 0 20 0',
        // justifyContent: 'center',
        // [theme.breakpoints.down('md')]: {
        //     objectFit: 'cover',
        //     height: 120
        // }
    }));

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

    return (
        <>
            <Heading>We are located here</Heading>
            <MapSection>
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
            </MapSection>
        </>
    );
};

export default Maps;