import React, { useRef } from "react"
import { useHistory, withRouter } from "react-router-dom"
import { Form, FormGroup } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';

import API from "../../modules/data_module"

// Login Working
const NewTaskForm = props => {
    let groupId = props.groupId
    let requestQuery = props.requestQuery

    const title = useRef()
    const description = useRef()
    const due = useRef()

    // ('title', 'created_by', 'created_at', 'group', 'description', 'due', 'done')
    const handleNewTask = async (e) => {
        e.preventDefault()

        const newTask = {
            "title": title.current.value,
            "description": description.current.value,
            "due": due.current.value,
            "group": groupId
        }
        let posted = await API.post("task", newTask)
        props.trigger()
        props.requestQuery()
    }

    return (
        <>
        <Paper>
            <Form className="form--login" onSubmit={handleNewTask}>
                <TextField
                        inputRef={title}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="title"
                        label="Task Name"
                        name="email"
                        autoFocus
                    />
                <TextField
                        inputRef={description}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="description"
                        label="Task Description"
                        name="description"
                    />
                <Input
                        inputRef={due}
                        required
                        type="datetime-local"
                        margin="normal"
                        fullWidth
                        id="due"
                        label="Due Date"
                        name="due"
                    />
                <fieldset>
                <Divider />
                    <Button type="submit">
                        Create
                    </Button>
                </fieldset>
            </Form>
        </Paper>
        </>
    )
}

export default NewTaskForm