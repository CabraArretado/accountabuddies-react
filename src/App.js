import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography'

import ApplicationViews from './components/ApplicationViews';
import NavBar from "./components/NavBar/NavBar"
import Box from '@material-ui/core/Box';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import API from "./modules/data_module"



function App() {

    const [ darkMode, setDarkMode ] = useState(false)

    const switchDark = () => {
        setDarkMode(!darkMode)
    }


const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
        light: '#819ca9',
        main: '#546e7a',
        dark: '#29434e',
        contrastText: '#fafafa',
      },
      secondary: {
        light: '#ff5f52',
        main: '#c62828',
        dark: '#8e0000',
        contrastText: '#fafafa',
      },
  },
});

const lightTheme = createMuiTheme({
    palette: {
      type: "light",
      primary: {
          light: '#819ca9',
          main: '#546e7a',
          dark: '#29434e',
          contrastText: '#fafafa',
        },
        secondary: {
          light: '#ff5f52',
          main: '#c62828',
          dark: '#8e0000',
          contrastText: '#fafafa',
        },
    },
  });


    // AUTHENTICATION FEATURES
    // ALL AUTHENTICATION FEATURES (BUT STATES) MUST BE PASSED HERE INSIDE THE auth obj
    const [loggedIn, setIsLoggedIn] = useState(localStorage.getItem("accountaboddies_token") !== null)

    const auth = {
        isAuthenticated: () => {
            return loggedIn || localStorage.getItem("accountaboddies_token") !== null
        },

        register: (userInfo) => {
            return fetch("http://127.0.0.1:8000/account", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(userInfo)
            })
                .then(res => res.json())
                .then(res => {
                    if ("token" in res) {
                        localStorage.setItem("accountaboddies_token", res.token)
                        setIsLoggedIn(true)
                    }
                })
        },

        login: (credentials) => {
            return fetch("http://127.0.0.1:8000/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(credentials)
            })
                .then(res => res.json())
                .then(res => {
                    if ("valid" in res && res.valid && "token" in res) {
                        localStorage.setItem("accountaboddies_token", res.token)
                        setIsLoggedIn(true)
                    }
                })
        },

        logout: () => {
            setIsLoggedIn(false)
            localStorage.removeItem("accountaboddies_token")
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////

    /* Group Authentication */

    const [myGroups, setMyGroups] = useState([]) // Array w/ groups the user participate currently
    const [myGroupsId, setMyGroupsId] = useState([]) // Array w/ the ids of the groups user participate currently


    const getMyGroups = async () => {
        /*
        If user is authenticated call the server to see which is the user in and set the myGroups with a answer, else change myGroup to empty array
        */
        if (auth.isAuthenticated()) {
            let api_call = await fetch(`http://127.0.0.1:8000/group?my_groups=true`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Token ${localStorage.getItem("accountaboddies_token")}`
                }
            }).then(res => res.json())
            setMyGroups(api_call)
        } else {
            setMyGroups([])
        }
    }

    useEffect(() => {
        /*
        Update MyGroup if the user login or logout
        */
        getMyGroups()
    }, [loggedIn])

    useEffect(() => {
        /*
        Just changes the MyGroupsId to the current group set
        */
       if(myGroups.length > 0){
        setMyGroupsId(myGroups.map(group => group.id))}
    }, [myGroups])
    ////////////////////////////////////////////////////////////////////////////////////////////////////

    /* Profile */
    const [profile, setProfile] = useState({})

    const getProfile = async () => {
        if (auth.isAuthenticated()) {
            const i = await API.getCustom("account", "myself=True")
            setProfile(i[0].user)
            return i
        } else {
            setProfile({})
        }
    }

    useEffect(() => {
        getProfile()
    }, [loggedIn])

    ////////////////////////////////////////////////////////////////////////////////////////////////////

    function Copyright() {
        return (
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="http://localhost:3000/">
                    Account-a-buddies
                </Link>{' '}

                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

    return (
        <>
            <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
                <Paper>
                    <CssBaseline />
                    <Router>
                        <Grid container spacing={0}

                        >
                            <Route render={props => (
                                <NavBar
                                    setIsLoggedIn={setIsLoggedIn}
                                    darkMode={darkMode}
                                    switchDark={switchDark}
                                    auth={auth} {...props}
                                    myGroups={myGroups} />
                            )} />
                        </Grid>
                        <Grid container
                            direction="row"
                            justify="space-evenly"
                            alignItems="flex-start"
                            spacing={1}
                            xs={12}
                        >

                            <ApplicationViews
                                profile={profile}
                                getProfile={getProfile}
                                auth={auth}
                                loggedIn={loggedIn}
                                myGroups={myGroups}
                                getMyGroups={getMyGroups}
                                myGroupsId={myGroupsId} />
                        </Grid>
                    </Router>

                </Paper>
            </ThemeProvider>
            <Box mt={8}>
                <Copyright />
            </Box>
            <Box mt={8} />
        </>

    );
}

export default App;
