import styled from "styled-components";
import { Link } from "react-router-dom";

type StyledLinkProps = {
  isActive: boolean;
};

export const Header = styled.header`
  display: flex;
  gap: 20px;
  margin-left: 30px;
`;

export const StyledLink = styled(Link)<StyledLinkProps>`
  color: ${(props) => (props.isActive ? "red" : "black")};
  text-decoration: none;
  display: flex;
  font-weight: bold;
`;
