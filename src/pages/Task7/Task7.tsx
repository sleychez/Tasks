import React, { FC, useState } from "react";
import TextBlock from "../../components/TextBlock/TextBlock";
import * as ST from "../Task7/styled";
import Button from "../../components/Button/Button";

const Task7: FC = () => {
  const [firstValue, setFirstValue] = useState("");
  const [operator, setOperator] = useState("");
  const [secondValue, setSecondValue] = useState("");

  const calculate = () => {
    if (operator === "+") {
      setFirstValue(String(Number(firstValue) + Number(secondValue)));
    }
    if (operator === "-") {
      setFirstValue(String(Number(firstValue) - Number(secondValue)));
    }
    if (operator === "/") {
      setFirstValue(String(Number(firstValue) / Number(secondValue)));
    }
    if (operator === "*") {
      setFirstValue(String(Number(firstValue) * Number(secondValue)));
    }
    setOperator("");
    setSecondValue("");
  };

  const clear = () => {
    setFirstValue("");
    setOperator("");
    setSecondValue("");
  };

  const updateDigits = (value: string) => {
    if (operator === "") {
      if (firstValue === "" && value === ".") {
        setFirstValue("");
      } else if (firstValue === "0") {
        if (value === ".") {
          setFirstValue((prevState) => prevState + value);
        } else {
          setFirstValue(value);
        }
      } else if (value === ".") {
        setFirstValue((prevState) =>
          prevState.includes(value) ? prevState : prevState + value
        );
      } else {
        setFirstValue((prevState) => prevState + value);
      }
    } else {
      if (secondValue === "" && value === ".") {
        setSecondValue("");
      } else if (secondValue === "0") {
        if (value === ".") {
          setSecondValue((prevState) => prevState + value);
        } else {
          setSecondValue(value);
        }
      } else if (value === ".") {
        setSecondValue((prevState) =>
          prevState.includes(value) ? prevState : prevState + value
        );
      } else {
        setSecondValue((prevState) => prevState + value);
      }
    }
  };

  const updateOperators = (value: string) => {
    if (firstValue === "") {
      setOperator("");
    } else {
      setOperator(value);
    }
  };

  return (
    <ST.Calculator>
      <TextBlock text={firstValue + operator + secondValue} />
      <ST.BoxWithOperators>
        <Button onClick={() => updateOperators("/")} text={"/"} />
        <Button onClick={() => updateOperators("*")} text={"x"} />
        <Button onClick={() => updateOperators("+")} text={"+"} />
        <Button onClick={() => updateOperators("-")} text={"-"} />
      </ST.BoxWithOperators>
      <ST.BoxWithNumbers>
        <ST.RowButtons>
          <Button onClick={() => updateDigits("9")} text={"9"} />
          <Button onClick={() => updateDigits("8")} text={"8"} />
          <Button onClick={() => updateDigits("7")} text={"7"} />
        </ST.RowButtons>
        <ST.RowButtons>
          <Button onClick={() => updateDigits("6")} text={"6"} />
          <Button onClick={() => updateDigits("5")} text={"5"} />
          <Button onClick={() => updateDigits("4")} text={"4"} />
        </ST.RowButtons>
        <ST.RowButtons>
          <Button onClick={() => updateDigits("3")} text={"3"} />
          <Button onClick={() => updateDigits("2")} text={"2"} />
          <Button onClick={() => updateDigits("1")} text={"1"} />
        </ST.RowButtons>
        <ST.RowButtonsBottom>
          <Button onClick={() => updateDigits("0")} text={"0"} />
          <Button onClick={() => updateDigits(".")} text={"."} />
        </ST.RowButtonsBottom>
      </ST.BoxWithNumbers>
      <ST.BottomBox>
        <Button onClick={calculate} text={"="} />
        <Button onClick={clear} text={"clear"} />
      </ST.BottomBox>
    </ST.Calculator>
  );
};

export default Task7;
