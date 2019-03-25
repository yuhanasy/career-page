import styled from "styled-components";

import { InfoTitle, Paragraph } from "../../shared/typography/styles";
import { Section } from "../../shared/layout/styles";

export const JobSection = styled(Section)`
  padding-top: 80px;
  padding-bottom: 120px;
`;

export const JobWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 6%;
  grid-row-gap: 10%;
  grid-template-rows: 40px 1fr;
`;

export const TabWrapper = styled.ul`
  grid-column: 1 / 4;
  width: 75%;
  margin: 0 auto;
  color: #726e91;
  cursor: pointer;

  display: flex;
  justify-content: space-around;
  align-items: center;

  li {
    border-bottom: 2px solid
      ${props => (props.active === 1 ? "#dd9fff" : "transparent")};

    :hover {
      border-bottom: 2px solid #dd9fff;
    }
  }
`;

export const JobCard = styled.div`
  height: 100px;
  padding: 20px;
  background: ${props => props.color};
  border-radius: 8px;
  box-shadow: 0px 14px 50px -30px black;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const JobTitle = styled(InfoTitle)`
  margin: 0;
  font-size: 20px;
`;

export const JobLocation = styled(Paragraph)`
  margin: 0;
  font-size: 16px;
`;
