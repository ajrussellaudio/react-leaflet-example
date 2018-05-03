import React, { Component } from "react";
import MapView from "./components/MapView";

class App extends Component {
  state = {
    lat: 55.865477,
    lng: -4.257998,
    zoom: 14
  };

  render() {
    return (
      <React.Fragment>
        <MapView
          center={[this.state.lat, this.state.lng]}
          zoom={this.state.zoom}
        />
      </React.Fragment>
    );
  }
}

export default App;
