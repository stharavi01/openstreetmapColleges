import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useGlobalContext } from "../context";
import { useState, useEffect } from "react";
import schoolIcon from "../images/school.png";
import * as turf from "@turf/turf"; 

const MapSection = () => {
  const { filteredProperties, filteredData, originalData} = useGlobalContext();
  const [key, setKey] = useState(0);
  const position = [27.69798874810426, 85.32922094187085];

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [originalData]);

  const filterFeatures = (feature) => {
    return feature.geometry.type === 'Polygon' || feature.geometry.type === 'MultiPolygon';
  };

  const geoJsonStyle = (feature) => {
    if (feature.geometry.type === 'Point') {
      return { display: 'none' };
    }
    return {
      fillColor: 'white',
      color: "white",
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
  .map((feature, id) => {
    const centroid = turf.centerOfMass(feature);
    const centroidCoordinates = centroid.geometry.coordinates;
    const markerPosition = [centroidCoordinates[1], centroidCoordinates[0]];

    // Access properties for a specific college based on id
    const collegeInfo = filteredProperties[id];

      return (
        <Marker key={id} position={markerPosition} icon={schoolMarkerIcon}>
        <Popup>
          <div>
            
            <h4>{collegeInfo.name || 0}</h4>
            <p>Level: {collegeInfo.iscedLevel}</p>
            <p>Building Count: {collegeInfo.buildingCount}</p>
             <p>Isced Level: {collegeInfo.iscedLevel}</p>
              <p>Operator Type: {collegeInfo.operatorType}</p>
               <p>Personnel Count: {collegeInfo.personnelCount}</p>
               <p>student Count : {collegeInfo.studentCount}</p>
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
      <GeoJSON data={originalData} key={key} style={geoJsonStyle} filter={filterFeatures} />
      {collegeMarkers}
    </MapContainer>
  );
};

export default MapSection;
