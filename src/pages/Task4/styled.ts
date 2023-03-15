import styled from "styled-components";

export const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.color};
  width: 250px;
  height: 250px;
  margin: 50px 0 0 50px;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
