import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Button, Form, Input, FormGroup } from 'react-bootstrap';

import DeleteCommentaryButton from "./DeleteCommentaryButton"
import API from "../../modules/data_module"
import EditCommentaryForm from "./EditCommentaryForm"
import EditCommentaryButton from "./EditCommentaryButton"

import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';

import { formatDate } from "../Helpers"

// moods
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }));

const CommentaryBox = (props) => {
    let groupId = props.groupId
    let id = props.id
    let profile = props.profile
    let getCommentaries = props.getCommentaries
    const commentary = props.commentary

    const classes = useStyles();
    const [editing, setEditing] = useState(false)

    const triggerForm = () => {
        setEditing(!editing)
    }

    return <>
        {
            editing
                ?
                <EditCommentaryForm getCommentaries={getCommentaries} triggerForm={triggerForm} groupId={groupId} postId={id} commentary={commentary} />
                :
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar alt="Profile Picture">{commentary.user.first_name[0]}</Avatar>
                        {commentary.user.first_name}
                    </ListItemAvatar>
                    <ListItemText
                    primary={<React.Fragment>
                        <Typography
                            variant="h4"
                            color="textPrimary"
                        >
                                {commentary.title}
                        </Typography>
                    </React.Fragment>}
                    
                    secondary={
                    <React.Fragment>
                        <Typography
                            variant="caption"
                            color="textPrimary"
                        >
                            {formatDate(commentary.created_at)}
                        </Typography>
                        
                        <Typography
                            variant='h5'
                            color="textPrimary"
                        >
                            {commentary.content}
                        </Typography>
                    </React.Fragment>
            } />

                    {commentary.user.id == profile.id ? <> <EditCommentaryButton triggerForm={triggerForm} /> <DeleteCommentaryButton groupId={groupId} commentaryId={commentary.id} getCommentaries={getCommentaries} table={"forum_post"} postId={id} /> </> : null}
                </ListItem>
        }
    </>
};

export default CommentaryBox;