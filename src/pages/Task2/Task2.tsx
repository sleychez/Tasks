import React, { FC, useRef, useState } from "react";
import * as ST from "./styled";
import Button from "../../components/Button/Button";

const Task2: FC = () => {
  const [time, setTime] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  const value = useRef<NodeJS.Timer | undefined>(undefined);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      value.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  };

  const stop = () => {
    clearInterval(value.current);
    setIsRunning(false);
  };

  const clear = () => {
    setTime(0);
  };

  return (
    <ST.Block>
      <ST.Time>
        {Math.floor(time / 60)}min {time % 60}sec
      </ST.Time>
      <Button onClick={start} text={"Start"} />
      <Button
        onClick={isRunning ? stop : clear}
        text={isRunning ? "Stop" : "Clear"}
      />
    </ST.Block>
  );
};

export default Task2;
