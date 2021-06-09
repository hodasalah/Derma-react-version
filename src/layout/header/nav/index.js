import React from "react";
import Backdrop from "../../../components/UI/backdrop";
import List from "./List";

import "./style.scss";

const Nav = (props) => {
	const firstUL = [
		"Bedingungen",
		"Behandlungen",
		"Veranstaltungen",
		"Werkzeuge",
		"Forschung und Erkenntnisse",
	];
	const SecUL = [
		"Adtralza",
		"Diavonex",
		"Diavobet",
		"Enstilar",
		"Fucidin",
		"Kyntheum",
		"Protopic",
		"Skinoren",
		"Tralokinumab",
		"Xamiol",
	];
	const thirdUL = [
		"Overview",
		"Mode of Action",
		"Efficacy",
		"Quality of Life",
		"Safety",
		"Dosing",
		"News",
		"	Technical Information",
	];

	return (
		<>
			<Backdrop show={props.open} />,
			<nav className={[props.open ? "active" : "close"]}>
				{props.open ? (
					<button
						onClick={() => props.closeHandelar(false)}
						className="btnClose"
					>
						X
					</button>
				) : null}
				<ul className="nav_first">
					<List arr={firstUL} />
				</ul>
				<ul className="nav_sec grey-bg">
					<List arr={SecUL} />
				</ul>
				<ul className="nav_third blue-bg">
					<List arr={thirdUL} />
				</ul>
			</nav>
		</>
	);
};

export default Nav;
