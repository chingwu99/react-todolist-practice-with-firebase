import FormInput from "../Form-input/Form-input";
import { SignInFormContainer } from "./sign-in-form.styles";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../../../firebase/firebase.utils";
import { useState } from "react";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email ");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInFormContainer>
      <h2>登入</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">登入</button>
        <button type="button" onClick={signInWithGoogle}>
          gooogle登入
        </button>
      </form>
    </SignInFormContainer>
  );
};

export default SignInForm;
