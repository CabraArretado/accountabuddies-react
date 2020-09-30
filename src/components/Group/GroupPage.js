import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect, withRouter } from "react-router-dom";

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { formatDate } from "../Helpers"

import API from "../../modules/data_module"
import ForumPreview from "../Forum/ForumPreview"
import TaskPreview from "../Task/TaskPreview"

const useStyles = makeStyles((theme) => ({
    center: {
        align: 'center',
    },

}));
// moods

const GroupPage = (props) => {
    const getMyGroups = props.getMyGroups
    let groupId = props.groupId
    const [group, setGroup] = useState({})
    const [thisGroup, setThisGroup] = useState(props.groupId)
    const [created_by, setCreated_by] = useState({ "first_name": "" })
    const classes = useStyles();

    const getUser = async () => {
        if (group.created_by !== undefined) {
            const userQuery = await API.get("account", group.created_by)
            setCreated_by(userQuery.user)
        }
    }
    const getGroup = async () => {
        const groupQuery = await API.get("group", groupId)
        setGroup(groupQuery)
    }

    useEffect(() => {
        getGroup()

    }, [groupId])

    useEffect(() => {
        getUser()
    }, [group])

    const handleLeave = async (id) => {
        // getMyGroups()
    }


    //TODO:   direction="row"

    return <>
        <Grid item container
            direction="row"
            justify="space-evenly"
            alignItems="flex-start"
            spacing={1}
            xs={12}
        >
            {/* <Grid item xs={3} /> */}

                <Paper elevation={0}>
            <Grid item xs={12}>
                <Typography variant={"subtitle1"}>Group</Typography>
                    <Typography variant={"h2"}>{group.title}</Typography>

                    <Typography variant={"subtitle2"}>Created by {created_by.first_name + " " + created_by.last_name} in {formatDate(group.created_at)}</Typography>
                    <Typography variant={"subtitle1"}>{group.description}</Typography>
            </Grid>
                </Paper>
            {/* <Grid item xs={2} /> */}

        </Grid>
        <Grid item container
            direction="row"
            justify="space-evenly"
            alignItems="flex-start"
            spacing={1}
            xs={12}
        >
            <Grid item xs={6}>
                <ForumPreview groupId={thisGroup} />
            </Grid>

            <Grid item xs={6}>
                <TaskPreview groupId={thisGroup} />
            </Grid>
        </Grid>
    </>
};

export default GroupPage;