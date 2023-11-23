import FilterSection from "../components/FilterSection";
import MainHeader from "../components/MainHeader";
import MapSection from "../components/MapSection";
import { Grid } from "semantic-ui-react";

const HomeLayout = () => {
	return (	
			<>
				<MainHeader /> <br />
				<Grid columns={2} >
						<Grid.Column width={10} className="map-container">
							<MapSection />
						</Grid.Column>
						<Grid.Column width={6} className="filter-container">
							<FilterSection />
						</Grid.Column>
					
				</Grid>
			</>
	
	);
};
export default HomeLayout;
