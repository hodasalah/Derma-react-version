import React, { useState } from "react";
import TopSection from "./topSection";
import MobBtn from "../../components/mobileBtn";
import Nav from "./nav";

const Header = (props) => {
	const [showNav, setShowHandelar] = useState(false);
	return (
		<header>
			<TopSection>
				<MobBtn click={() => setShowHandelar(true)} />
			</TopSection>
			<Nav open={showNav} closeHandelar={setShowHandelar} />
		</header>
	);
};
export default Header;
