import { ButtonContainer } from "./BaseButton.styles";

const BaseButton = ({ text, type, onClick, color, fontColor }) => {
  return (
    <ButtonContainer
      type={type}
      onClick={onClick}
      color={color}
      fontColor={fontColor}
    >
      {text}
    </ButtonContainer>
  );
};

export default BaseButton;
