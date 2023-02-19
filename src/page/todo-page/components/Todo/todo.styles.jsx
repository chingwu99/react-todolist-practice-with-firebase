import styled from "styled-components";

export const TodoContainer = styled.div`
  background-color: cadetblue;
  height: 500px;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
`;

export const Title = styled.div`
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 100%;

  p {
    font-size: 2rem;
  }
`;

export const Main = styled.div`
  width: 100%;
`;
