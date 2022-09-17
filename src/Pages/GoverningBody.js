import { Box, styled, Card, CardContent, Typography, CardActionArea, CardMedia } from '@mui/material';
import React from 'react';
import PageTItle from './PageTItle';

const ContactForm = styled(Box)`
// width: 100%;
// margin: auto;
`

const Topic = styled(Typography)`
font-weight:bold;
font-size:20px
`

const CardBox = styled(Box)(({ theme }) => ({
    maxWidth: '80%',
    margin: 'auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '50px',

    [theme.breakpoints.down('md')]: {
        maxWidth: '80%',
        margin: 'auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(1, 1fr)',
        gridGap: '50px',
    }
}));

const CardMain = styled(Card)(({ theme }) => ({
    maxWidth: '345px',


    [theme.breakpoints.down('md')]: {
        maxWidth: '100%',
        // maxheight: '60%'

    }
}));

const Bold = styled('span')({
    fontWeight: 'bold'
})

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


const GoverningBody = () => {
    return (
        <>
            <Heading>Governing Body</Heading>
            <CardBox>
                <CardMain style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image="https://i.ibb.co/jbLZkwP/Photo-1.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Topic gutterBottom variant="h5" component="div">
                                Kamruzzaman Ahmed
                            </Topic>
                            <Typography variant="body2" color="text.secondary">
                                <Bold>Designation:</Bold> Chairman & Principal
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <Bold>Cell:</Bold> +8801915785776
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <Bold>Email:</Bold>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </CardMain>
                <CardMain sx={{ maxWidth: 345 }} style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="350"
                            image="https://i.ibb.co/98jDR8h/IMG-20220916-WA0001.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Topic gutterBottom variant="h5" component="div">
                                Asadul islam
                            </Topic>
                            <Typography variant="body2" color="text.secondary">
                                <Bold>Designation:</Bold> Managing Director
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <Bold>Cell:</Bold> +8801XXXXXXXXX
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <Bold>Email:</Bold> xxx@gmail.com
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </CardMain>


            </CardBox>
        </>
    );
};

export default GoverningBody;
