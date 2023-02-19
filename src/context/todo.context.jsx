import { createContext, useState } from "react";

export const TodoContext = createContext({
  data: [],
  setData: () => null,
  todoText: "",
  setTodoText: () => null,
});

export const TodoProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [todoText, setTodoText] = useState("");
  const value = { data, setData, todoText, setTodoText };
  console.log(data);
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
