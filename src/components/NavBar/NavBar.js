import React, { useState } from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';

import { useHistory } from 'react-router-dom';
import SimpleDrawer from "./Drawer"

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
}));

export default function NavBar(props) {

    const history = useHistory();
    const setIsLoggedIn = props.setIsLoggedIn
    const {darkMode, switchDark} = props
    const isAuthenticated = props.auth.isAuthenticated
    const logout = props.auth.logout
    const myGroups = props.myGroups
    const profile = props.profile

    const classes = useStyles();

    const [drawerOpen, setDrawerOpen] = useState(false)
    const switchDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }



    /* LINKS TO ANOTHER PAGES */
    const handleMyProfile = () => {
        history.push(`/my_profile`)
    }

    const handleLogout = () => {
        logout()
        history.push(`/`)
    }

    const handleLogin = () => {
        history.push(`/login`)
    }

    const handleRegister = () => {
        history.push(`/register`)
    }



    /* --- */

    return (
        <>
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                { isAuthenticated() ? <>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={switchDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                    </> :
                    null }

                    <Typography className={classes.title} variant="h6" noWrap>
                        Account-a-buddies
                    </Typography>
                    <div className={classes.grow} />
                    <WbSunnyIcon />
                    <Switch color="default" checked={darkMode} onChange={switchDark} name="DarkMode" />
                    <Brightness3Icon />
                    { isAuthenticated() ? <>
                        <MenuItem onClick={handleMyProfile}>My Profile</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </>
                    : <>
                    <MenuItem onClick={handleLogin}>Sign in</MenuItem>
                    <MenuItem onClick={handleRegister}>Register</MenuItem>
                    
                    </>
                    }
                </Toolbar>
            </AppBar>
        </div>
        { isAuthenticated() ?
        <SimpleDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} switchDrawer={switchDrawer}/>
        :
        null }
        </>
    );
}