import styled from "styled-components";

export const FooterSpan = styled.span`
  color: ${(props) => props.color};
`;

export const ListContainer = styled.div`
  background-color: cadetblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0px 0px 30px 30px;
`;

export const Tab = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
`;

export const Tabs = styled.button`
  background-color: ${(props) =>
    props.value === true ? "rgb(230, 175, 107)" : "steelblue"};
  border: 0;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  border-radius: 10px 10px 0px 0px;
  border: solid 1px black;
  border-bottom: none;
  color: ${(props) => (props.value === true ? "black" : "white")};
  cursor: pointer;
`;

export const ListBlock = styled.div`
  width: 100%;
  background-color: whitesmoke;
  border-radius: 0px 0px 30px 30px;
`;

export const ListItemContainer = styled.div`
  border-top: solid 2px black;
  border-bottom: solid 2px black;
`;

export const ListFooter = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-around;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
      opacity: 0.5;
      cursor: pointer;
    }
  }
`;
