import React from "react";
import arrow from "../../assets/images/arrow.png";
import "./style.scss";
const Reference = () => {
	return (
		<section className="section_ref grey-bg">
			<div className="wrapper">
				<img src={arrow} alt="arrow" />
				<h2 className="heading heading_blue heading_big">References</h2>
			</div>
		</section>
	);
};

export default Reference;
