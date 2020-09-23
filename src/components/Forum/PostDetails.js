import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Button, Form, Input, FormGroup } from 'reactstrap';

import API from "../../modules/data_module"
import CommentaryBox from "./CommentaryBox"
import NewCommentaryButton from "./NewCommentaryButton"

// moods

const PostDetails = (props) => {
    let groupId = props.groupId
    let postId = props.postId
    const [ commentaries, setCommentaries ] = useState([])
    const [ post, setPost ] = useState({"title":"", "created_by": "", "created_at": "", "description":""})

    const getPost = async () => {
        const query = await API.get("forum_post", postId)
        setPost(query)
    }

    const getCommentaries = async () => {
        const list = await API.getCustom("forum_commentary", `post=${postId}`);
        setCommentaries(list)
        console.log()
    }

    useEffect(()=>{
        getPost()
        getCommentaries(commentaries)
    },[])

    //TODO: formate the date

    return <>
        <div className="container">
            <h1>{post.title}</h1>
            <h5>Posted by: {post.created_by.first_name} in {post.created_at}</h5>
            <h4>{post.description}</h4>
        </div>
        <div>
            { commentaries.map(commentary => <CommentaryBox commentary={commentary} key={commentary.id} />) }
        </div>
        <NewCommentaryButton postId={postId} groupId={groupId} getCommentaries={getCommentaries} />
    </>
};

export default PostDetails;