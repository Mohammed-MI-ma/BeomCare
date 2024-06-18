import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  Polygon,
  FeatureGroup,
  Popup,
} from "react-leaflet";
import * as L from "leaflet";
import { motion } from "framer-motion";
import { Tooltip } from "antd";
import useFontFamily from "../../Utilities/useFontFamily";

const MapNeighborhood = () => {
  const customIcon = new L.Icon({
    iconUrl: "https://svgsilh.com/svg/309739.svg",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });
  const polygonCoords = [
    [33.990267, -6.857057],

    [33.985665, -6.84913],
    [33.993836, -6.838328],
    [33.999057, -6.835652],
    [33.999376, -6.840292],
    [34.00313, -6.843162],
    [34.00688, -6.842092],
    [34.012669, -6.838742],

    [34.009349, -6.851695],
    [34.006143, -6.853043],

    [34.002854, -6.851196],
    [33.996566, -6.851171],
  ];
  const polygonCoords1 = [
    [33.973403, -6.865042],

    [33.962014, -6.852597],
    [33.993836, -6.838328],
  ];
  const fontFamilyLight = useFontFamily("Light");
  const text = L.divIcon({
    html: `<div style="font-family: ${fontFamilyLight};background-color:white;width:fit-content;padding:10px">AGDAL RIAD</div>`,
  });
  return (
    <section className="w-full flex justify-center items-center flex-col">
      <h1>Visualisez une Multitude de Choses Comme Jamais Auparavant</h1>
      <MapContainer
        className="shadow-lg w-full mb-10 rounded"
        center={[33.985665, -6.84913]}
        zoom={14}
        style={{ height: "400px", width: "80%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <FeatureGroup>
          <Polygon positions={polygonCoords} color="black" weight={0.5} />
          <Marker position={[33.995501, -6.846304]} icon={text} />
        </FeatureGroup>
        <FeatureGroup>
          <Polygon positions={polygonCoords1} color="black" weight={0.5} />
          <Marker position={[33.995501, -6.846304]} icon={text} />
        </FeatureGroup>
      </MapContainer>
    </section>
  );
};

export default MapNeighborhood;
