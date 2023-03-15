import styled from "styled-components";

type OpacityProps = {
  opacity: number;
};

export const Block = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: gray;
  width: 100px;
  height: 200px;
  margin: 150px 0 0 200px;
  font-weight: bold;
  font-size: 20px;
  border-radius: 40px;
  gap: 10px;
`;

export const Red = styled.div<OpacityProps>`
  background: red;
  width: 50px;
  border-radius: 50%;
  height: 50px;
  opacity: ${(props) => props.opacity};
`;

export const Yellow = styled.div<OpacityProps>`
  background: yellow;
  width: 50px;
  border-radius: 50%;
  height: 50px;
  opacity: ${(props) => props.opacity};
`;

export const Green = styled.div<OpacityProps>`
  background: green;
  width: 50px;
  border-radius: 50%;
  height: 50px;
  opacity: ${(props) => props.opacity};
`;
