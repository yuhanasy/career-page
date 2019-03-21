import React, { Component } from "react";

import Header from "../../components/Nav/";
import Hero from "../../components/Hero";
import Profile from "../../components/Profile";

class CareerPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Profile />
      </div>
    );
  }
}

export default CareerPage;
