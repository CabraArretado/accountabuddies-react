import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from "react-router-dom";

import API from "../../modules/data_module"
import { formatDate } from "../Helpers"

// moods

const PostBox = (props) => {

    let post = props.post

    console.log(post)


    return <>
        <div className="container">
            <h1>{post.title}</h1>
            <h4>{post.description}</h4>
        </div>
    </>
};

export default PostBox;