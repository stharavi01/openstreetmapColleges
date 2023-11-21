import FilterSection from "../components/FilterSection";
import MainHeader from "../components/MainHeader";
import MapSection from "../components/MapSection";
import { Grid } from "semantic-ui-react";

const HomeLayout = () => {
	return (
		<div>
			<MainHeader /> <br />
			<div>
				<Grid columns={2}>
					<Grid.Row>
						<Grid.Column width={10}>
							<MapSection />
						</Grid.Column>
						<Grid.Column width={6}>
							<FilterSection />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		</div>
	);
};
export default HomeLayout;
