import React from "react";
import { Link } from "react-router-dom";
import Img from "../../components/img";
import LEO from "../../assets/images/LEO logo.png";
import "./style.scss";

const Footer = () => {
	return (
		<footer className="footer blue-bg">
			<div className="wrapper">
				<div className="foot-content">
					<Img source={LEO} name="LEO logo" />
					<ul>
						<li>
							<Link to="/">Contact</Link>
						</li>
						<li>
							<Link to="/">Imprint</Link>
						</li>
						<li>
							<Link to="/">Conditions</Link>
						</li>
						<li>
							<Link to="/">Terms of use</Link>
						</li>
						<li>
							<Link to="/">Privacy</Link>
						</li>
						<li>
							<Link to="/">Cookie content</Link>
						</li>
					</ul>
				</div>
				<div className="copy">
					<p className="heading heading_white">
						© Copyright LEO Pharma 2020 LEO and the LEO Lion Design
						are registered trademarks of LEO Pharma All rights
						reserved
					</p>
					<p>
						<Link to="/">LEO Pharma corporate website</Link>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
