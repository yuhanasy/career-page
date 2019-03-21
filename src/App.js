import React, { Component } from "react";

import CareerPage from "./screens/careerPage";
import { GlobalStyle } from "./GlobalStyle";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <CareerPage />
      </React.Fragment>
    );
  }
}

export default App;
