import styled from "styled-components";

export const EditContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  background-color: white;
  border: none;
  border-radius: 10px;
  width: 500px;
  height: 50px;
  margin: 20px;
  font-size: 1.5rem;
  padding-left: 10px;
`;

export const Button = styled.button`
  border: none;
  height: 50px;
  width: 50px;
  margin-right: 20px;
  border-radius: 10px;
  background-color: rgb(228, 159, 75);
  font-size: 1.2rem;

  &:hover {
    background-color: white;
    cursor: pointer;
  }
`;
