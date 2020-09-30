import React, { useState } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import { formatDate } from "../Helpers"

import API from "../../modules/data_module"
import GroupBox from "../Group/GroupBox"

const Profile = (props) => {
    const props_reference = props

    const profile = props_reference.profile
    const getProfile = props_reference.getProfile

    const { getMyGroups, myGroups, history } = props

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        spacingme: {
            width: 20,
            height: 20,
        },
        large: {
            width: theme.spacing(12),
            height: theme.spacing(12),
        },
    }));

    const classes = useStyles();

    return <>
        <Paper>
            <hr className={classes.spacingme} />
            <Grid container align={"center"}>
                <Grid item xs={12}>
                    <Avatar className={classes.large}>{ profile.first_name ? <>{profile.first_name[0]}{profile.last_name[0]}</> : <> </> }</Avatar>
                </Grid>
                <hr />
                <Grid item xs={12}>
                    <Typography variant={"h2"}>
                        {profile.first_name} {profile.last_name}
                    </Typography>
                </Grid>
                <hr className={classes.spacingme} />
                <Grid item xs={12}>
                    Joined in {formatDate(profile.date_joined)}
                </Grid>
                <Grid item xs={12}>
                <hr className={classes.spacingme} />
                <Divider />
                <hr className={classes.spacingme} />
        <Typography variant={"h5"} color="textSecondary" gutterBottom>
                    My Groups 
            </Typography>
                { myGroups.map(group => <React.Fragment key={group.id}> <GroupBox my_link={true} is_my_group={true} group={group}/>  <Divider variant={"middle"}/></React.Fragment>) }
        </Grid>
            </Grid>
            <Box mt={8} />
        </Paper>
    </>
}

export default Profile