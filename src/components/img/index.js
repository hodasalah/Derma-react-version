import React from "react";
import "./style.scss";

const Img = (props) => {
	return (
		<figure>
			<img src={props.source} alt={props.name} onClick={props.clickImg} />
		</figure>
	);
};

export default Img;
