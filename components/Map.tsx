import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import { SearchResults } from "./types";

export default function Map({ searchResults }: any) {
  const [viewPort, setViewPort] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4347,
    zoom: 11,
  });

  const coordinates = searchResults.map((searchResult: SearchResults) => ({
    latitude: searchResult.lat,
    longitude: searchResult.long,
  }));

  return (
    <div>
      <ReactMapGL
        mapStyle="mapbox://styles/fabiuc/cl8oqkadj000a14t5g1tv8ra5"
        mapboxAccessToken={process.env.mapbox_key}
        {...viewPort}
        onMove={(viewport: any) => setViewPort(viewport.viewState)}
      ></ReactMapGL>
    </div>
  );
}
