import React, { Component } from "react";

import Header from "../../components/Nav/";
import Hero from "../../components/Hero";
import Profile from "../../components/Profile";
import Testimoni from "../../components/Testimoni";
import NodefluxCulture from "../../components/Culture";
import OpenJob from "../../components/OpenJob";
import Footer from "../../components/Footer";

class CareerPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Profile />
        <Testimoni />
        <NodefluxCulture />
        <OpenJob />
        <Footer />
      </div>
    );
  }
}

export default CareerPage;
