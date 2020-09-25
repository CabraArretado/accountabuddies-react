import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Button, Form, Input, FormGroup } from 'react-bootstrap';

// Mods
import API from "../../modules/data_module"
import SearchGroup from "./SearchGroup"
import GroupBox from "./GroupBox"


const Groups = (props) => {
    let props_reference = props
    const myGroups = props.myGroups
    const getMyGroups = props.getMyGroups

    // Variables
    const [isLoading, setIsLoading] = useState(false); // Button is loading
    const [nothingFound, setNothingFound] = useState(false); // trigger to the Nothing Found info
    const [keyWords, setKeyWords] = useState("")
    const [groups, setGroups] = useState([])

    // Handle the GET requistion with the keyword
    const requestQuery = async (keywords) => {
        const list = await API.getCustom("group", `search=${keywords}`);
        if (list.length === 0) {
            setNothingFound(true);
            setGroups([]);
        }
        else if (list.length >= 1) {
            setGroups(list);
            setNothingFound(false);
        }
    }


    //Effect
    useEffect(()=>{
        requestQuery(keyWords)
    },[keyWords, myGroups])


    return <>
        <section className="container">
            <h5 className="">Groups</h5>
            <SearchGroup {...props_reference} groups={groups} requestQuery={requestQuery} setKeyWords={setKeyWords}/>

            { groups.map(group => <GroupBox key={group.id} getMyGroups={props_reference.getMyGroups} group={group}  is_my_gorup={false}/>) }

        </section>
        <Link to="/create_group">Create Group</Link>
    </>
};

export default Groups;