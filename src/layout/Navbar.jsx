import { Menu, ShoppingBagOutlined } from '@mui/icons-material'
import { AppBar, Toolbar, Typography, Stack, IconButton, Slide, useScrollTrigger } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'


const HideOnScroll = (props) => {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });
    return (
        <Slide appear={false} direction='down' in={!trigger}>
            {children}
        </Slide>
    )
}
const Navbar = () => {
    const cartProduct = useSelector(state => state.cart)
    return (
        <HideOnScroll>
            <AppBar position='sticky'>
                <Toolbar>
                    <IconButton
                        size="larger"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, display: { md: 'none' } }}
                    >
                        <Menu />
                    </IconButton>
                    <Typography variant='h5' flexGrow={1} color={'white'}><NavLink style={{ color: "inherit", textDecoration: "none" }} to={'/'}>REDUX CART</NavLink></Typography>
                    <Stack direction={'row'} sx={{

                    }} gap={3} flexWrap={'wrap'}>
                        <Typography variant='h6' color={'white'}><NavLink style={{ color: "inherit", textDecoration: "none" }} to={'/'}>Products</NavLink></Typography>
                        <Typography variant='h6' color={'white'}><NavLink style={{ color: "inherit", textDecoration: "none" }} to={'/dashboard'}>Dashboard</NavLink></Typography>
                        <Typography variant='h6' color={'white'}><NavLink style={{ color: "inherit", textDecoration: "none" }} to={'/cart'}><ShoppingBagOutlined /><Typography variant='span' color={'yellowGreen'}>+{cartProduct.length}</Typography></NavLink></Typography>
                    </Stack>
                </Toolbar>

            </AppBar>
        </HideOnScroll>
    )
}

export default Navbar