import styled from "styled-components";

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;

  label {
    font-size: 1.2rem;
  }

  input {
    border: none;
    border-bottom: 1px solid rgb(142, 140, 140);
    height: 40px;
    font-size: 2rem;
  }
`;
