import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect, withRouter } from "react-router-dom";
import { Form, Input, FormGroup } from 'react-bootstrap';

import Button from '@material-ui/core/Button';

// Mods
import API from "../../modules/data_module"
import SearchGroup from "./SearchGroup"
import GroupBox from "./GroupBox"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';


const Groups = (props) => {
    let props_reference = props
    const { myGroups, getMyGroups, history } = props.myGroups

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

    const goCreate = () => {
        props.history.push("/create_group")
    }


    //Effect
    useEffect(() => {
        requestQuery(keyWords)
    }, [keyWords, myGroups])


    return <>
        <Grid item container align={"center"} xs={12}>
            <Paper className="container">
                <SearchGroup {...props_reference} groups={groups} requestQuery={requestQuery} setKeyWords={setKeyWords} />
                <Grid item xs={12} justify="center" spacing={2}>
                    {
                        groups.map(group => <React.Fragment key={group.id}>

                        <Grid align={"center"} alignContent={"center"} item xs={12}>
                            <GroupBox getMyGroups={props_reference.getMyGroups} group={group} is_my_gorup={false} />
                        </Grid>

                    </React.Fragment>)
                    }
                </Grid>
                <Grid item xs={12} justify="space-evenly" spacing={2}>
                    <Button variant="contained" onClick={goCreate}>Create Group</Button>
                </Grid>
            <Box mt={8} />
            </Paper>
        </Grid>
    </>
};

export default withRouter(Groups);