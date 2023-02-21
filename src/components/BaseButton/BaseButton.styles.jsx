import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 120px;
  height: 40px;
  margin: 10px;
  color: ${(props) => props.fontColor || "black"};
  background-color: ${(props) => props.color};
  border: 1px black solid;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1.1rem;

  &:hover {
    background-color: skyblue;
  }
`;
