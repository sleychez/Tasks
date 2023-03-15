import React, { FC, useRef, useState } from "react";

import * as ST from "./styled";

const Task4: FC = () => {
  const [text, setText] = useState("");

  const [color, setColor] = useState("red");

  const value = useRef<string>();

  const changeColor = () => {
    if (color === "yellow") {
      setColor(value.current === "red" ? "green" : "red");
    }
    value.current = color;
    if (color === "green") {
      setColor("yellow");
    }
    if (color === "red") {
      setColor("yellow");
    }
  };

  const hover = () => {
    setText("hover");
  };

  const leave = () => {
    setText("out");
  };

  const down = () => {
    setText("click");
  };

  return (
    <ST.Block
      onPointerEnter={hover}
      onClick={changeColor}
      color={color}
      onPointerLeave={leave}
      onMouseDown={down}
      onMouseUp={hover}
    >
      {text}
    </ST.Block>
  );
};

export default Task4;
