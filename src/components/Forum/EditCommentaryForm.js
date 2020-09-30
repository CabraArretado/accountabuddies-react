import React, { useRef } from "react"
import { useHistory, withRouter } from "react-router-dom"
import { Form, Input, FormGroup } from 'react-bootstrap';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from "@material-ui/core/Paper";

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
            <Grid align={"center"}>
                <Typography variant="h5">Edit Commentary</Typography>
                <Paper>
                    <Container component="main" maxWidth="xs">
                        <form className="" noValidate>
                            <TextField
                                inputRef={title}
                                required
                                id="commentary-title"
                                label="New Commentary Title"
                                defaultValue={commentary.title}
                                autoFocus
                            />
                            <TextField
                                inputRef={content}
                                required
                                fullWidth
                                multiline
                                rows={4}
                                id="commentary-content"
                                label="New Commentary Content"
                                defaultValue={commentary.content}
                                name="commentary-content"
                            />
                            <Button onClick={handleEdit}>
                            Confirm Edition
                        </Button>
                        </form>
                    </Container>
                </Paper>
            </Grid>
        </>
    )
}

//     return (
//         <>
//             <Form className="form--login" onSubmit={handleEdit}>
//                 <fieldset>
//                     <input ref={title} type="text"
//                         className="form-control"
//                         placeholder="Title"
//                         defaultValue={commentary.title}
//                         required autoFocus />
//                 </fieldset>
//                 <fieldset>
//                     <label htmlFor="inputContent"> Content </label>
//                     <input ref={content} type="text"
//                         id="content"
//                         className="form-control"
//                         placeholder="Content"
//                         defaultValue={commentary.content}
//                         required />
//                 </fieldset>
//                 <fieldset>
//                     <Button type="submit">
//                         Confirm Edition
//                     </Button>
//                 </fieldset>
//             </Form>
//         </>
//     )
// }

export default EditCommentaryForm