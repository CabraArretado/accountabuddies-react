import React from 'react';
import { Link, Redirect, useHistory } from "react-router-dom";
import { Form, Input, FormGroup } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import {getMyGroups} from "../../App"

import API from "../../modules/data_module"

const EditPostButton = props =>{

    const handleEdit = async (e) => {
        e.preventDefault()
        props.triggerForm()
    }

    return <>
        <Button onClick={handleEdit}>Edit</Button>
    </>
}

export default EditPostButton