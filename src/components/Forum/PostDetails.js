import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from "react-router-dom";
import { formatDate } from "../Helpers"

import API from "../../modules/data_module"
import CommentaryBox from "./CommentaryBox"
import NewCommentaryButton from "./NewCommentaryButton"
import DeleteButton from "./DeleteButton"
import EditPostButton from "./EditPostButton"
import EditPostForm from "./EditPostForm"
import List from '@material-ui/core/List';


import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';

// moods

const useStyles = makeStyles((theme) => ({
    text: {
        padding: theme.spacing(2, 2, 0),
    },
    paper: {
        paddingBottom: 50,
    },
    list: {
        marginBottom: theme.spacing(2),
    },
    subheader: {
        backgroundColor: theme.palette.background.paper,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    grow: {
        flexGrow: 1,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
}));

const PostDetails = (props) => {
    let { groupId, postId, profile } = props

    const [editing, setEditing] = useState(false)
    const trigger = () => {
        setEditing(!editing)
    }

    const classes = useStyles();

    const [commentaries, setCommentaries] = useState([])
    const [post, setPost] = useState({ "title": "", "created_by": "", "created_at": "", "description": "" })

    const getPost = async () => {
        const query = await API.get("forum_post", postId)
        setPost(query)
    }

    const getCommentaries = async () => {
        const list = await API.getCustom("forum_commentary", `post=${postId}`);
        setCommentaries(list)
    }


    useEffect(() => {
        getPost()
        getCommentaries()
    }, [])

    //TODO: formate the date

    return <>
        <Grid container align={"center"}>
            <Grid item xs={12}>
                <Paper>
                    {
                        editing ?
                            <EditPostForm trigger={trigger} groupId={groupId} getPost={getPost} table={"forum_post"} id={post.id} post={post} />
                            : <>
                                <Typography variant="h3">{post.title}</Typography>
                                <Typography variant="subtitle2">Posted by {post.created_by.first_name} in {formatDate(post.created_at)}</Typography>
                                <Typography variant="h6">{post.content}</Typography>
                                {post.created_by.id == profile.id ? <> <DeleteButton groupId={groupId} getPost={getPost} table={"forum_post"} id={post.id} />  <EditPostButton trigger={trigger} /> </> : null}
                            </>
                    }
                </Paper>
            </Grid>
        </Grid>

        <Divider />

        <Grid container align={"center"}>
            <Grid xs={2} />
            <Grid item xs={8}>
                <Paper>
                    <List className={classes.list}>
                        {commentaries.map(commentary => <React.Fragment key={commentary.id}>

                            <CommentaryBox id={post.id} groupId={groupId} commentary={commentary} profile={profile} getCommentaries={getCommentaries} />
                            <Divider />

                        </React.Fragment>)}
                    </List>
                    <NewCommentaryButton postId={postId} groupId={groupId} getCommentaries={getCommentaries} />
                </Paper>
            </Grid>
        </Grid>
    </>
};

export default PostDetails;

{/* <List className={classes.list}>
{messages.map(({ id, primary, secondary, person }) => (
  <React.Fragment key={id}>
    <ListItem button>
      <ListItemAvatar>
        <Avatar alt="Profile Picture" src={person} />
      </ListItemAvatar>
      <ListItemText primary={primary} secondary={secondary} />
    </ListItem>
  </React.Fragment>
))}
</List> */}