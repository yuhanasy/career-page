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
  height: 1000px;
  /* background: linear-gradient(to left, #683d83, #1b0347); */
`;

export const HeroContent = styled.div`
  width: 50%;
  position: relative;
`;

export const HeroImage = styled.div`
  margin-top: 100px;
  width: 100%;
  position: relative;

  img {
    width: 100%;
  }
`;
