import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Button, Form, Input, FormGroup } from 'reactstrap';
import {getMyGroups} from "../../App"

import API from "../../modules/data_module"
import NewTaskForm from "./NewTaskForm"

const NewTaskButton = React.memo(props =>{

    let groupId = props.groupId
    let requestQuery = props.requestQuery

    const [isLoading, setIsLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const trigger = () => {
        setIsOpen(!isOpen)
    }

    return <>
        <button onClick={trigger}>Create New Task</button>
        { isOpen ? <NewTaskForm trigger={trigger} groupId={groupId} requestQuery={requestQuery}/> : null }
    </>
}
)


export default NewTaskButton