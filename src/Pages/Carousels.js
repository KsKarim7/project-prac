import { styled, Typography } from '@mui/material';
import React from 'react';
import Carousel from 'react-multi-carousel';
import { carouselData } from '../data';
import 'react-multi-carousel/lib/styles.css';

// const Image = styled('img')({
//     width: "100%",
//     height: "550px"
// })

const Image = styled('img')(({ theme }) => ({
    width: "100%",
    height: "550px",
    [theme.breakpoints.down('sm')]: {
        objectFit: 'cover',
        height: 180
    }
}))

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

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

const Carousels = () => {
    return (
        <>
            <Heading>A Glimpse of our Institution</Heading>
            <Carousel responsive={responsive}
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                slidesToSlide={1}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
            >
                {
                    carouselData.map(data => (
                        <Image src={data.url} alt="carousel" />
                    ))
                }
            </Carousel>
        </>
    );
};

export default Carousels;