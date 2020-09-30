import React, { useRef, useState } from "react"
import { withRouter } from "react-router-dom"
import API from "../../modules/data_module"

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from "@material-ui/core/Paper";


const CreateGroup = props => {
    const title = useRef()
    const description = useRef()
    const size = useRef()
    const getMyGroups = props.getMyGroups
    console.log(getMyGroups)

    const [group, setGroup] = useState({})
    
    const create_group = (group_instance) => {
        // return API.post("group", group_instance)
        return fetch("http://127.0.0.1:8000/group",
            {
                method: "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Token ${localStorage.getItem("accountaboddies_token")}`
                },
                body: JSON.stringify(group_instance)
            }).then(data => data.json())

    }
    
    const handleGroup = (e) => {
        e.preventDefault()

        // Create a group instance from form
        const new_group = {
            "title": title.current.value,
            "description": description.current.value,
            "size": 5
            }

        create_group(new_group).then(() => {
            getMyGroups()
            props.history.push({
                pathname: "/my_groups"
            })
        })
    }
    return (
        <>
            <Grid align={"center"}>
                <Typography variant="h2">Create New Group</Typography>
                <Paper>
                    <Container component="main" maxWidth="xs">
                        <form className="" noValidate>
                            <TextField
                                inputRef={title}
                                required
                                id="new-group-title"
                                label="Group Name"
                                autoFocus
                            />
                            <TextField
                                inputRef={description}
                                required
                                fullWidth
                                multiline
                                rows={4}
                                id="new-group-description"
                                label="Group Content"
                                name="new-group-description"
                            />
                            <Box mt={2} />
                            <Button variant="contained" onClick={handleGroup}>
                            Create
                        </Button>
                        </form>
                    </Container>
                    <Box mt={8} />
                </Paper>
            </Grid>
        </>
    )
}

export default withRouter(CreateGroup)