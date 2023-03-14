import React, {FC, useRef, useState} from 'react';
import * as ST from "../Display/styled";
import Button from "../Button/Button";

const DisplayTimer:FC = () => {

    const [timeLeft, setTimeLeft] = useState(5);
    const [isRunning, setIsRunning] = useState(false)

    const value = useRef<NodeJS.Timer | undefined>(undefined)

    const start = () => {
        if (!isRunning) {
            setIsRunning(true)
            value.current = setInterval(() => {
                setTimeLeft((prev: number) => prev <= 0 ? 0 : prev - 1
                )
            },1000)
        }
    }

    const stop = () => {
        clearInterval(value.current)
        setIsRunning(false)
    }

    const reset = () => {
        setTimeLeft(5)
        setIsRunning(false)
        clearInterval(value.current)
    }


    return (
        <div>
            <ST.Time>{Math.floor(timeLeft/60)}min {timeLeft % 60}sec</ST.Time>
            <Button onClick={start} text={'Start'}/>
            <Button onClick={isRunning && timeLeft > 0 ? stop : reset } text={ isRunning && timeLeft > 0 ? 'Stop' : 'Reset' } />
        </div>
    );
};

export default DisplayTimer;