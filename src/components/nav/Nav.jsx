import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import { NavContainer, LogoContainer, NavLinks, NavLink } from "./nav.styles";
import { signOutUser } from "../../firebase/firebase.utils";
import { GoSignOut } from "react-icons/go";
import { AiFillHome } from "react-icons/ai";

const Nav = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <NavContainer>
        <LogoContainer>
          <AiFillHome />
        </LogoContainer>
        <NavLinks>
          {/* <NavLink>shop</NavLink> */}

          {currentUser ? (
            <NavLink to="/" onClick={signOutUser}>
              <GoSignOut />
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink>SIGN IN</NavLink>
          )}
        </NavLinks>
      </NavContainer>
      <Outlet />
    </>
  );
};

export default Nav;
