import React, { FC, useState } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import * as ST from "./styled";

const Task6: FC = () => {
  const [firstInput, setFirstInput] = useState("");

  const [secondInput, setSecondInput] = useState("");

  const [spanIsActive, setSpanIsActive] = useState(false);

  const compare = () => {
    if (Number(firstInput) > Number(secondInput)) {
      return ">";
    }
    if (Number(firstInput) < Number(secondInput)) {
      return "<";
    }
    if (Number(firstInput) === Number(secondInput)) {
      return "=";
    }
  };

  const clear = () => {
    setFirstInput("");
    setSecondInput("");
  };

  const handleOnClick = () => {
    setSpanIsActive(!spanIsActive);
    if (spanIsActive) {
      clear();
    }
  };

  return (
    <ST.Block>
      <Input type={"number"} input={firstInput} setInput={setFirstInput} />
      <ST.Span>{spanIsActive ? compare() : ""}</ST.Span>
      <Input type={"number"} input={secondInput} setInput={setSecondInput} />
      <Button
        onClick={handleOnClick}
        text={spanIsActive ? "Сбросить" : "Сравнить"}
      ></Button>
    </ST.Block>
  );
};

export default Task6;
