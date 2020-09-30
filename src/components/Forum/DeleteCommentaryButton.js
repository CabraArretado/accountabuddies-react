import React from 'react';
import { Link, Redirect, useHistory } from "react-router-dom";
import { Form, Input, FormGroup } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import {getMyGroups} from "../../App"

import API from "../../modules/data_module"

const DeleteCommentaryButton = React.memo(props =>{
    let postId = props.postId
    let commentaryId = props.commentaryId
    let groupId = props.groupId


    let getCommentaries = props.getCommentaries

    const history = useHistory();

    console.log(groupId)


    const handleDelete = async (e) => {
        e.preventDefault()
        await API.delete("forum_commentary", commentaryId)
        history.push(`/forum/${groupId}/${postId}`)
        try { await getCommentaries() 
        } finally{
        }

    }

    return <>
        <Button variant="contained" onClick={handleDelete}>Delete</Button>
    </>
}
)

export default DeleteCommentaryButton