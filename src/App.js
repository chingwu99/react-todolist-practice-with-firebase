import { Routes, Route } from "react-router-dom";

import Nav from "./components/nav/Nav";
import Home from "./page/home/Home";
import TodoPage from "./page/todo-page/Todo-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />}></Route>
        <Route path="todo" element={<TodoPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
