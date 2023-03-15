import React, { FC, useState } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import * as ST from "./styled";

const Task6: FC = () => {
  const [firstInput, setFirstInput] = useState("");

  const [secondInput, setSecondInput] = useState("");

  const [sign, setSign] = useState("");

  const compare = () => {
    if (Number(firstInput) > Number(secondInput)) {
      setSign(">");
    }
    if (Number(firstInput) < Number(secondInput)) {
      setSign("<");
    }
    if (Number(firstInput) === Number(secondInput)) {
      setSign("=");
    }
  };

  const clear = () => {
    setSign("");
    setFirstInput("");
    setSecondInput("");
  };

  const handleOnClick = () => {
    compare();
    if (sign) {
      clear();
    }
  };

  return (
    <ST.Block>
      <Input type={"number"} input={firstInput} setInput={setFirstInput} />
      <ST.Span>{sign}</ST.Span>
      <Input type={"number"} input={secondInput} setInput={setSecondInput} />
      <Button
        onClick={handleOnClick}
        text={sign ? "Сбросить" : "Сравнить"}
      ></Button>
    </ST.Block>
  );
};

export default Task6;
