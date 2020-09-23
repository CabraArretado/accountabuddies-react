
import { useHistory } from "react-router-dom"
import React from 'react';

// Button Go Back <
export const Comeback = () => {
    let history = useHistory();
    return (
        <>
            <button className="" onClick={() => history.goBack()}>⇦</button>
        </>
    );
};