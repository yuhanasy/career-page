import React from "react";

import {
  FooterSection,
  FooterBackground,
  ContactWrapper,
  ContactPict,
  FooterWrapper,
  MapLink
} from "./styles";
import SectionHeader from "../SectionHeader";

import contactImage from "../../images/contact.jpg";
import nodefluxWhite from "../../images/nodeflux-white.png";

const Footer = () => {
  return (
    <FooterSection>
      <FooterBackground />
      <ContactWrapper>
        <SectionHeader
          title="Don't see what you looking for"
          desc="Send us an email and tell us how you'd make an impact. We're always looking for talented people to join the team."
        />
        <ContactPict src={contactImage} />
      </ContactWrapper>

      <FooterWrapper>
        <img src={nodefluxWhite} alt="nodeflux" />
        <div />
        <MapLink>
          <h5>Solutions</h5>
          <ul>
            <li>Security & Defense</li>
            <li>Smart City</li>
            <li>Retail</li>
          </ul>
        </MapLink>
        <MapLink>
          <h5>Product</h5>
          <ul>
            <li>Enterprise</li>
            <li>IRIS</li>
          </ul>
        </MapLink>
        <MapLink>
          <h5>Company</h5>
          <ul>
            <li>About</li>
            <li>Career</li>
            <li>Blog's</li>
          </ul>
        </MapLink>
        <MapLink>
          <h5>Get in Touch</h5>
          <ul>
            <li>021 70000</li>
            <li>hello@nodeflux.io</li>
          </ul>
        </MapLink>
      </FooterWrapper>
    </FooterSection>
  );
};

export default Footer;
