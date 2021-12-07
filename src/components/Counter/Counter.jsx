import { useState } from 'react';
import './counter.scss'


const СounterColendar = () => {
    const [counts, setcount] = useState(0);
    function decrementCount() {
        setcount((xcount) => xcount - 1);
    }


    function incrementCount() {
        setcount((xcount) => xcount + 1);
    }
    return (
        <div className="block">
            <h1>COUNTER</h1>
            <div className="counter">{counts}</div>
            <button className="loverCounter" onClick={decrementCount}>lover Count</button>
            <button className="addCounter" onClick={incrementCount}>Add Count</button>
        </div>
    );
}

export default СounterColendar;