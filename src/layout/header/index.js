import React, { useState } from "react";
import TopSection from "./topSection";
import MobBtn from "../../components/mobileBtn";
import Nav from "./nav";

const Header = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header>
			<TopSection>
				<MobBtn click={() => setIsOpen(!isOpen)} />
			</TopSection>
			<Nav isOpen={isOpen} />
		</header>
	);
};
export default Header;
