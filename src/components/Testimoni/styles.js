import styled from "styled-components";

import { InfoTitle, Paragraph } from "../../shared/typography/styles";

export const CarouselWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 320px;
`;

export const CarouselTitle = styled(InfoTitle)`
  font-size: 24px;
  color: #3e396b;
`;

export const CarouselContent = styled(Paragraph)`
  font-size: 32px;
  line-height: 1.5;
  color: #ae90cb;
  padding-right: 20%;
`;

export const CarouselPict = styled.img`
  width: 100%;
  max-height: 400px;
  border-radius: 4px;
`;

export const CarouselCredit = styled(Paragraph)`
  color: #ae90cb;
  font-weight: 400;

  span {
    color: #3e396b;
    font-weight: 500;
  }
`;

export const Dot = styled.span`
  cursor: pointer;
  height: 8px;
  width: 8px;
  margin: 0 8px;
  background-color: #ae90cb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.2s ease;

  :hover {
    background-color: #3e396b;
  }
`;
