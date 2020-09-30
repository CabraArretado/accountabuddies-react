import React, { useRef } from "react"

import { useHistory, withRouter } from "react-router-dom"
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

import API from "../../modules/data_module"
import { Paper } from "@material-ui/core";


// Login Working
const NewCommentaryForm = props => {

    let { groupId, postId, getCommentaries } = props

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
        <Grid>
        <Paper>
            <Container component="main" maxWidth="xs">
                <form className="" noValidate>
                    <TextField
                        inputRef={title}
                        required
                        id="commentary-title"
                        label="New Commentary Title"
                        autoFocus
                    />
                    <TextField
                        inputRef={content}
                        required
                        fullWidth
                        multiline
                        rows={4}
                        id="comentary_content"
                        label="New Commentary Content"
                        name="comentary_content"
                    />
                    <Button onClick={handleCommentary}>
                        Post
                    </Button>
                </form>
            </Container>
        </Paper>
        </Grid>
        </>
    )
}

export default NewCommentaryForm