import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import { SearchResults } from "./types";

export default function Map({ searchResults }: any) {
  const [selectedLocation, setSelectedLocation] = useState({});
  const coordinates = searchResults.map((searchResult: SearchResults) => ({
    latitude: searchResult.lat,
    longitude: searchResult.long,
  }));

  const center = getCenter(coordinates);

  const [viewPort, setViewPort] = useState({
    width: "100%",
    height: "100%",
    // @ts-ignore
    latitude: center.latitude,
    // @ts-ignore
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/fabiuc/cl8oqkadj000a14t5g1tv8ra5"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewPort}
      onMove={(viewport: any) => setViewPort(viewport.viewState)}
    >
      {searchResults.map((result: SearchResults) => (
        <div key={result.long}>
          <Marker latitude={result.lat} longitude={result.long}>
            <p
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
            >
              📍
            </p>
          </Marker>
        </div>
      ))}
    </ReactMapGL>
  );
}
