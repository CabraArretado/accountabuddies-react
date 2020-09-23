import React, { useRef, useState } from "react"
import { withRouter } from "react-router-dom"
import { Button, Form, Input, FormGroup, Label } from 'reactstrap';
import API from "../../modules/data_module"



const CreateGroup = props => {
    const title = useRef()
    const description = useRef()
    const size = useRef()

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
            "size": size.current.value
            }

        create_group(new_group).then(() => {
            props.history.push({
                pathname: "/"
            })
        })
    }

    return (
        <main style={{ textAlign: "center" }}>
            <Form className="form--login" onSubmit={handleGroup}>
                <h1 className="h3 mb-3 font-weight-normal">Create a group</h1>
                <fieldset>
                    <Label htmlFor="firstName"> Group's Title </Label>
                    <input ref={title} type="text"
                        name="title"
                        className="form-control"
                        placeholder="Title"
                        required autoFocus />
                </fieldset>
                <fieldset>
                    <Label htmlFor="lastName"> Description </Label>
                    <input ref={description} type="text"
                        name="description"
                        className="form-control"
                        placeholder="Description"
                        required />
                </fieldset>
                <fieldset>
                    <Label htmlFor="size"> Group's size </Label>
                    <input ref={size} type="number" min="2" max="5"
                        required />
                </fieldset>
                <fieldset>
                    <Button type="submit">
                        Create
                    </Button>
                </fieldset>
            </Form>
        </main>
    )
}
export default withRouter(CreateGroup)