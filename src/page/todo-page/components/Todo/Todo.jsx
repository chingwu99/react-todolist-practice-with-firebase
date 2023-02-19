import List from "../List/List";
import Edit from "../Edit/Edit";
import { TodoContainer, Title, Main } from "./todo.styles";
const Todo = () => {
  return (
    <TodoContainer>
      <Title>
        <p>todo list</p>
      </Title>

      <Main>
        <Edit />
        <List />
      </Main>
    </TodoContainer>
  );
};

export default Todo;
