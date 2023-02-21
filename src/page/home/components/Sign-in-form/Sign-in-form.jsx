import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignInFormContainer } from "./sign-in-form.styles";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../../../firebase/firebase.utils";

import Swal from "sweetalert2";
import FormInput from "../Form-input/Form-input";
import BaseButton from "../../../../components/BaseButton/BaseButton";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();

    navigate("/todo");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      resetFormFields();

      navigate("/todo");
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          Swal.fire({
            icon: "error",
            title: "incorrect password for email",
          });

          break;
        case "auth/user-not-found":
          Swal.fire({
            icon: "error",
            title: "no user associated with this email ",
          });

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
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
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
        <BaseButton text="SIGN-IN" type="submit" color="tan"></BaseButton>
        <BaseButton
          text=" By Gooogle"
          type="button"
          onClick={signInWithGoogle}
          color="black"
          fontColor="white"
        ></BaseButton>
      </form>
    </SignInFormContainer>
  );
};

export default SignInForm;
