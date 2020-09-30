import React, { useState, useEffect, useRef } from 'react';
import { Redirect, withRouter } from "react-router-dom";
import { Button, Form, Input, FormGroup } from 'react-bootstrap';


import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';

// Mods
import API from "../../modules/data_module"
import TaskBox from "./TaskBox"
import NewTaskButton from "./NewTaskButton"


const TaskPreview = (props) => {
    let props_reference = props
    const { myGroups, groupId, history } = props

    // Variables
    const [isLoading, setIsLoading] = useState(false); // Button is isLoading

    const goTasks = () => {
        history.push(`/tasks/group=${groupId}`)
    }
    
    const [tasks, setTasks] = useState([]) 

    const requestQuery = async () => {
        /*
        Handle the request send to server to get back a list of Tasks.
        */
        let query = `group=${groupId}`
        const list = await API.getCustom("task", query);
        
        if (list.length >= 1) {
            setTasks(list);
        }
    }


    //Effect
    useEffect(()=>{
        requestQuery()
    },[])


    return <>
        <Paper>
        <Typography variant={"h4"} style={{"align": "center"}}>
            <Link onClick={goTasks}>
                Tasks 
            </Link>
            </Typography>
            <Divider />
            <NewTaskButton groupId={groupId} requestQuery={requestQuery}/>
            <Divider variant={"middle"}/>
            { tasks.length == 0 && <>
            <Typography variant={"h6"} color="textSecondary" gutterBottom>
                    Looks like this group doesn't have any task! Be the first to create!
            </Typography>
            </> }
            { tasks.map( task => <React.Fragment key={task.id}>
            <TaskBox task={task} requestQuery={requestQuery} /> <Divider />
            </React.Fragment>) }
        </Paper>
    </>
};

export default withRouter(TaskPreview);