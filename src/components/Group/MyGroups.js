import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect, withRouter } from "react-router-dom";

// Mods
import API from "../../modules/data_module"
import GroupBox from "./GroupBox"
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';


const MyGroups = (props) => {
    const { getMyGroups, myGroups, history } = props

    useEffect(()=>{getMyGroups()}, [])

    const handleCreateGroup = () => {
        history.push("/create_group")
    }

    return <>
        <Paper className="container">
    <Grid container>
    <Grid item xs={12}>
        <Typography variant={"h2"} color="textSecondary" gutterBottom>
                    My Groups
            </Typography>
                { myGroups.map(group => <React.Fragment key={group.id}> <GroupBox my_link={true} is_my_group={true} group={group}/>  <Divider variant={"middle"}/></React.Fragment>) }
        </Grid>
        <Grid item xs={12} align={"center"}>
            <Button onClick={handleCreateGroup}>Create Group</Button>
        </Grid>
    </Grid>
        </Paper>
    </>
};

export default withRouter(MyGroups);