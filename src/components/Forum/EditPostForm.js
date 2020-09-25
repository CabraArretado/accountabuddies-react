import React, { useRef } from "react"
import { useHistory, withRouter } from "react-router-dom"
import { Button, Form, Input, FormGroup } from 'react-bootstrap';

import API from "../../modules/data_module"

// Login Working
const EditForm = props => {
    let groupId = props.groupId
    let postId = props.postId
    let post = props.post

    const title = useRef()
    const content = useRef()

    const handleEdit = async (e) => {
        e.preventDefault()

        const edited = {
            ...post
        }
        edited.title = title.current.value
        edited.content = content.current.value

        let posted = await API.put("forum_post", post.id, edited)

        await props.getPost()
        props.trigger()
    }

    return (
        <>
            <Form className="form--login" onSubmit={handleEdit}>
                <fieldset>
                    <input ref={title} type="text"
                        className="form-control"
                        placeholder="Title"
                        defaultValue={post.title}
                        required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputContent"> Content </label>
                    <input ref={content} type="text"
                        id="content"
                        className="form-control"
                        placeholder="Content"
                        defaultValue={post.content}
                        required />
                </fieldset>
                <fieldset>
                    <Button type="submit">
                        Confirm Edition
                    </Button>
                </fieldset>
            </Form>
        </>
    )
}

export default EditForm