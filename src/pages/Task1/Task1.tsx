import React, { FC, useState } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import * as ST from "./styled";
import TextBlock from "../../components/TextBlock/TextBlock";

const Task1: FC = () => {
  const [input, setInput] = useState("");

  const [text, setText] = useState("");

  const showInput = () => {
    setText(`${input} ${text}`);
    setInput("");
  };

  const clear = () => {
    setText("");
  };

  return (
    <ST.Box>
      <ST.InputButton>
        <Input input={input} setInput={setInput} />
        <Button onClick={showInput} text={"Enter"} />
        <Button onClick={clear} text={"Clear"} />
      </ST.InputButton>
      <TextBlock text={text} />
    </ST.Box>
  );
};

export default Task1;
