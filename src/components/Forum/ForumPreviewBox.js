import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Button, Form, Input, FormGroup } from 'react-bootstrap';

import API from "../../modules/data_module"

// moods

const ForumPreviewBox = (props) => {
    let post = props.post
    console.log(props.groupId)
    let groupId = props.groupId

    return <>
        <div className="container">
            <Link to={`/forum/${groupId}/${post.id}`}><h1>{post.title}</h1></Link>
            <h4>{post.description}</h4>
        </div>
    </>
};

export default ForumPreviewBox;