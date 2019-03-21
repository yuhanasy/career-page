import styled from "styled-components";

import { InfoTitle, Paragraph } from "../../shared/typography/styles";
import { Section } from "../../shared/layout/styles";

export const JobSection = styled(Section)`
  padding-top: 120px;
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

  display: flex;
  justify-content: space-around;
  align-items: center;

  li {
    display: inline-block;
    border-bottom: 2px solid rgba(0, 0, 0, 0);
    :hover {
      border-bottom: 2px solid #dd9fff;
    }
  }
`;

export const JobCard = styled.div`
  width: 100%;
  height: 100px;
  padding: 20px;
  background: ${props => props.color};
  border-radius: 8px;

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
