import React, { FC, useEffect, useRef, useState } from "react";

import * as ST from "./styled";

const Task5: FC = () => {
  const [color, setColor] = useState("red");

  const value = useRef<string>();

  useEffect(() => {
    if (color === "yellow") {
      setTimeout(() => {
        setColor(value.current === "red" ? "green" : "red");
      }, 2000);
    }

    if (color === "red") {
      value.current = color;
      setTimeout(() => {
        setColor("yellow");
      }, 5000);
    }
    if (color === "green") {
      value.current = color;
      setTimeout(() => {
        setColor("yellow");
      }, 5000);
    }
  }, [color]);

  return (
    <ST.Block>
      <ST.Red opacity={color === "red" ? 1 : 0.3} />
      <ST.Yellow opacity={color === "yellow" ? 1 : 0.3} />
      <ST.Green opacity={color === "green" ? 1 : 0.3} />
    </ST.Block>
  );
};

export default Task5;
