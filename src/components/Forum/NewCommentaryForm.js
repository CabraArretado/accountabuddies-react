import React, { useRef } from "react"
import { useHistory, withRouter } from "react-router-dom"
import { Button, Form, Input, FormGroup } from 'react-bootstrap';

import API from "../../modules/data_module"

// Login Working
const NewCommentaryForm = props => {
    let groupId = props.groupId
    let postId = props.postId
    let getCommentaries = props.getCommentaries

    const title = useRef()
    const content = useRef()

    const handleCommentary = async (e) => {
        e.preventDefault()
        const newCommentary = {
            "title": title.current.value,
            "content": content.current.value,
            "group": groupId,
            "post": postId
        }
        let posted = await API.post("forum_commentary", newCommentary)
        getCommentaries()
        props.trigger()
    }

    return (
        <>
            <Form className="form--login" onSubmit={handleCommentary}>
                <fieldset>
                    <label htmlFor="inputTitle"> Title </label>
                    <input ref={title} type="text"
                        className="form-control"
                        placeholder="Title"
                        required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputContent"> Content </label>
                    <input ref={content} type="text"
                        id="password"
                        className="form-control"
                        placeholder="Content"
                        required />
                </fieldset>
                <fieldset>
                    <Button type="submit">
                        Post
                    </Button>
                </fieldset>
            </Form>
        </>
    )
}

export default NewCommentaryForm