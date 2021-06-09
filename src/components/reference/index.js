import React, { useState } from "react";
import arrow from "../../assets/images/arrow.png";
import "./style.scss";
const Reference = () => {
	const [isActive, toggleActive] = useState(false);
	return (
		<section className="section_ref grey-bg">
			<div className="wrapper">
				<div>
					<button onClick={() => toggleActive(!isActive)}>
						<img src={arrow} alt="arrow" />
					</button>
					<h2 className="heading heading_blue heading_big">
						References
					</h2>
				</div>

				<div className={isActive ? "active" : "content"}>
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s, when an unknown
					printer took a galley of type and scrambled it to make a
					type specimen book
				</div>
			</div>
		</section>
	);
};

export default Reference;
/** cubic-bezier(0.4, 0, 0.2, 1) */
