import styled from "styled-components";

export const Input = styled.input`
width: 100%;
height:0px;
margin: 0px 10px;

::before {
    content: "未完成";
    color: red;
}

::after {
    content: "${(props) => props.text}";
    color: black;
    margin-left:10px;
    font-size: 1.5rem;
}

:checked {

::before {
    content: "已完成";
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
  justify-content: space-between;
  height: 50px;
  width: 100%;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid black;
  height: 80px;
`;
