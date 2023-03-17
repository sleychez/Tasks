import React, { FC } from "react";

import * as ST from "./styled";

type ButtonProps = {
  onClick?: () => void;
  text?: string | number;
};

const Button: FC<ButtonProps> = ({ onClick, text }) => {
  return <ST.Button onClick={onClick}>{text}</ST.Button>;
};

export default Button;
