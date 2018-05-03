import React, { Component } from "react";
import MapView from "./components/MapView";

class App extends Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13
  };

  render() {
    return (
      <React.Fragment>
        <MapView {...this.state} />
      </React.Fragment>
    );
  }
}

export default App;
