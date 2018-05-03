import React, { Component } from "react";
import MapView from "./components/MapView";
import LocationButton from "./components/LocationButton";

class App extends Component {
  state = {
    lat: 55.865477,
    lng: -4.257998,
    zoom: 14
  };

  handleLocationChange = coords => {
    this.setState({ ...coords });
  };

  render() {
    const locations = [
      { name: "Barcelona", coords: { lat: 41.385064, lng: 2.173403 } },
      { name: "Berlin", coords: { lat: 52.52, lng: 13.404954 } },
      { name: "Glasgow", coords: { lat: 55.864237, lng: -4.251806 } }
    ];
    return (
      <React.Fragment>
        <MapView
          center={[this.state.lat, this.state.lng]}
          zoom={this.state.zoom}
        />
        {locations.map(location => (
          <LocationButton {...location} onClick={this.handleLocationChange} />
        ))}
      </React.Fragment>
    );
  }
}

export default App;
