import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Button, Form, Input, FormGroup } from 'react-bootstrap';

// Mods
import API from "../../modules/data_module"
import GroupBox from "./GroupBox"


const MyGroups = (props) => {
    const getMyGroups = props.getMyGroups
    const myGroups = props.myGroups

    useEffect(()=>{getMyGroups()}, [])

    return <>
        <section className="container">
            <h5 className="">Groups</h5>
                { myGroups.map(group => <GroupBox is_my_group={true} key={group.id} group={group}/>) }
        </section>
        <Link to="/create_group">Create Group</Link>
    </>
};

export default MyGroups;