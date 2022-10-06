import { Box, styled, Typography } from '@mui/material';
import React from 'react';

const Target = () => {
    // const Section = styled(Box)`
    // margin-top:80px;
    // text-align:center;
    // padding:0 300px
    // `
    const Heading = styled(Typography)(({ theme }) => ({
        fontSize: '40px',
        fontWeight: 'bolder',
        fontFamily: 'Myriad Pro ',
        [theme.breakpoints.down('md')]: {
            fontSize: '30px',
            fontFamily: 'Myriad Pro Semibold',
        }
    }));
    const Section = styled(Box)(({ theme }) => ({
        marginTop: '80px',
        textAlign: 'center',
        padding: '0 300px',
        [theme.breakpoints.down('md')]: {
            marginTop: '80px',
            textAlign: 'center',
            padding: '0 0px',
        }
    }));

    const Bold = {
        fontSize: ' 23px',
        fontWeight: 'bolder'
    }

    const Text = styled(Typography)`
    font-size: 20px;
    padding-top:15px
    `


    return (
        <Section>
            <Heading>
                Our Aim And Goals
            </Heading>
            <Text>
                <span style={Bold}>Mission:</span> Children are our future glory we are dedicated to their success. To nurture healthy and happy individuals with strength of intelligence ,  ready to serve, ready for the future.
            </Text>
            <Text>
                <span style={Bold}>Our Vision:</span>
                <li>Vibrant school</li>
                <li>Culture of care</li>
                <li>Power of excellence.</li>
            </Text>
            <Text>
                <span style={Bold}>Counseling & Guidance:</span> The present day students undergo a number of problems and confusion. To mould the students in the right way, to clarify their confidence, strengthen their confidence and energy, to motivate them to correct ways and to solve their problems they need effective counseling. The guide teachers will  discuss with the students to solve the problems.
            </Text>
            <Text>
                <span style={Bold}>ICARE Facilities:</span>
                <li>Integrity</li>
                <li>Care</li>
                <li>Active Teamwork</li>
                <li>Respect & Responsibilities</li>
            </Text>
        </Section>
    );
};

export default Target;