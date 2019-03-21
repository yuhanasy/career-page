import styled from "styled-components";

import { InfoTitle, Paragraph } from "../../shared/typography/styles";

export const TestimoniTitle = styled(InfoTitle)`
  font-size: 24px;
  color: #3e396b;
`;

export const TestimoniParagraph = styled(Paragraph)`
  font-size: 28px;
  color: #ae90cb;
  padding-right: 20%;
`;

export const Dot = styled.span`
  cursor: pointer;
  height: 8px;
  width: 8px;
  margin: 0 2px;
  background-color: #ae90cb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.2s ease;

  :hover {
    background-color: #3e396b;
  }
`;
