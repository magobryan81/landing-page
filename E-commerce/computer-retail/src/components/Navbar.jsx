import React, {useState} from 'react';
import Logo from "../assets/react.svg";
import { HiBars3 } from "react-icons/hi2";
import { Box, Drawer, List, ListItem, ListItemButton, ListItemText, Button } from '@mui/material';
import '../css/Navbar.css';


export default function Navbar() {
    
    const [openMenu, setOpenMenu] = useState(false);
    const menuOption = [
        {
            text:"Home",
        },
        {
            text:"About",
        },
        {
            text:"Service",
        },
        {
            text:"Product",
        },
        {
            text:"Contact",
        },
    ]
    const buttonStyle = {
        color: 'white',
        width: '10rem',
        padding: '1rem',
        fontSize: '16px'
    }

    return(
        <nav className="navbar-container">
            <div className="navbar-content">
                <div className="navbar-logo-name">
                    <div className="logo-name">
                        <img src={Logo} alt="" />
                        <span>Computer Retail</span>
                    </div>
                    <div className="menu-button">
                        <HiBars3 onClick={() => setOpenMenu(true)}/>
                    </div>
                    <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor='right'>
                        <Box
                            sx={{ width: 250 }}
                            role="presentation"
                            onClick={() => setOpenMenu(false)}
                            onKeyDown={() => setOpenMenu(false)}
                        >
                            <List>
                                {menuOption.map((item) => (
                                    <ListItem key={item.text} disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary={item.text}/>
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Drawer>
                    
                </div>
                <ul className="navbar-links">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Service</a></li>
                    <li><a href="">Product</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <div className="login-button">
                    <Button variant="contained" sx={buttonStyle} disableElevation>Login</Button>
                </div>
            </div>
        </nav>
    )

}