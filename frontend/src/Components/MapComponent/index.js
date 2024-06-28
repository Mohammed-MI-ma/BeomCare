import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import * as L from "leaflet";
import { motion } from "framer-motion";

const MapComponent = ({ selectedLocation, setSelectedLocation }) => {
  const [localLocation, setLocalLocation] = useState(selectedLocation);

  useEffect(() => {
    setLocalLocation(selectedLocation);
  }, [selectedLocation]);

  const MapClickHandler = () => {
    useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        console.log("Latitude:", lat);
        console.log("Longitude:", lng);

        setSelectedLocation({ lat: lat, lng: lng });
        setLocalLocation({ lat: lat, lng: lng });
      },
    });
    return null;
  };

  const customIcon = new L.Icon({
    iconUrl: "https://svgsilh.com/svg/309739.svg",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <MapContainer
        center={[localLocation.lat, localLocation.lng]}
        zoom={16}
        style={{ height: "300px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {localLocation && (
          <Marker
            icon={customIcon}
            position={[localLocation.lat, localLocation.lng]}
          />
        )}
        <MapClickHandler />
      </MapContainer>
    </motion.div>
  );
};

export default MapComponent;
