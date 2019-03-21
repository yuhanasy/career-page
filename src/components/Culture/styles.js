import styled from "styled-components";

import { Section } from "../../shared/layout/styles";

export const CultureSection = styled(Section)`
  position: relative;
  background-color: transparent;
  padding-top: 80px;
  padding-bottom: 80px;
`;

export const CultureBackground = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 800px;
  background: linear-gradient(to left, #683d83, #1b0347);
`;

export const PhotoCollage = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: relative;

  img {
    width: 100%;
  }
`;
