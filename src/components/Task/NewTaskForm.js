import React, { useRef } from "react"
import { useHistory, withRouter } from "react-router-dom"
import { Button, Form, Input, FormGroup } from 'react-bootstrap';

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
            <Form className="form--login" onSubmit={handleNewTask}>
                <fieldset>
                    <label htmlFor="inputTitle"> Title </label>
                    <input ref={title} type="text"
                        className="form-control"
                        placeholder="Email"
                        required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputContent"> Content </label>
                    <input ref={description} type="text"
                        id="description"
                        className="form-control"
                        placeholder="Content"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputContent"> Due Date </label>
                    <input ref={due}
                        type="datetime-local"
                        id="due"
                        className="form-control"
                        placeholder="Content"
                        required />
                </fieldset>
                <fieldset>
                    <Button type="submit">
                        Create
                    </Button>
                </fieldset>
            </Form>
        </>
    )
}

export default NewTaskForm