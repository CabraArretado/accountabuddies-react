import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Form, Input, FormGroup } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import {getMyGroups} from "../../App"

import API from "../../modules/data_module"

const NewPostButton = React.memo(props =>{

    let groupId = props.groupId

    return <>
        <Link to={`/forum/${groupId}/new_post`}><Button>Create New Post</Button></Link>
    </>
}
)

export default NewPostButton