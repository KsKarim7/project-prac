import { styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

// const MainBanner = styled(Box)`
// display:flex;
// margin:23% 0;
// justify-content:spaceBetween
// `

const MainBanner = styled(Box)(({ theme }) => ({
    display: 'grid',
    margin: '200px 150px 50px 150px',
    // padding: '0px 100px',
    gridTemplateColumns: '8fr 4fr',
    // overflow: 'hidden',
    [theme.breakpoints.down('lg')]: {
        display: 'block',
        margin: '0 auto',
        padding: '20px 10px',
        textAlign: 'center'
    }
}))
const Title = styled(Typography)(({ theme }) => ({
    fontSize: '2.5rem',
    fontWeight: 'bold',
    // overflow: 'hidden',
    [theme.breakpoints.down('lg')]: {
        display: 'block',
        margin: '0 0',
        padding: '0 0px',
        fontSize: '1.5em',
    }
}))
const MidBanner = styled(Typography)(({ theme }) => ({
    width: '70%',
    [theme.breakpoints.down('lg')]: {
        width: '100%'
    }
}))

const Banner = () => {
    const logoURL = 'https://i.ibb.co/kyBg7Yc/prasc.png';

    return (
        <MainBanner >
            <MidBanner>
                <Title>Welcome to PRASC</Title>
                <br />
                <Typography>This Institute is named after a great professor who worked in Ramkrishnapur Degree College,Cumilla.It is the symbol of honour, Love & Pride. Our aim to prepare students to buildup a just & peaceful society by enabling them to take their right place in the intellectual & civic life of a nation.Ultimately our aim to producing successful leaders with competency,excellence & moral uprightness.So we can say that " Your Child's Bright Future Starts Here".</Typography>
                <br />

                <Typography>কুমিল্লার রামকৃষ্ণপুর ডিগ্রি কলেজে কর্মরত একজন মহান অধ্যাপকের নামে এই প্রতিষ্ঠানটির নামকরণ করা হয়েছে। এটি সম্মান, ভালবাসা এবং গর্বের প্রতীক। আমাদের লক্ষ্য শিক্ষার্থীদের একটি জাতির বুদ্ধিবৃত্তিক ও নাগরিক জীবনে তাদের সঠিক স্থান নিতে সক্ষম করে একটি ন্যায় ও শান্তিপূর্ণ সমাজ গঠনের জন্য প্রস্তুত করা। শেষ পর্যন্ত আমাদের লক্ষ্য দক্ষতা, শ্রেষ্ঠত্ব এবং নৈতিক ন্যায়পরায়ণতা সহ সফল নেতা তৈরি করা। তাই আমরা বলতে পারি যে,"আপনার সন্তানের উজ্জ্বল ভবিষ্যৎ  এখানে ই শুরু "।</Typography>
            </MidBanner>
            <Box><img style={{ width: '90%' }} src={logoURL} alt="" /></Box>
        </MainBanner>
    );
};

export default Banner;