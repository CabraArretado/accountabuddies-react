
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

function pad(n) {
    return n<10 ? '0'+n : n;
}
function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

export const formatDate = (input) => {
    let stringDate = new Date(input);

    let date = stringDate.getDate();
    let month = stringDate.getMonth(); 
    let year = stringDate.getFullYear();

    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return ordinal_suffix_of(date) + " " + monthNames[month] + ", " + year;

}