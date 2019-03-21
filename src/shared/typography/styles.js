import styled from "styled-components";

export const BigTitle = styled.h1`
  font-family: "Work Sans", sans-serif;
  font-size: 48px;
  font-weight: 500;
  color: #e0c8ff;
  margin: 0;
`;

export const SectionTitle = styled.h2`
  font-family: "Work Sans", sans-serif;
  font-size: 36px;
  font-weight: 500;
  color: white;
  margin: 0;
`;

export const InfoTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: white;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  color: ${props => props.color || "white"};
`;
