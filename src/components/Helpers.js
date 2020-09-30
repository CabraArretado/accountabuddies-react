
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

export const formatDate = (date) => {
    let stringDate = new Date(date);

    let date = stringDate.getDate();
    let month = stringDate.getMonth(); 
    let year = stringDate.getFullYear();

    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let ordinalDate = ordinal_suffix_of(date) + " " + monthNames[month] + ", " + year;

    return daysOfWeek[stringDate.getDay()] + ", " + ordinalDate

}