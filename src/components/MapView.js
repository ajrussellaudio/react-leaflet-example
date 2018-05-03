import React from "react";
import { Map, TileLayer } from "react-leaflet";
import "./leaflet.css";

const MapView = ({ lat, lng, zoom }) => (
  <Map center={[lat, lng]} zoom={zoom}>
    <TileLayer
      attribution={`<a href="http://osm.org/copyright">OpenStreetMap</a> contributors`}
      url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  </Map>
);

export default MapView;
