import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Button, Form, Input, FormGroup } from 'react-bootstrap';
import {getMyGroups} from "../../App"

import API from "../../modules/data_module"

const JoinGroupButton = props =>{
    const getMyGroups = props.getMyGroups
    const groupId = props.groupId
    const [isLoading, setIsLoading] = useState(false)
    console.log(getMyGroups)

    const handleJoin = async () => {
        setIsLoading(true)
        const newRelation = {
            group: groupId
        }

        await API.post("group_user", newRelation).then(
            getMyGroups()
        )

        setIsLoading(false)
    }

    return <>
        <Button disabled={isLoading} onClick={handleJoin}>Join!</Button>
    </>
}

export default JoinGroupButton