import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "./MapView.css";

const MarkerWithInfoWindow = ({ position }) => (
  <Marker position={position}>
    <Popup>
      <React.Fragment>
        <h3>Holy shit</h3>
        <p>This is so much easier</p>
      </React.Fragment>
    </Popup>
  </Marker>
);

const MapView = ({ center, zoom }) => (
  <Map center={center} zoom={zoom}>
    <TileLayer
      attribution={`<a href="http://osm.org/copyright">OpenStreetMap</a> contributors`}
      url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <MarkerWithInfoWindow position={center} />
  </Map>
);

export default MapView;
