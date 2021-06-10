import React, { useState } from "react";
import Backdrop from "../../../components/UI/backdrop";
import { NavLink } from "react-router-dom";

import "./style.scss";

const Nav = (props) => {
	console.log(props);
	const mainNav = {
		items: [
			"Bedingungen",
			"Behandlungen",
			"Veranstaltungen",
			"Werkzeuge",
			"Forschung und Erkenntnisse",
		],
	};
	const SecUL = {
		id: "Behandlungen",
		items: [
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
		],
	};
	const thirdUL = {
		items: [
			"Overview",
			"Mode of Action",
			"Efficacy",
			"Quality of Life",
			"Safety",
			"Dosing",
			"News",
			"	Technical Information",
		],
	};
	// second nav is related to second link in nav 1
	// so i define id for second nav to show it just when
	// we click in second link in nav1
	const [item, setItem] = useState("");
	const [subItem, setSubItem] = useState("");
	const [isActive, setIsActive] = useState(false);
	const [show, setShow] = useState(false);

	const click = (item) => {
		setItem(item);
		setIsActive(true);
	};
	const showThird = (it) => {
		setSubItem(it);
		setShow(true);
	};

	return (
		<>
			<Backdrop show={props.open} />,
			<nav className={props.open ? "active" : "close"}>
				{props.open ? (
					<button
						onClick={() => props.closeHandelar(false)}
						className="btnClose"
					>
						X
					</button>
				) : null}
				<ul className="nav_first">
					{mainNav.items.map((el) => (
						<li key={el}>
							<NavLink
								to={`/${el}`}
								activeClassName="active"
								onClick={() => click(el)}
							>
								{el}
							</NavLink>
						</li>
					))}
				</ul>
				{isActive && item === SecUL.id && (
					<ul className="nav_sec grey-bg">
						{SecUL.items.map((el) => (
							<li key={el}>
								<NavLink
									to={`/${item}/${el}`}
									activeClassName="active"
									onClick={() => showThird(el)}
								>
									{el}
								</NavLink>
							</li>
						))}
					</ul>
				)}

				{show && item === SecUL.id ? (
					<ul className="nav_third blue-bg">
						{thirdUL.items.map((li) => (
							<li key={li}>
								<NavLink to={`/${item}/${subItem}/${li}`}>
									{li}
								</NavLink>
							</li>
						))}
					</ul>
				) : null}
			</nav>
		</>
	);
};

export default Nav;
