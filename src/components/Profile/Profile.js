import React, { useState } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import { Button, Form, Input, FormGroup } from 'react-bootstrap';

import API from "../../modules/data_module"

const Profile = (props) => {
    const props_reference = props

    const profile = props_reference.profile
    const setProfile = props_reference.setProfile

    return <>
        <div className="container">
            <h2>{profile.first_name} {profile.last_name}</h2>
            <h5>Joined in { profile.date_joined }</h5>
        </div>
    </>
}

export default Profile