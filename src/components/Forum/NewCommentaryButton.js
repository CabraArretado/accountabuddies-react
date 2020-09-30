import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Form, Input, FormGroup } from 'react-bootstrap';
import {getMyGroups} from "../../App"
import Button from '@material-ui/core/Button';

import API from "../../modules/data_module"

import NewCommentaryForm from "./NewCommentaryForm"

const NewCommentaryButton = React.memo(props =>{

    let groupId = props.groupId
    let postId = props.postId

    let getCommentaries = props.getCommentaries

    const [isLoading, setIsLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const trigger = () => {
        setIsOpen(!isOpen)
    }

    return <>
        <Button variant="contained" onClick={trigger}>New Commentary</Button>
        { isOpen ? <NewCommentaryForm postId={postId} trigger={trigger} groupId={groupId} getCommentaries={getCommentaries}/> : null }
    </>
}
)


export default NewCommentaryButton