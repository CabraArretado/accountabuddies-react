import React from 'react';
import { Link, Redirect, useHistory } from "react-router-dom";
import { Form, Input, FormGroup } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import {getMyGroups} from "../../App"

import API from "../../modules/data_module"

const DeleteButton = React.memo(props =>{
    let table = props.table
    let id = props.id
    let groupId = props.groupId
    let getPost = props.getPost

    const history = useHistory();

    console.log(groupId)


    const handleDelete = async () => {
        await API.delete(table, id)
        history.push(`/forum/${groupId}`)
        try { await getPost() 
        } finally{
        }

    }

    return <>
        <Button onClick={handleDelete}>Delete</Button>
    </>
}
)

export default DeleteButton