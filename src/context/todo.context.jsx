import { createContext, useState, useEffect } from "react";

export const TodoContext = createContext({
  data: [],
  setData: () => null,
  todoText: "",
  setTodoText: () => null,
  renderData: "",
  setRenderData: () => null,
  tabsState: {
    all: true,
    undo: false,
    done: false,
  },
  setTabsState: () => null,
});

export const TodoProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [todoText, setTodoText] = useState("");
  const [renderData, setRenderData] = useState([]);
  const [tabsState, setTabsState] = useState({
    all: true,
    undo: false,
    done: false,
  });

  const { all, undo, done } = tabsState;

  useEffect(() => {
    let upDateData = [];
    if (all === true) {
      setRenderData(data);
    } else if (undo === true) {
      upDateData = data.filter((i) => i.state === false);
      setRenderData(upDateData);
    } else if (done === true) {
      upDateData = data.filter((i) => i.state === true);
      setRenderData(upDateData);
    }
  }, [tabsState, data]);

  const value = {
    data,
    setData,
    todoText,
    setTodoText,
    renderData,
    setRenderData,
    tabsState,
    setTabsState,
  };
  console.log(data);
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
