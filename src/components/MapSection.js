import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useGlobalContext } from "../context";

const MapSection = () => {
  const {  filteredData } = useGlobalContext();
	const position = [27.69798874810426, 85.32922094187085];

	const filterFeatures = (feature) => {
    return feature.geometry.type === 'Polygon' || feature.geometry.type === 'MultiPolygon';
  };

  const geoJsonStyle = (feature) => {
    if (feature.geometry.type === 'Point') {
      return { display: 'none' }; 
    }
    return {
       fillColor: 'blue', 
    };
  };
	return (
			<MapContainer center={position} zoom={13} style={{height:'100vh'}}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
			<GeoJSON data={filteredData}  style={geoJsonStyle} filter={filterFeatures}/>
			
			</MapContainer>
	);
};

export default MapSection;
