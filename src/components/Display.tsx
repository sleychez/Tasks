import React, {FC, useRef, useState} from 'react';
import Button from "./Button/Button";

import * as ST from './styled'

type DisplayProps = {
}

const Display: FC<DisplayProps> = () => {

    const [time, setTime ] = useState(0)

    const [isRunning, setIsRunning] = useState(false)

    const start = () => {
        if (!isRunning) {
            setIsRunning(true)
            value.current = setInterval(() => {
                setTime((prev) => prev + 1 )
            },1000)
        }
    }


    const stop = () => {
        clearInterval(value.current)
        setIsRunning(false)
    }

    const clear = () => {
        setTime(0)
    }

    const value = useRef<NodeJS.Timer | undefined>(undefined)

    return (
        <div>
            <ST.Time>{Math.floor(time/60)}min {time % 60}sec</ST.Time>
            <Button onClick={start} text={'Start'}/>
            <Button onClick={isRunning ? stop : clear} text={ isRunning ? 'Stop' : 'Clear' } />

        </div>
    );
};

export default Display;