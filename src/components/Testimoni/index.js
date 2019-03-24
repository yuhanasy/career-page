import React from "react";

import { Section } from "../../shared/layout/styles";
import {
  CarouselWrapper,
  CarouselTitle,
  CarouselContent,
  CarouselPict,
  Dot,
  CarouselCredit
} from "./styles";

import data from "./constants.json";
const pictures = require.context("../../images/", true);

class Testimoni extends React.Component {
  state = {
    id: "1"
  };

  handleClick = e => {
    const id = e.target.id;
    this.setState({ id });
  };

  render() {
    const { testimoni } = data;
    const { id } = this.state;
    return (
      <Section>
        <CarouselTitle>Hear from nodefux</CarouselTitle>
        {testimoni
          .filter(d => d.id === id)
          .map(d => (
            <CarouselWrapper key={d.id}>
              <div>
                <CarouselContent>{`"${d.content}"`}</CarouselContent>
                <CarouselCredit>
                  <span>{d.name}</span>
                  {`, `}
                  {d.position}
                </CarouselCredit>
              </div>
              <CarouselPict src={pictures(`./people-${d.id}.jpg`)} />
            </CarouselWrapper>
          ))}
        {testimoni.map(d => (
          <Dot id={d.id} onClick={this.handleClick} key={d.id} />
        ))}
      </Section>
    );
  }
}

export default Testimoni;
