import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Button, Form, Input, FormGroup } from 'reactstrap';

import API from "../../modules/data_module"

// moods

const TaskBox = (props) => {

    let task = props.task

    const handleDone = () => {
        let myTask = {
            ...task
        }
        myTask.done = true
        API.put("task", task.id, myTask)
        props.requestQuery()
    }




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