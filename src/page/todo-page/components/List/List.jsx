import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../../../context/todo.context";
import Item from "./components/Item";
import {
  ListContainer,
  Tab,
  Tabs,
  ListBlock,
  ListItemContainer,
  ListFooter,
} from "./list.styles";

const defaultTabsState = {
  all: true,
  undo: false,
  done: false,
};

const List = () => {
  const { data } = useContext(TodoContext);

  const [tabsState, setTabsState] = useState(defaultTabsState);
  const { all, undo, done } = tabsState;

  const tabsHandler = (e) => {
    let state = e.target.value;
    const name = e.target.name;
    console.log(state, name);
    setTabsState({
      all: false,
      undo: false,
      done: false,
      [name]: true,
    });
  };

  return (
    <ListContainer>
      <Tab>
        <Tabs value={all} onClick={tabsHandler} name="all">
          所有代辦
        </Tabs>
        <Tabs value={undo} onClick={tabsHandler} name="undo">
          未完成
        </Tabs>
        <Tabs value={done} onClick={tabsHandler} name="done">
          已完成
        </Tabs>
      </Tab>
      <ListBlock>
        <ListItemContainer>
          {data.map((i) => {
            const { text, id, state } = i;
            return <Item key={id} id={id} text={text} state={state} />;
          })}
        </ListItemContainer>
        <ListFooter>
          <span>未完成事項</span>
          <span>清除完成事項</span>
        </ListFooter>
      </ListBlock>
    </ListContainer>
  );
};

export default List;
