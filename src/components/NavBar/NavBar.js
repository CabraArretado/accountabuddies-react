import React, { useState } from 'react';
import { Link, Route, Redirect, useHistory } from 'react-router-dom';
import { Button, Form, Input, FormGroup } from 'react-bootstrap';

import SimpleMenu from "./LittleMenu"

const NavBar = props => {
    const setIsLoggedIn = props.setIsLoggedIn
    const isAuthenticated = props.auth.isAuthenticated
    const logout = props.auth.logout
    const myGroups = props.myGroups
    const profile = props.profile

    const handleLogout = () => {
        logout()
        setIsLoggedIn(false)
        props.history.push('/')
    }
    const history = useHistory();
    
const handleMenuItemClick = (event, index) => {
    event.preventDefault()
    history.push(`/groups/${index}`)

};
    


    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">account-a-buddies</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to={"/"}>Home <span className="sr-only">(current)</span></Link>
                    </li>
                    
                    { isAuthenticated() ?
                    <>
                    <li className="nav-item">
                        <Link className="nav-link" to="/groups">Find Groups</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/my_groups">My Groups</Link>
                    </li>
                    </>
                    : null }
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    {
                        isAuthenticated() ? <>
                            <Link className="nav-item" to="/my_profile">My account</Link>
                            <button className="btn btn-outline-warning my-2 my-sm-0 mx-2" type="submit" onClick={handleLogout}>Logout</button>
                            </>
                            :
                            <>
                                <Link to="/login"><button className="btn btn-outline-success my-2 my-sm-0 mx-2" type="submit">Login</button></Link>
                                <Link to="/register"><button className="btn btn-outline-success my-2 my-sm-0 mx-2" type="submit">Register</button></Link>
                            </>
                    }
                </form>
            </div>
        </nav>
    </>
}

export default NavBar