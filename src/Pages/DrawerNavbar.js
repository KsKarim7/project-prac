import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

// const Pages = ["Home", "Notice Board", "Admission", "Contact Us"];

const SideBar = styled(List)`
background-image:linear-gradient(to bottom, #b22222 11%, #008000 70%);
color:white
`

const ListItems = styled(ListItemText)`
padding-bottom:12px
`


const DrawerNavbar = () => {
    const navigate = useNavigate();

    const [openDrawer, setOpenDrawer] = useState(false);

    const navigateToAdmission = () => {
        navigate('/admission')
    }
    const navigateToHome = () => {
        navigate('/')
    }
    return (
        <>
            <Drawer open={openDrawer}
                onClose={() => setOpenDrawer(false)}>
                <SideBar>
                    {/* {
                        Pages.map((page, index) => (
                            <ListItemButton onClick={() => setOpenDrawer(false)} key={index}>
                                <ListItemIcon>
                                    <ListItemText style={{ color: 'white' }}>{page}</ListItemText>
                                </ListItemIcon>
                            </ListItemButton>

                        ))
                    } */}
                    <ListItemButton>
                        <ListItemIcon onClick={() => setOpenDrawer(false)} style={{ display: 'block', color: 'white' }}>
                            <ListItems onClick={navigateToHome}>Home</ListItems>
                            <ListItems>Notice Board</ListItems>
                            <ListItems onClick={navigateToAdmission}>Admission</ListItems>
                            <ListItems>Contact Us</ListItems>
                            <ListItems>Governing Body</ListItems>
                        </ListItemIcon>
                    </ListItemButton>
                </SideBar>
            </Drawer>
            <IconButton sx={{ color: 'white', marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon></MenuIcon>
            </IconButton>
        </>
    );
};

export default DrawerNavbar;