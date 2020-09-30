import React, { useState, useEffect, useRef } from 'react';
import { withRouter } from "react-router-dom";
import { Button, Form, Input, FormGroup } from 'react-bootstrap';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

// Mods
import API from "../../modules/data_module"
import SearchForum from "./SearchForum"
import ForumPreviewBox from "./ForumPreviewBox"
import NewPostButton from "./NewPostButton"


const ForumPreview = (props) => {
    let props_reference = props
    const { myGroups, groupId, history } = props

    // Variables
    const [isLoading, setIsLoading] = useState(false); // Button is loading
    const [posts, setPosts] = useState([])
    const [nothingFound, setNothingFound] = useState(false);

    const requestQuery = async (keywords=null) => {
        /*
        Handle the request send to server to get back a list of Posts.
        In case there is no keyword, send back all the posts in the forum
        */
        let query = `group=${groupId}`
        if (keywords){
            query += `&search=${keywords}`
        }
        const list = await API.getCustom("forum_post", query);
        if (list.length === 0) {
            setPosts([]);
        }
        else if (list.length >= 1) {
            setPosts(list);
        }
    }


    const goForum = () => {
        history.push(`/forum/${groupId}`)
    }

    useEffect(()=>{
        requestQuery()
    },[])

    return <>
        <Paper className="container">
            <Typography variant={"h4"} style={{"align": "center"}}>
            <Link href="#" onClick={goForum}>
                Forum 
            </Link>
            </Typography>
            { posts.length > 0 ? 
            posts.map(post => <ForumPreviewBox groupId={groupId} key={post.id} post={post} groupId={groupId} />) 
            : <Typography variant={"h7"} style={{"align": "center"}}>Forum doesn't have any post yet! Create the first post! </Typography>
            }
            <NewPostButton groupId={groupId} />
        </Paper>
    </>
};

export default withRouter(ForumPreview);