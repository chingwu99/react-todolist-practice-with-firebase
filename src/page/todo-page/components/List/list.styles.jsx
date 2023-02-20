import styled from "styled-components";

export const ListContainer = styled.div`
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;

export const Tab = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
`;

export const Tabs = styled.button`
  background-color: ${(props) => (props.value == true ? "yellow" : "green")};
  border: 0;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ListBlock = styled.div`
  width: 100%;
`;

export const ListItemContainer = styled.div`
  border-top: solid 2px black;
  border-bottom: solid 2px black;
`;

export const ListFooter = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
`;
