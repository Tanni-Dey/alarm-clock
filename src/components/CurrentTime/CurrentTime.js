import React, { useEffect, useState } from 'react';
import './CurrentTime.css';

const CurrentTime = () => {
    const [hours, setHours] = useState('');
    const [m, setM] = useState('');
    const [s, setS] = useState('');
    const [a, setA] = useState('');
    useEffect(() => {
        setInterval(() => {
            const today = new Date();
            let hour = today.getHours();
            let ampm = '';
            if (hour >= 12) {
                hour = hour - 12;
                ampm = 'PM';
            } else {
                ampm = 'AM';
            }
            setHours(hour);
            setM(today.getMinutes());
            setS(today.getSeconds());
            setA(ampm);
        }, 1000);
    }, [])
    return (
        <div>
            <div className='clock'>
                <div>{hours} : </div>
                <div>{m} : </div>
                <div>{s}</div>
                <div>{a}</div>
            </div>
        </div>
    );
};

export default CurrentTime;