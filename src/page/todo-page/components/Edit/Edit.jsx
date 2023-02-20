import { useContext } from "react";
import { TodoContext } from "../../../../context/todo.context";
import { EditContainer, Input, Button } from "./edit.styles";

import { v4 } from "uuid";

const Edit = () => {
  const { todoText, setTodoText, setData } = useContext(TodoContext);
  const inputHandler = (e) => {
    setTodoText(e.target.value);
  };

  const addTodo = () => {
    setData((pre) => {
      return [{ text: todoText, id: v4(), state: false }, ...pre];
    });
  };

  console.log(todoText);

  return (
    <EditContainer>
      <Input
        placeholder="請輸入代辦"
        onChange={inputHandler}
        value={todoText}
      />
      <Button onClick={addTodo}>新增</Button>
    </EditContainer>
  );
};

export default Edit;
