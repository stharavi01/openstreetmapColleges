import FilterSection from "./FilterSection";
import MapSection from "./MapSection";
import "./index.css";
const HomeLayout = () => {
	return (
		<div>
			<h1 className="heading"> Colleges List</h1>
			<div className="grid-container">
				<MapSection />
				<FilterSection />
			</div>
		</div>
	);
};
export default HomeLayout;
