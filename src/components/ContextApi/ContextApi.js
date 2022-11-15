import React, { createContext, useEffect, useState } from 'react';

export const AlarmContext = createContext();

const ContextApi = () => {
    const today = new Date();

    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');

    useEffect(() => {
        setInterval(() => { }, 1000);
    }, [])

    return (
        <div>

        </div>
    );
};

export default ContextApi;