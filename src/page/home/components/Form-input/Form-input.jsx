import { FormInputContainer } from "./Form-input.styles";

const FormInput = ({ label, type, onChange, value, name }) => {
  return (
    <FormInputContainer>
      <label>{label}</label>
      <input
        type={type}
        onChange={onChange}
        value={value}
        name={name}
        required
      />
    </FormInputContainer>
  );
};

export default FormInput;
