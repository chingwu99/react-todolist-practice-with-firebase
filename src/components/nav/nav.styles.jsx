import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-size: 1.2rem;
`;

export const LogoContainer = styled.div`
  height: 100%;
  width: 100px;
  padding: 25px;
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #93b493;
  position: relative;
  z-index: 10;
  box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.4);
`;
