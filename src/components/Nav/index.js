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
            <Menu>
              <a href="/">Solutions</a>
            </Menu>
            <Menu>
              <a href="/">Product</a>
            </Menu>
            <Menu>
              <a href="/">Analytic</a>
            </Menu>
            <Menu>
              <a href="/">Case Study</a>
            </Menu>
            <Menu>
              <a href="/">Contact Us</a>
            </Menu>
          </NavMenu>
          <HiringButton>We are Hiring</HiringButton>
        </NavContainer>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
