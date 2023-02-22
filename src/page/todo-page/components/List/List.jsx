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
  const { data, setData, renderData, tabsState, setTabsState, undoNum } =
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
          ALL
        </Tabs>
        <Tabs value={undo} onClick={tabsHandler} name="undo">
          UNDO
        </Tabs>
        <Tabs value={done} onClick={tabsHandler} name="done">
          DONE
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
          <span>{undoNum} Undo</span>
          <span onClick={clearDoneHandler}>Clear Done</span>
        </ListFooter>
      </ListBlock>
    </ListContainer>
  );
};

export default List;
