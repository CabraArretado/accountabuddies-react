import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Button, Form, Input, FormGroup } from 'react-bootstrap';
import {getMyGroups} from "../../App"

import API from "../../modules/data_module"

const JoinGroupButton = React.memo(props =>{
    const getMyGroups = props.getMyGroups
    const groupId = props.groupId
    const [isLoading, setIsLoading] = useState(false)

    const handleJoin = async () => {
        setIsLoading(true)
        const newRelation = {
            group: groupId
        }

        await API.post("group_user", newRelation)
        await getMyGroups()
        setIsLoading(false)
        getMyGroups()
    }

    return <>
        <Button disabled={isLoading} onClick={handleJoin}>Join!</Button>
    </>
}
)

export default JoinGroupButton