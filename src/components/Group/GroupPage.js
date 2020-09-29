import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect, withRouter } from "react-router-dom";
import Grid from '@material-ui/core/Grid';

import API from "../../modules/data_module"
import ForumMain from "../Forum/ForumMain"
import TaskMain from "../Task/TaskMain"

// moods

const GroupPage = (props) => {
    const getMyGroups = props.getMyGroups
    let groupId = props.groupId
    const [group, setGroup] = useState({})
    const [thisGroup, setThisGroup] = useState(props.groupId)
    const [created_by, setCreated_by] = useState({ "first_name": "" })

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
        <Grid item xs={3}>
            {/* Grid to center */}
        </Grid>
            <Grid item xs={8}>
                <h1>{group.title}</h1>

                <h5>Created by: {created_by.first_name} in {group.created_at}</h5>
                <h4>{group.description}</h4>
                {/* <h3>{group.population}/{group.size}</h3> */}
            </Grid>
            <Grid item xs={2}>{/* Grid to center */}
        </Grid>
        </Grid>
        <Grid item container
            direction="row"
            justify="space-evenly"
            alignItems="flex-start"
            spacing={1}
            xs={12}
        >
            <Grid item xs={6}>
                <ForumMain groupId={thisGroup} />
                <Link to={`/forum/${groupId}`}> Forum </Link>
            </Grid>

            <Grid item xs={6}>
                <TaskMain groupId={thisGroup} />
            </Grid>
        </Grid>
    </>
};

export default GroupPage;