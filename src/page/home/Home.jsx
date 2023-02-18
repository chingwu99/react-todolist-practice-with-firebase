import SignInForm from "./components/Sign-in-form/Sign-in-form";
import SignUpForm from "./components/Sign-up-form/Sign-up-form";

import { Form, Title, HomeContainer } from "./home.styles";
const Home = () => {
  return (
    <HomeContainer>
      <Title> Home</Title>
      <Form>
        <SignInForm></SignInForm>
        <SignUpForm></SignUpForm>
      </Form>
    </HomeContainer>
  );
};

export default Home;
