import React, { useState, useEffect, useRef } from 'react';
import { withRouter, Redirect } from "react-router-dom";
import { Form, Input, FormGroup } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import {getMyGroups} from "../../App"

import API from "../../modules/data_module"

const NewPostButton = React.memo(props =>{

    let groupId = props.groupId
    let history = props.history

    const handleNewPost = () => {
        history.push(`/forum/${groupId}/new_post`)

    }
    return <>
        <Button onClick={handleNewPost} variant="contained">Create New Post</Button>
    </>
}
)

export default withRouter(NewPostButton)