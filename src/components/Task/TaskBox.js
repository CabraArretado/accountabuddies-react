import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Form, Input, FormGroup } from 'react-bootstrap';

import API from "../../modules/data_module"

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// moods

const TaskBox = (props) => {

    let task = props.task
    const requestQuery = props.requestQuery

    const handleDone = async (e) => {
        e.preventDefault()
        let myTask = {
            ...task
        }
        myTask.done = true
        await API.put("task", task.id, myTask)
        await requestQuery()
    }

    
    return <>
        <Card>
            <CardContent>
                <Typography variant={"h5"} color="textSecondary" gutterBottom>
                    {task.title}
                </Typography>
                <Typography variant={"h6"} color="textSecondary" gutterBottom>
                    Due date: {task.due}
                </Typography>
                <Typography variant={"subtitle2"} color="textSecondary" gutterBottom>
                    {task.description}
                </Typography>
            </CardContent>
            <CardActions>
                { 
                    task.done ?
                    <Typography variant={"subtitle2"} color="textSecondary" gutterBottom>
                    Task done!
                </Typography> : 
                <Typography variant={"subtitle2"} color="textSecondary" gutterBottom>
                    <Button onClick={handleDone}>Mask As Done!</Button>
                </Typography>
                }
            </CardActions>
        </Card>
    </>
};

export default TaskBox;