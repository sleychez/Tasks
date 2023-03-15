import React, { FC, useRef, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

const DisplayTimer: FC = () => {
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
    setTimeLeft(5);
    setIsRunning(false);
    clearInterval(value.current);
  };

  const handleChangeInput = (value: string) => {
    Number(value);
    setTimeLeft(Number(value));
  };

  return (
    <div>
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
    </div>
  );
};

export default DisplayTimer;
