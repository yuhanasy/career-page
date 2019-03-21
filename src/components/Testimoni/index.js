import React from "react";

import { Section } from "../../shared/layout/styles";
import { CarouselWrapper, PeoplePict } from "./styles";
import Carousel from "../Carousel";

import people from "../../images/people-1.jpg";

const Testimoni = () => {
  return (
    <Section>
      <CarouselWrapper>
        <Carousel />
        <PeoplePict src={people} />
      </CarouselWrapper>
    </Section>
  );
};

export default Testimoni;
