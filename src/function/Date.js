import React, {useEffect} from 'react'

const Date = () => {
    const getCurrentDate = () => {
        const date = new Date();
        const hour = date.getHours();
        const minutes = date.getMinutes();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${hour}:${minutes} | ${day}/${month}/${year}`;
    }
    const [dateNow, setDateNow] = React.useState(getCurrentDate());

    useEffect (() => {
        setInterval(() => {
            setDateNow(getCurrentDate());
        }, 1000);
    }, [])
    getCurrentDate();
    return dateNow
}

export default function Date() {
    return dateNow;
}