import React, { useState } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import API from "../../modules/data_module"

const Profile = (props) => {
    const props_reference = props

    const profile = props_reference.profile
    const getProfile = props_reference.getProfile
    
    return <>
        <Paper className="container">
            <Grid>
            <h2>{profile.first_name} {profile.last_name}</h2>
            <h5>Joined in { profile.date_joined }</h5>
            </Grid>
        </Paper>
    </>
}

export default Profile