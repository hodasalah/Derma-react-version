import React, { useState } from "react";

import "./style.scss";

const ScrollButton = () => {
	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		/* console.log(scrolled); */
		if (scrolled > 300) {
			setVisible(true);
		} else if (scrolled <= 300) {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	window.addEventListener("scroll", toggleVisible);

	return (
		<>
			{visible ? (
				<button className="scrollToTop" onClick={scrollToTop}>
					<svg
						id="Layer_1"
						data-name="Layer 1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 111.27 122.88"
						fill="#c017a2"
					>
						<title>top-arrow</title>
						<path d="M79.79,122.88V64.44H102c3.71-.16,6.35-1.39,7.87-3.7,4.13-6.19-1.51-12.31-5.42-16.62C93.35,31.94,68.22,9.84,62.74,3.44c-4.15-4.59-10.06-4.59-14.21,0-5.66,6.61-32.16,30-42.71,41.85C2.16,49.41-2.37,55,1.44,60.74c1.53,2.31,4.17,3.54,7.88,3.7H31.47v58.44Z" />
					</svg>
				</button>
			) : null}
		</>
	);
};

export default ScrollButton;
