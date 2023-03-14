import styled from "styled-components";
import {Link} from "react-router-dom";


export const App = styled.div`
  display: flex;
  flex-direction: column;
  
`
export const Header = styled.header`
  display: flex;
  gap: 20px;
  margin-left: 30px
`

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  display: flex;
  font-weight: bold;

  &:hover {
    color: red;
  }
`