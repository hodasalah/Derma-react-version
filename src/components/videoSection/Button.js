import React from "react";

const Button = (props) => {
	return (
		<a className="btn" href="/#">
			{props.value}
		</a>
	);
};

export default Button;
