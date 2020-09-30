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
            <Grid align={"center"}>
                <Typography variant="h5">Edit Post</Typography>
                <Paper>
                    <Container component="main" maxWidth="xs">
                        <form className="" noValidate>
                            <TextField
                                inputRef={title}
                                required
                                id="commentary-title"
                                label="New Post Title"
                                defaultValue={post.title}
                                autoFocus
                            />
                            <TextField
                                inputRef={content}
                                required
                                fullWidth
                                multiline
                                rows={4}
                                id="commentary-content"
                                label="New Post Content"
                                defaultValue={post.content}
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

export default EditForm