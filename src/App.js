import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ApplicationViews from './components/ApplicationViews';
import NavBar from "./components/NavBar/NavBar"
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import API from "./modules/data_module"



function App() {

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
    ///////////////////////////////////////////////////////////////////////////////////
    /* Group Authentication */

    const [myGroups, setMyGroups] = useState([]) // Array w/ groups the user participate currently
    const [myGroupsId, setMyGroupsId] = useState([]) // Array w/ the ids of the groups user participate currently


    const getMyGroups = async () => {
        /*
        If user is authenticated call the server to see which is the user in and set the myGroups with a answer, else change myGroup to empty array
        */
        if (auth.isAuthenticated()){
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

    useEffect(()=>{
        /*
        Update MyGroup if the user login or logout
        */
        getMyGroups()
    }, [loggedIn])

    useEffect(()=>{
        /*
        Just changes the MyGroupsId to the current group set
        */
        setMyGroupsId(myGroups.map(group => group.id))
    }, [myGroups])

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    /* Profile */
    const [ profile, setProfile ] = useState({})
    const getProfile = async () => {
        const i = await  API.getCustom("account","myself=True")
        setProfile(i.user)
        return i
    }

    useEffect(()=>{
        getProfile()
    }, [])



    return (
        <>
            <Router>
                <Route render={props => (
                    <NavBar setIsLoggedIn={setIsLoggedIn} auth={auth} {...props} myGroups={myGroups}/>
                )} />
                <div className="container" >
                    <ApplicationViews profile={profile} setProfile={setProfile} auth={auth} loggedIn={loggedIn} myGroups={myGroups} getMyGroups={getMyGroups} myGroupsId={myGroupsId}/>
                </div>
            </Router>
        </>
    );
}

export default App;
