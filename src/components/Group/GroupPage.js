import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Button, Form, Input, FormGroup } from 'react-bootstrap';

import API from "../../modules/data_module"
import ForumMain from "../Forum/ForumMain"
import TaskMain from "../Task/TaskMain"

// moods

const GroupPage = (props) => {
    const getMyGroups = props.getMyGroups
    let groupId = props.groupId
    const [ group, setGroup ] = useState({})
    const [ thisGroup, setThisGroup] = useState(props.groupId)

    const getGroup = async () => {
        const groupQuery = await API.get("group", groupId)
        setGroup(groupQuery)
    }

    useEffect(()=>{getGroup()
    },[groupId])

    const handleLeave = async (id) => {
        // getMyGroups()
    }


    //TODO: formate the date

    return <>
        <div className="container">
            <h1>{group.title}</h1>

            <button onClick={handleLeave}>Leave</button>
            <h5>Created by: {group.created_by} in {group.created_at}</h5>
            <h4>{group.description}</h4>
            <h3>{group.population}/{group.size}</h3>
        </div>
        <ForumMain groupId={thisGroup} />
        <Link to={`/forum/${groupId}`}> Forum </Link>
        <TaskMain groupId={thisGroup} />
    </>
};

export default GroupPage;