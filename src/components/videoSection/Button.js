import React from "react";

const Button = (props) => {
	return (
		<a className="btn" href="/#" onClick={props.click}>
			{props.value}
		</a>
	);
};

export default Button;
