import React, { useState, useEffect, useRef } from 'react';
import { withRouter, Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import API from "../../modules/data_module"

const JoinGroupButton = props => {
    const { getMyGroups, groupId, history} = props
    const [isLoading, setIsLoading] = useState(false)

    const handleJoin = async () => {
        setIsLoading(true)
        const newRelation = {
            group: groupId
        }

        await API.post("group_user", newRelation)
        await getMyGroups()
        history.push(`groups/${groupId}`)

        setIsLoading(false)
    }

    return <>
        <Button variant="contained" disabled={isLoading} onClick={handleJoin}>Join!</Button>
    </>
}

export default withRouter(JoinGroupButton)