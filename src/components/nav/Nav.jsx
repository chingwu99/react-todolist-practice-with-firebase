import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { NavContainer, LogoContainer, NavLinks, NavLink } from "./nav.styles";
import { signOutUser } from "../../firebase/firebase.utils";

const Nav = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <NavContainer>
      <LogoContainer>TODO</LogoContainer>
      <NavLinks>
        <NavLink>shop</NavLink>

        {currentUser ? (
          <NavLink onClick={signOutUser}>SIGN OUT</NavLink>
        ) : (
          <NavLink>SIGN IN</NavLink>
        )}
      </NavLinks>
    </NavContainer>
  );
};

export default Nav;
