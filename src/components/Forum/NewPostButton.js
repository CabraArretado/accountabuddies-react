import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Button, Form, Input, FormGroup } from 'reactstrap';
import {getMyGroups} from "../../App"

import API from "../../modules/data_module"

const NewPostButton = React.memo(props =>{

    let groupId = props.groupId

    const [isLoading, setIsLoading] = useState(false)

    return <>
        <Link to={`/forum/group=${groupId}/new_post`}> <Button>Create New Post</Button> </Link>
    </>
}
)

export default NewPostButton