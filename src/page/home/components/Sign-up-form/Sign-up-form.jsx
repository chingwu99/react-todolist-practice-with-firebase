import { useState } from "react";
import FormInput from "../Form-input/Form-input";
import { SignUpFormContainer } from "./Sign-up-form.styles";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../../../firebase/firebase.utils";

const defaultformFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultformFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultformFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <SignUpFormContainer>
      <h2>註冊帳號</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="name"
          type="text"
          onChange={handleChange}
          value={displayName}
          name="displayName"
        />
        <FormInput
          label="e-mail"
          type="e-mail"
          onChange={handleChange}
          value={email}
          name="email"
        />
        <FormInput
          label="password"
          type="password"
          onChange={handleChange}
          value={password}
          name="password"
        />
        <FormInput
          label="confirm-password"
          type="password"
          onChange={handleChange}
          value={confirmPassword}
          name="confirmPassword"
        />
        <button type="submit">註冊</button>
      </form>
    </SignUpFormContainer>
  );
};

export default SignUpForm;
