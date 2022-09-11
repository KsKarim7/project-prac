import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import styled from '@emotion/styled';

const Pages = ["Home", "Notice Board", "Admission", "Contact Us"];

const SideBar = styled(List)`
background-image:linear-gradient(to bottom, #b22222 11%, #008000 70%);
color:white
`

const DrawerNavbar = () => {

    const [openDrawer, setOpenDrawer] = useState(false)
    return (
        <>
            <Drawer open={openDrawer}
                onClose={() => setOpenDrawer(false)}>
                <SideBar>
                    {
                        Pages.map((page, index) => (
                            <ListItemButton onClick={() => setOpenDrawer(false)} key={index}>
                                <ListItemIcon>
                                    <ListItemText style={{ color: 'white' }}>{page}</ListItemText>
                                </ListItemIcon>
                            </ListItemButton>

                        ))
                    }
                </SideBar>
            </Drawer>
            <IconButton sx={{ color: 'white', marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon></MenuIcon>
            </IconButton>
        </>
    );
};

export default DrawerNavbar;