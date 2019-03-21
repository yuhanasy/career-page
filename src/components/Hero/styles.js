import styled from "styled-components";

import { Section } from "../../shared/layout/styles";

export const HeroSection = styled(Section)`
  margin-top: 114px;
  padding-top: 100px;
`;

export const HeroBackground = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 900px;
  background: linear-gradient(to left, #683d83, #1b0347);
  z-index: -1;
`;

export const HeroContent = styled.div`
  width: 50%;
`;

export const HeroImage = styled.div`
  margin-top: 100px;
  width: 100%;
  position: relative;

  img {
    width: 100%;
  }
`;
