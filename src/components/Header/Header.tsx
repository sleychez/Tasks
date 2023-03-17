import React, { FC } from "react";
import * as ST from "./styled";
import { useLocation } from "react-router-dom";

const Header: FC = () => {
  const location = useLocation();

  return (
    <ST.Header>
      <ST.StyledLink isActive={location.pathname === "/task1"} to="/task1">
        Task 1
      </ST.StyledLink>
      <ST.StyledLink isActive={location.pathname === "/task2"} to="/task2">
        Task 2
      </ST.StyledLink>
      <ST.StyledLink isActive={location.pathname === "/task3"} to="/task3">
        Task 3
      </ST.StyledLink>
      <ST.StyledLink isActive={location.pathname === "/task4"} to="/task4">
        Task 4
      </ST.StyledLink>
      <ST.StyledLink isActive={location.pathname === "/task5"} to="/task5">
        Task 5
      </ST.StyledLink>
      <ST.StyledLink isActive={location.pathname === "/task6"} to="/task6">
        Task 6
      </ST.StyledLink>
      <ST.StyledLink isActive={location.pathname === "/task7"} to="/task7">
        Task 7
      </ST.StyledLink>
    </ST.Header>
  );
};

export default Header;
