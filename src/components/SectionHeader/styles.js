import styled from "styled-components";

export const SectionHeaderWrapper = styled.div`
  position: relative;
  width: 75%;
  margin: ${props => props.center && "auto"};
  margin-bottom: 80px;
  text-align: ${props => (props.center ? "center" : "left")};
`;
