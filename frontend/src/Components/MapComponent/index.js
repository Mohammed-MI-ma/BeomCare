import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet"; // Import Leaflet library
import { motion } from "framer-motion";

const MapComponent = ({ selectedLocation, setSelectedLocation }) => {
  const MapClickHandler = () => {
    useMapEvents({
      click: (e) => {
        setSelectedLocation({
          lat: e.latlng.lat,
          lng: e.latlng.lng,
        });
      },
    });
    return null;
  };

  // Define a custom icon
  const customIcon = new L.Icon({
    iconUrl: "https://svgsilh.com/svg/309739.svg", // Path to your custom icon image
    iconSize: [32, 32], // Size of the icon
    iconAnchor: [16, 32], // Anchor point of the icon
  });
  return (
    <motion.div
      initial={{ x: "50vw" }}
      animate={{ x: 0 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 0.6,
      }}
    >
      <MapContainer
        center={[selectedLocation.lat, selectedLocation.lng]}
        zoom={18}
        style={{
          height: "300px",
          width: "100%",
        }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {selectedLocation && (
          <Marker
            icon={customIcon}
            position={[selectedLocation.lat, selectedLocation.lng]}
          />
        )}
        <MapClickHandler />
      </MapContainer>
    </motion.div>
  );
};

const LocationForm = () => {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 34.02184645937183, // Latitude for Rabat, Hassan, Morocco
    lng: -6.837458135560156, // Longitude for Rabat, Hassan, Morocco
  });

  return (
    <MapComponent
      selectedLocation={selectedLocation}
      setSelectedLocation={setSelectedLocation}
    />
  );
};

export default LocationForm;
