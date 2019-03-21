import React from "react";

import {
  HeaderWrapper,
  NavContainer,
  Logo,
  HeaderContent,
  NavMenu,
  Menu,
  HiringButton
} from "./styles";

import nodeflux from "../../images/nodeflux.png";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <a href="/">
          <Logo src={nodeflux} />
        </a>
        <NavContainer>
          <NavMenu>
            <Menu>Solutions</Menu>
            <Menu>Product</Menu>
            <Menu>Analytic</Menu>
            <Menu>Case Study</Menu>
            <Menu>Contact Us</Menu>
          </NavMenu>
          <HiringButton>We are Hiring</HiringButton>
        </NavContainer>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
