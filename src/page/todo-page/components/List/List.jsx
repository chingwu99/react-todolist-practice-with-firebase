import { useContext } from "react";
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

const List = () => {
  const { data, setData, renderData, tabsState, setTabsState } =
    useContext(TodoContext);
  const { all, undo, done } = tabsState;

  const tabsHandler = (e) => {
    let clickState = e.target.value;
    let name = e.target.name;
    console.log(clickState, name);
    setTabsState({
      all: false,
      undo: false,
      done: false,
      [name]: true,
    });
  };

  const clearDoneHandler = () => {
    setData(data.filter((i) => i.state === false));

    console.log("new", data);
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
          {renderData.map((i) => {
            const { text, id, state } = i;
            return <Item key={id} id={id} text={text} state={state} />;
          })}
        </ListItemContainer>
        <ListFooter>
          <span>{renderData.length} Undo</span>
          <span onClick={clearDoneHandler}>Clear Done</span>
        </ListFooter>
      </ListBlock>
    </ListContainer>
  );
};

export default List;
