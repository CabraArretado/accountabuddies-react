import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Button, Form, Input, FormGroup } from 'react-bootstrap';

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
            <Form onSubmit={search}>
                <FormGroup className="form-row p-4">
                    <input className="col my-2" type="text" ref={searchInput} name="search-input" id="search-input" placeholder="Search Group" />
                    <Button disabled={isLoading} className="col" type="submit">Search Forum Posts</Button>
                </FormGroup>
            </Form>
    </>
});

export default SearchForum;