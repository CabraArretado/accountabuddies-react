import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Form, Input, FormGroup } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
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
        <Button variant={"contained"} onClick={trigger}>Create New Task</Button>
        { isOpen ? <NewTaskForm trigger={trigger} groupId={groupId} requestQuery={requestQuery}/> : null }
    </>
}
)


export default NewTaskButton