import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useGlobalContext } from "../context";
import { useState, useEffect } from "react";
import schoolIcon from "../images/school.png";
import * as turf from "@turf/turf"; // Import Turf.js library

const MapSection = () => {
  const { filteredData } = useGlobalContext();
  const [key, setKey] = useState(0);
  const position = [27.69798874810426, 85.32922094187085];

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [filteredData]);

  const filterFeatures = (feature) => {
    return feature.geometry.type === 'Polygon' || feature.geometry.type === 'MultiPolygon';
  };

  const geoJsonStyle = (feature) => {
    if (feature.geometry.type === 'Point') {
      return { display: 'none' };
    }
    return {
      fillColor: 'white',
    };
  };

  const schoolMarkerIcon = L.icon({
    iconUrl: schoolIcon,
    iconSize: [20, 20],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });

  const collegeMarkers = filteredData.features
    .filter(filterFeatures)
    .map((feature, index) => {
      const centroid = turf.centerOfMass(feature); // Calculate centroid using Turf.js

      // Extract coordinates of the centroid
      const centroidCoordinates = centroid.geometry.coordinates;
      const markerPosition = [centroidCoordinates[1], centroidCoordinates[0]];

      return (
        <Marker key={index} position={markerPosition} icon={schoolMarkerIcon}>
          <Popup>
            <div>
              <h1>College Info</h1>
              {/* You can add specific college information here */}
            </div>
          </Popup>
        </Marker>
      );
    });

  return (
    <MapContainer
      key={key}
      center={position}
      zoom={13}
      style={{ height: 'calc(100vh - 45px)', marginTop: '20px' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON data={filteredData} key={key} style={geoJsonStyle} filter={filterFeatures} />
      {collegeMarkers}
    </MapContainer>
  );
};

export default MapSection;
