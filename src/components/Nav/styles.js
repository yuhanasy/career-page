import styled from "styled-components";

import { Button } from "../../shared/Button/styles";

export const HeaderWrapper = styled.header`
  position: fixed;
  /* background: linear-gradient(to right, #683d83, #1b0347); */
  top: 0;
  z-index: 100;
  width: 100%;
`;

export const HeaderContent = styled.div`
  padding: 2rem 6%;
  display: flex;
  justify-content: space-between;
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fdfdfd;
`;

export const NavMenu = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const Menu = styled.li`
  margin: 0 2rem;
`;

export const Logo = styled.img`
  width: 136px;
`;

export const HiringButton = styled(Button)`
  background-image: linear-gradient(270deg, #4386e9, #38d5f9);
  padding: 0.5em 1.5em;
`;
