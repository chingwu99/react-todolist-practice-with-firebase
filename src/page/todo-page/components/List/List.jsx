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
  const { data } = useContext(TodoContext);
  return (
    <ListContainer>
      <Tab>
        <Tabs>
          <p>所有代辦</p>
        </Tabs>
        <Tabs>
          <p>未完成</p>
        </Tabs>
        <Tabs>
          <p>已完成</p>
        </Tabs>
      </Tab>
      <ListBlock>
        <ListItemContainer>
          {data.map((i) => {
            const { text, id } = i;
            return <Item key={id} id={id} text={text} />;
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
