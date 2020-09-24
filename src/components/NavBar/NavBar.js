import React, { useState } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
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

    console.log(props.profile)


    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">account-a-buddies</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    { isAuthenticated() ?
                    <>
                    <li className="nav-item">
                        <Link className="nav-link" to="/groups">Find Groups</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/my_profile">/my_profile</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            My Groups
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {
                                myGroups.map(group => {
                                    return <a key={group.id} className="dropdown-item" href={`/groups/${group.id}`}> {group.title} </a>
                                })
                            }
                            {/* <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a> */}
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/create_group">Create New Group</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                    </>
                    : null }
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    {
                        isAuthenticated() ? <>
                            {/* <a className="nav-link" href="/my_profile"> {profile.first_name}</a> */}
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