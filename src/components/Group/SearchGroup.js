import React, { useState, useEffect, useRef } from 'react';
import {  Redirect } from "react-router-dom";
import { Form, Input, FormGroup } from 'react-bootstrap';

import { formatDate } from "../Helpers"

import API from "../../modules/data_module"

import List from '@material-ui/core/List';


import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';


// moods

const SearchGroup = React.memo(props => {
    const getMyGroups = props.getMyGroups

    // Variables
    const [isLoading, setIsLoading] = useState(false); // Button is loading

    const searchInput = useRef()

    // Handle the submit of event code search > If the key word changes the useEffect gonna trigger in the parent component
    const search = async (e) => {
        e.preventDefault();
        props.setKeyWords(searchInput.current.value)
        setIsLoading(false);
    }
    


    return <>
        <Paper className="container">
        <Typography variant={"h2"} color="textSecondary" gutterBottom>
                    Search Groups
            </Typography>
            <hr />
            <Form onSubmit={search}>
                <FormGroup className="form-row p-4">
                    <input className="col my-2" type="text" ref={searchInput} name="search-input" id="search-input" placeholder="Search Group" />
                    <Button disabled={isLoading} className="col" type="submit">Search</Button>
                </FormGroup>
            </Form>
        </Paper>
    </>
});

export default SearchGroup;