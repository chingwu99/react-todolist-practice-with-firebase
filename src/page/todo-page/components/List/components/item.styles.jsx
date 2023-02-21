import styled from "styled-components";

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  height: 50px;
  width: 50px;
  margin-right: 20px;
  border-radius: 10px;
  background-color: darkred;
  font-size: 1.5rem;
  color: white;

  &:hover {
    background-color: pink;
    color: black;
    cursor: pointer;
  }
`;

export const Input = styled.input`
width: 100%;
height:0px;
margin: 0px 10px;


::before {
    content: "Undo";
    color: red;
    font-size: 1.1rem;
}

::after {
    content: "${(props) => props.text}";
    color: black;
    margin-left:20px;
    font-size: 1.5rem;
}

:checked {

::before {
    content: "Done";
    color: green;
    }

::after {
    text-decoration:line-through 3px;
    opacity: 0.5;
}


`;

export const Label = styled.label`
  width: 100%;
`;

export const LabelContainer = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid black;
  height: 80px;
`;
