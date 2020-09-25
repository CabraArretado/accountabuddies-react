import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Button, Form, Input, FormGroup } from 'react-bootstrap';

import API from "../../modules/data_module"

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

    console.log(requestQuery)




    return <>
        <div className="container">
            <h1>{task.title}</h1>
            <h2>{task.due}</h2>
            <h4>{task.description}</h4>
            { task.done ? <p>Done</p> : <button onClick={handleDone}>Mask As Done!</button>}
        </div>
    </>
};

export default TaskBox;