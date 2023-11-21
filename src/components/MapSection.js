import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../data";
import "leaflet/dist/leaflet.css";
import { collegeData } from "../data";
const MapSection = () => {
	const position = [27.69798874810426, 85.32922094187085];

	return (
		<div>
			<MapContainer center={position} zoom={13} className="map-section">
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>

				{collegeData.features.map((feature) => {
					const { properties, geometry, id } = feature;
					console.log(properties);
					return (
						<Marker
							key={id}
							position={[geometry.coordinates[1], geometry.coordinates[0]]}
						>
							<Popup>{properties.name}</Popup>
						</Marker>
					);
				})}
			</MapContainer>
		</div>
	);
};
export default MapSection;
