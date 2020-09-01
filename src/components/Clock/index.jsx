import React, { useState, useEffect } from 'react';

function formatDate(date) {
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);

    return `${hours}:${minutes}:${seconds}`;
}

function Clock() {

    const [timeString, setTimeString] = useState('');

    useEffect(() => {
        const clockInterval = setInterval(() => {
            const date = new Date();
            setTimeString(formatDate(date));
        }, 1000);

        return () => {
            console.log('Clock unmounting');
            clearInterval(clockInterval);
        };

    }, []);

    return (
        <p style={{ fontSize: '42px' }}>{timeString}</p>
    );
}

export default Clock;