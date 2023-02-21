import { useContext, useState } from "react";
import { BsTrashFill } from "react-icons/bs";
import { TodoContext } from "../../../../../context/todo.context";
import {
  ItemContainer,
  Input,
  Label,
  LabelContainer,
  DeleteButton,
} from "./item.styles";

const Item = ({ text, id, state }) => {
  const { setData, data } = useContext(TodoContext);
  const [checkState, setCheckState] = useState(state);

  const inputChangeHandler = (e) => {
    setCheckState(!state);

    let targetId = e.target.name;

    data.forEach((i) => {
      if (i.id === targetId) {
        i.state = !i.state;
      }
    });

    setData(data);
  };

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
      <DeleteButton onClick={removeItem}>
        <BsTrashFill />
      </DeleteButton>
    </ItemContainer>
  );
};

export default Item;
