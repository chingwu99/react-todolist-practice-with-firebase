import { useContext } from "react";
import { TodoContext } from "../../../../../context/todo.context";
import { ItemContainer } from "./item.styles";

const Item = ({ text, id }) => {
  const { setData } = useContext(TodoContext);

  const removeItem = () => {
    setData((pre) => {
      return pre.filter((i) => i.id !== id);
    });
  };

  return (
    <ItemContainer>
      <p>{text}</p>
      <button onClick={removeItem}>刪除</button>
    </ItemContainer>
  );
};

export default Item;
