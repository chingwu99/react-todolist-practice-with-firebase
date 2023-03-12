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
  undoNum: 0,
  setUndoNum: () => null,
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
  const [undoNum, setUndoNum] = useState(0);

  useEffect(() => {
    const { all, undo, done } = tabsState;
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

    setUndoNum(data.filter((i) => i.state === false).length);
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
    undoNum,
    setUndoNum,
  };
  // console.log(data);
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
