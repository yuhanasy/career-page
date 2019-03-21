import React, { Component } from "react";

import Header from "../../components/Nav/";
import Hero from "../../components/Hero";
import Profile from "../../components/Profile";
import Testimoni from "../../components/Testimoni";

class CareerPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Profile />
        <Testimoni />
      </div>
    );
  }
}

export default CareerPage;
