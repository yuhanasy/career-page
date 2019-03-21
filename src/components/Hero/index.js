import React from "react";

import { BigTitle, Paragraph } from "../../shared/typography/styles";
import { HeroSection, HeroContent, HeroBackground, HeroImage } from "./styles";
import TheTeam from "../TheTeam/";

import heroImage from "../../images/hero-image.jpeg";

const Hero = () => {
  return (
    <HeroSection>
      <HeroBackground viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#1b0347" />
            <stop offset="100%" stop-color="#683d83" />
          </linearGradient>
        </defs>
        <polygon points="0,0 100,0 100,80 0,100" fill="url(#grad1)" />
      </HeroBackground>
      <BigTitle>Be you at Nodeflux</BigTitle>
      <HeroContent>
        <Paragraph color="#ae90cb">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
          consequuntur, quia quisquam facere nihil, quae, tempore dolores
          reprehenderit labore quos vero exercitationem maxime magni. Blanditiis
          necessitatibus fuga in qui error?
        </Paragraph>
      </HeroContent>
      <HeroImage>
        <img src={heroImage} alt="nodeflux" />
        <TheTeam />
      </HeroImage>
    </HeroSection>
  );
};

export default Hero;
