import React from "react";

import { BigTitle, Paragraph } from "../../shared/typography/styles";
import { HeroSection, HeroContent, HeroBackground, HeroImage } from "./styles";
import TheTeam from "../TheTeam/";

import heroImage from "../../images/hero-image.jpeg";

const Hero = () => {
  return (
    <HeroSection>
      <HeroBackground />
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
