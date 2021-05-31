import React from "react";
import heroLogo from "../../assets/images/Adtralza.png";
import "./style.scss";

const Hero = () => {
	return (
		<section className="section_hero">
			<div className="wrapper">
				<img src={heroLogo} alt="Adtralza" />

				<h2 className="heading heading_white heading_big">
					Adtralza® is a new treatment for adult patients with
					moderate-to-severe atopic dermatitis (eczema) who are
					candidates for systemic therapy.
				</h2>
			</div>
		</section>
	);
};

export default Hero;
