import styled from "styled-components";

import { Section } from "../../shared/layout/styles";

export const FooterSection = styled(Section)`
  position: relative;
  margin-bottom: 0;
  padding-top: 120px;
  padding-bottom: 40px;
`;

export const FooterBackground = styled.svg`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 800px;
  /* background: linear-gradient(115deg, #dd9fff, #8760ff); */
`;

export const ContactWrapper = styled.div`
  width: 600px;
  margin: 0 auto;
  position: relative;

  display: grid;
  grid-template-columns: 1fr 200px;
  align-items: center;
`;

export const ContactPict = styled.img`
  max-height: 400px;
  border-radius: 4px;
  box-shadow: 0px 14px 50px -30px black;
`;

export const FooterWrapper = styled.footer`
  margin-top: 80px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 20px;
  position: relative;
`;

export const MapLink = styled.div`
  color: white;
  font-size: 16px;
  line-height: normal;

  h5 {
    font-size: inherit;
    font-weight: 900;
    margin: 0;
  }
`;
