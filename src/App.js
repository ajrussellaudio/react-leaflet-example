import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";
import "./leaflet.css";

class App extends Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13
  };

  render() {
    return (
      <Map center={[this.state.lat, this.state.lng]} zoom={this.state.zoom}>
        <TileLayer
          attribution={`<a href="http://osm.org/copyright">OpenStreetMap</a> contributors`}
          url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </Map>
    );
  }
}

export default App;
