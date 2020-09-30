import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { Form, Input, FormGroup } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import API from "../../modules/data_module"

// moods

const SearchForum = React.memo(props => {

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
        <Grid container spacing={0}>
        <Form onSubmit={search}>
            <FormGroup className="form-row p-4">
                    <Grid item xs={8}>
                        <TextField id="outlined-basic" label="Search" variant="outlined" inputRef={searchInput} />
                    </Grid>
                    <Grid item xs={4}>
                        <Button color={"primary"} disabled={isLoading} className="col" type="submit">Search Forum Posts</Button>
                    </Grid>
            </FormGroup>
        </Form>
        </Grid>
    </>
});

export default SearchForum;