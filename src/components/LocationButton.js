import React from "react";

const LocationButton = ({ name, coords, onClick }) => (
  <button onClick={() => onClick(coords)}>Take me to {name}</button>
);

export default LocationButton;
