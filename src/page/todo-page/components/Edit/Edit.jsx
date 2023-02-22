import { useContext } from "react";
import { TodoContext } from "../../../../context/todo.context";
import { EditContainer, Input, Button } from "./edit.styles";
import Swal from "sweetalert2";
import { v4 } from "uuid";

const Edit = () => {
  const { todoText, setTodoText, setData } = useContext(TodoContext);
  const inputHandler = (e) => {
    setTodoText(e.target.value);
  };

  const addTodo = () => {
    if (todoText.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Input What You Need To Do! ",
      });
    } else {
      setData((pre) => {
        return [{ text: todoText, id: v4(), state: false }, ...pre];
      });
    }
    setTodoText("");
  };

  console.log(todoText);

  return (
    <EditContainer>
      <Input
        placeholder="What you need to do......"
        onChange={inputHandler}
        value={todoText}
      />
      <Button onClick={addTodo}>Add</Button>
    </EditContainer>
  );
};

export default Edit;
