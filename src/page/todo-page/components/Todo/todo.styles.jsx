import styled from "styled-components";

export const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 100%;

  p {
    font-size: 5rem;
  }
`;

export const Main = styled.div`
  width: 100%;
  background-color: cadetblue;
  border-radius: 30px;
  position: relative;
  z-index: 3;
  box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.4);
`;
