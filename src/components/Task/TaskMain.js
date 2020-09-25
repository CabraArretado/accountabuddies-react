import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Button, Form, Input, FormGroup } from 'react-bootstrap';

// Mods
import API from "../../modules/data_module"
import TaskBox from "./TaskBox"
import NewTaskButton from "./NewTaskButton"


const TaskMain = (props) => {
    let props_reference = props
    const myGroups = props.myGroups
    const groupId = props.groupId

    // Variables
    const [isLoading, setIsLoading] = useState(false); // Button is isLoading

    
    const [tasks, setTasks] = useState([]) 

    const requestQuery = async () => {
        /*
        Handle the request send to server to get back a list of Tasks.
        */
        let query = `group=${groupId}`
        const list = await API.getCustom("task", query);
        

        console.log("works!")
        if (list.length >= 1) {
            setTasks(list);
        }
    }


    //Effect
    useEffect(()=>{
        requestQuery()
    },[])


    return <>
        <section className="container">
            <h5 className="">Tasks </h5>
            <NewTaskButton groupId={groupId} requestQuery={requestQuery}/>
            { tasks.map( task => <TaskBox key={task.id} task={task} requestQuery={requestQuery} />) }
        </section>
    </>
};

export default TaskMain;