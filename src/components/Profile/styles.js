import styled from "styled-components";

export const ProfileTitle = styled.div`
  width: 50%;
`;

export const ProfileGrid = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10%;
  grid-row-gap: 12%;
`;
