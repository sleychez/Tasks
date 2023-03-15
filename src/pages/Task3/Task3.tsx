import React, { FC, useRef, useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import * as ST from "./styled";

const Task3: FC = () => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const value = useRef<NodeJS.Timer | undefined>(undefined);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      value.current = setInterval(() => {
        setTimeLeft((prev: number) => (prev <= 0 ? 0 : prev - 1));
      }, 1000);
    }
  };

  const stop = () => {
    clearInterval(value.current);
    setIsRunning(false);
  };

  const reset = () => {
    setTimeLeft(0);
    setIsRunning(false);
    clearInterval(value.current);
  };

  const handleChangeInput = (value: string) => {
    Number(value);
    setTimeLeft(Number(value));
  };

  return (
    <ST.Block>
      <Input
        input={timeLeft}
        setInput={handleChangeInput}
        disabled={isRunning}
      />
      <Button onClick={start} text={"Start"} />
      <Button
        onClick={isRunning && timeLeft > 0 ? stop : reset}
        text={isRunning && timeLeft > 0 ? "Stop" : "Reset"}
      />
    </ST.Block>
  );
};

export default Task3;
