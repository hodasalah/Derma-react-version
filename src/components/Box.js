import React from "react";
import Img from "./img";

const BlogBox = (props) => {
	return (
		<article className={props.sectionClass}>
			<Img source={props.source} name={props.name} />
			<article className={props.info}>
				<h3 className={props.head}>{props.headTitle}</h3>
				<p className="p">{props.children}</p>
				{props.withLink ? (
					<a href="/#" className="link">
						{props.link}
					</a>
				) : null}
			</article>
		</article>
	);
};

export default BlogBox;
