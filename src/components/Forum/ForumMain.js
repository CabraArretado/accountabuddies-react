import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Button, Form, Input, FormGroup } from 'react-bootstrap';

// Mods
import API from "../../modules/data_module"
import SearchForum from "./SearchForum"
import ForumPreviewBox from "./ForumPreviewBox"
import NewPostButton from "./NewPostButton"


const ForumMain = (props) => {
    let props_reference = props
    const myGroups = props.myGroups
    const groupId = props.groupId

    // Variables
    const [isLoading, setIsLoading] = useState(false); // Button is loading
    const [nothingFound, setNothingFound] = useState(false); // trigger to the Nothing Found info

    const [keyWords, setKeyWords] = useState("")
    const [posts, setPosts] = useState([]) 

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
            setNothingFound(true);
            setPosts([]);
        }
        else if (list.length >= 1) {
            setPosts(list);
            setNothingFound(false);
        }
    }


    //Effect
    useEffect(()=>{
        requestQuery(keyWords)
    },[keyWords])


    return <>
        <section className="container">
            <h5 className="">Forum </h5>
            <NewPostButton groupId={groupId} />
            <SearchForum {...props_reference} requestQuery={requestQuery} setKeyWords={setKeyWords}/>

            { posts.map(post => <ForumPreviewBox key={post.id} post={post} groupId={groupId} />) }
        </section>
    </>
};

export default ForumMain;