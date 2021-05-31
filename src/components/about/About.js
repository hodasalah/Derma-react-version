import React from "react";
import Img from "../img";
import about from "../../assets/images/about.png";
import "./style.scss";

const About = () => {
	return (
		<section className="section_about light_grey-bg">
			<div className="wrapper">
				<Img source={about} name="about us" />
				<article className="info">
					<h2 className="heading heading_blue heading_big">
						It is the first and only biologic developed to
						specifically neutralize IL-13, a key driver of atopic
						dermatitis signs and symptoms(1,2)
					</h2>
					<p className="p p_big">
						Learn more about how Adtralza® works and how to use it
						in treatment.
					</p>
				</article>
			</div>
		</section>
	);
};

export default About;
