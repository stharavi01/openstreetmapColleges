import FilterSection from "../components/FilterSection";
import MapSection from "../components/MapSection";

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
