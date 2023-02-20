import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../../../../context/todo.context";
import { ItemContainer, Input, Label, LabelContainer } from "./item.styles";

const Item = ({ text, id, state }) => {
  const { setData } = useContext(TodoContext);
  const [checkState, setCheckState] = useState(state);

  const inputChangeHandler = (e) => {
    setCheckState(!state);
  };

  useEffect(() => {
    state = checkState;
    console.log(state);
  }, [inputChangeHandler]);

  const removeItem = () => {
    setData((pre) => {
      return pre.filter((i) => i.id !== id);
    });
  };

  return (
    <ItemContainer>
      <LabelContainer>
        <Label htmlFor={id}>
          <Input
            type="checkbox"
            text={text}
            name={id}
            id={id}
            onChange={inputChangeHandler}
            value={checkState}
          />
        </Label>
      </LabelContainer>
      <div>
        <button onClick={removeItem}>刪除</button>
      </div>
    </ItemContainer>
  );
};

export default Item;
