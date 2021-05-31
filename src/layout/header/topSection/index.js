import React from "react";
import Img from "../../../components/img";
import Form from "../../../components/form";
import logo from "../../../assets/images/logo.png";
import "./style.scss";

const TopSection = (props) => {
	return (
		<section className="top_section">
			<div className="wrapper">
				<Img source={logo} name="company logo" />
				<Form />
				{props.children}
			</div>
		</section>
	);
};

export default TopSection;
