import React, { useRef } from "react"
import { useHistory, withRouter } from "react-router-dom"
import { Button, Form, Input, FormGroup } from 'react-bootstrap';

import API from "../../modules/data_module"

// Login Working
const EditCommentaryForm = props => {
    let groupId = props.groupId
    let postId = props.postId
    let commentary = props.commentary

    console.log(commentary)

    const title = useRef()
    const content = useRef()

    const handleEdit = async (e) => {
        e.preventDefault()

        const edited = {
            ...commentary
        }
        edited.title = title.current.value
        edited.content = content.current.value
        console.log(commentary.content)
        console.log(edited.content)

        await API.put("forum_commentary", commentary.id, edited)

        await props.getCommentaries()
        props.triggerForm()
    }

    return (
        <>
            <Form className="form--login" onSubmit={handleEdit}>
                <fieldset>
                    <input ref={title} type="text"
                        className="form-control"
                        placeholder="Title"
                        defaultValue={commentary.title}
                        required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputContent"> Content </label>
                    <input ref={content} type="text"
                        id="content"
                        className="form-control"
                        placeholder="Content"
                        defaultValue={commentary.content}
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

export default EditCommentaryForm