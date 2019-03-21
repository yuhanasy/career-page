import React, { Component } from "react";

import Header from "../../components/Nav/";
import Hero from "../../components/Hero";
import Profile from "../../components/Profile";
import Testimoni from "../../components/Testimoni";
import NodefluxCulture from "../../components/Culture";

class CareerPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Profile />
        <Testimoni />
        <NodefluxCulture />
      </div>
    );
  }
}

export default CareerPage;
