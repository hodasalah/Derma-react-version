import React from "react";
import "./style.scss";
import Backdrop from "../backdrop";

const Modal = (props) => {
	return (
		<>
			<Backdrop show={props.show} click={props.closed} />
			<div
				className="Modal"
				style={{
					transform: props.show
						? "translateY(0)"
						: "translateY(-100vh)",
					opacity: props.show ? 1 : 0,
				}}
			>
				{props.children}
			</div>
		</>
	);
};

export default React.memo(Modal);
