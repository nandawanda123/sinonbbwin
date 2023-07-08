import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxleGFuZGVyLWJlbmdhbGkiLCJhIjoiY2xmaWg4czliMmNudzNxbjEyN2ZiNmdueSJ9.akD_X9IcmFEdJqF5iH5reg";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
