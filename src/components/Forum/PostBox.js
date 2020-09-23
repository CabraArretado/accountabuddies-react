import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Button, Form, Input, FormGroup } from 'react-bootstrap';

import API from "../../modules/data_module"

// moods

const PostBox = (props) => {

    let post = props.post

    //TODO: formate the date


    return <>
        <div className="container">
            <h1>{post.title}</h1>
            <h4>{post.description}</h4>
        </div>
    </>
};

export default PostBox;