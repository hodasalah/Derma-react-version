import React from "react";
import "./style.scss";

const MobBtn = (props) => {
	return (
		<div role="button" className="mobile_btn" onClick={props.click}>
			<span></span>
		</div>
	);
};

export default MobBtn;
