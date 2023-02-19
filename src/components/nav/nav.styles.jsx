import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #93b493;
  position: relative;
  z-index: 5;
  box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.4);
`;

export const LogoContainer = styled.div`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled.div`
  padding: 10px 15px;
  cursor: pointer;
`;
