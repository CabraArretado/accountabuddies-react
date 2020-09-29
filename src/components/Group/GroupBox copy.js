import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Button, Form, Input, FormGroup } from 'react-bootstrap';

import API from "../../modules/data_module"
import JoinGroupButton from "./JoinGroupButton"

// moods

const GroupBox = (props) => {
    let group = props.group
    let my_link = props.my_link

    const getMyGroups = props.getMyGroups

    

    return <>
        <div className="container">
        { my_link ? <>
            <Link to={`groups/${group.id}`}><h1>{group.title}</h1></Link>
        </>
        :
        <h1>{group.title}</h1>
        }
            <h4>{group.description}</h4>
            {/* <h3>{group.population}/{group.size}</h3> */}
            
            { props.is_my_group ? null : <JoinGroupButton getMyGroups={getMyGroups} groupId={group.id}/>  }
        </div>
    </>
};

export default GroupBox;