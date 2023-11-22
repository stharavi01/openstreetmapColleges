import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { data } from "../data";

const MapSection = () => {
	const position = [27.69798874810426, 85.32922094187085];

	return (
		<div>
			<MapContainer center={position} zoom={13} className="map-section">
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>

				<GeoJSON data={data} />
			</MapContainer>
		</div>
	);
};

export default MapSection;
