import React, { FC } from "react";

import * as ST from "./styled";

type InputProps = {
  input: string | number;
  setInput: (value: string) => void;
  disabled?: boolean;
};

const Input: FC<InputProps> = ({ input, setInput, disabled }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  return (
    <ST.Input
      type="text"
      value={input}
      onChange={handleChange}
      disabled={disabled}
    />
  );
};

export default Input;
